var gElCanvas
var gCtx
var isEdit = false

function onInit() {
  gElCanvas = document.querySelector('canvas')
  gCtx = gElCanvas.getContext('2d')
  renderMeme()
  renderGallery()
}

function renderMeme() {
  const meme = getMeme()
  console.log(meme);

  const elImg = new Image()
  elImg.src = `img/${meme.selectedImgId}.jpg`

  elImg.onload = () => {
    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)

    meme.lines.forEach((line, index) => {
      const { txt, color, size, pos, aling, font, isEditing } = line

      // console.log(`Drawing line:`)
      console.log(line)

      // console.log(`Selected line: ` + gMeme.selectedLineIdx)
      drawText(txt, size, color, aling, font, pos.x, pos.y)

      if (index === meme.selectedLineIdx) {
        if (isEdit) {
          drawRectangle(txt, size, aling, pos.x, pos.y, isEditing)
        }
      }
    })
  }
}

function drawRectangle(txt, size, align, x, y, isEditing) {
  const textMetrics = gCtx.measureText(txt)
  const textWidth = textMetrics.width
  const textHeight = size
  let rectX, rectY, rectWidth, rectHeight
  rectWidth = textWidth;
  rectHeight = textHeight

  if (align === 'left') {
    rectX = x
    rectY = y - textHeight / 2
  } else if (align === 'right') {
    rectX = x - textWidth
    rectY = y - textHeight / 2
  } else {
    rectX = x - textWidth / 2
    rectY = y - textHeight / 2
  }
  gCtx.lineWidth = 2
  gCtx.strokeRect(rectX, rectY, rectWidth, rectHeight)
}


function drawText(text, size, color, aling, font, x, y) {
  gCtx.lineWidth = size / 10;
  gCtx.strokeStyle = 'black';
  gCtx.fillStyle = color;
  gCtx.font = `${size}px ${font}`;
  gCtx.textAlign = aling;
  gCtx.textBaseline = 'middle';
  gCtx.strokeText(text, x, y);
  gCtx.fillText(text, x, y);
}

function onEditText(elInput) {
  const txt = elInput.value
  setLineTxt(txt)
  renderMeme()
}

function onIncreaseFont() {
  changeFont('+')
  renderMeme()
}

function onDecreaseFont() {
  changeFont('-')
  renderMeme()
}

function onDownloadImg(elLink) {
  const imgContent = gElCanvas.toDataURL('image/jpeg')
  elLink.href = imgContent
}

function onSetColor(elColor) {
  const color = elColor.value
  setColor(color)
  renderMeme()
}

function onAddText() {
  addLineText({ x: gElCanvas.width / 2, y: gElCanvas.height / 2 })
  renderMeme()
}

function onSwitchLine() {
  switchLine()
  renderMeme()
}

function onMove(ev) {
  const meme = getMeme()

  const selctedLine = meme.lines[meme.selectedLineIdx]
  if (!selctedLine) return

  const isDrag = selctedLine.isDrag
  if (!isDrag) return
  const pos = getEvPos(ev)
  console.log('pos:', pos)
  const dx = pos.x - selctedLine.pos.x
  const dy = pos.y - selctedLine.pos.y
  moveLine(dx, dy)
  renderMeme()
}

function onDown(ev) {
  const { offsetX, offsetY } = ev;

  const selectedLine = gMeme.lines.find(line => {
    const textMetrics = gCtx.measureText(line.txt)
    const textWidth = textMetrics.width
    const textHeight = line.size

    const lineXStart = line.pos.x - textWidth / 2
    const lineXEnd = line.pos.x + textWidth / 2
    const lineYStart = line.pos.y - textHeight / 2
    const lineYEnd = line.pos.y + textHeight / 2

    return (
      offsetX >= lineXStart &&
      offsetX <= lineXEnd &&
      offsetY >= lineYStart &&
      offsetY <= lineYEnd
    )
  })

  if (selectedLine) {
    console.log('Selected Line:', selectedLine)
    isEdit = true
    updateEditor(selectedLine)
    setSelectedLine(selectedLine)
    setLineDrag(true)
    renderMeme()
    document.body.style.cursor = 'grabbing'
  } else {
    console.log('No line selected.')
    isEdit = false
    renderMeme()
  }
}

function onUp() {
  const meme = getMeme()
  const selctedLine = meme.lines[meme.selectedLineIdx]
  if (selctedLine)
    setLineDrag(false)
  document.body.style.cursor = 'default'
}

function onSetAlign(selctor) {
  setAlignText(selctor)
  renderMeme()
}

function onSetFont() {
  const selectedFont = document.querySelector('select').value
  setFont(selectedFont)
  renderMeme()
}

function onMoveStep(direction) {
  setStep(direction)
  renderMeme()
}

function onRemoveLine() {
  removeLine()
  renderMeme()
}

function onOpenPallte() {
  document.getElementById('favcolor').click()
}

function getEvPos(ev) {
  const TOUCH_EVS = ['touchstart', 'touchmove', 'touchend']

  let pos = {
    x: ev.offsetX,
    y: ev.offsetY,
  }

  if (TOUCH_EVS.includes(ev.type)) {
    // Prevent triggering the mouse ev
    ev.preventDefault()
    // Gets the first touch point
    ev = ev.changedTouches[0]
    // Calc the right pos according to the touch screen
    pos = {
      x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
      y: ev.pageY - ev.target.offsetTop - ev.target.clientTop,
    }
  }
  return pos
}

function updateEditor(line) {
  const inputEle = document.getElementById('meme-input')
  const elColorPicker = document.getElementById('favcolor')
  const elFontSelctor = document.getElementById('font-selctor')
  inputEle.value = line.txt
  elColorPicker.value = line.color
  elFontSelctor.value = line.font
}

function onAddEmoji(emoji) {
  let inputEle = document.getElementById('meme-input');
  inputEle.value += emoji;
  onEditText(inputEle)
}

function onUploadImgFacebook(ev) {
  ev.preventDefault()
  const canvasData = gElCanvas.toDataURL('image/jpeg')

  // After a succesful upload, allow the user to share on Facebook
  function onSuccess(uploadedImgUrl) {
    const encodedUploadedImgUrl = encodeURIComponent(uploadedImgUrl)
    console.log('encodedUploadedImgUrl:', encodedUploadedImgUrl)
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUploadedImgUrl}&t=${encodedUploadedImgUrl}`)
  }
  uploadImg(canvasData, onSuccess)
}

function onUploadImgWhatsApp(ev) {
  ev.preventDefault();
  const canvasData = gElCanvas.toDataURL('image/jpeg');
  // After a successful upload, allow the user to share on WhatsApp
  function onSuccess(uploadedImgUrl) {
    const encodedUploadedImgUrl = encodeURIComponent(uploadedImgUrl);
    console.log('encodedUploadedImgUrl:', encodedUploadedImgUrl);

    window.open(`https://wa.me/?text=Check%20out%20this%20image:%20${encodedUploadedImgUrl}`);
  }
  uploadImg(canvasData, onSuccess);
}

function toggleMenu() {
  const nav = document.querySelector('.main-nav');
  nav.classList.toggle('active');
}













