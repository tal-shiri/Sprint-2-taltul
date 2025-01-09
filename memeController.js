var gElCanvas
var gCtx
//


function onInit() {
  gElCanvas = document.querySelector('canvas')
  gCtx = gElCanvas.getContext('2d')

  renderMeme()
  renderGallery()
  // resizeCanvas()
}



function renderMeme() {

  const meme = getMeme()
  console.log(meme);


  const elImg = new Image()
  elImg.src = `img/${meme.selectedImgId}.jpg`

  elImg.onload = () => {
    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)


    meme.lines.forEach((line, index) => {
      const { txt, color, size, pos, aling, font } = line

      console.log(`Drawing line:`)
      console.log(line)

      console.log(`Selected line: ` + gMeme.selectedLineIdx)
      drawText(txt, size, color, aling, font, pos.x, pos.y)

      if (index === gMeme.selectedLineIdx) {
        drawRectangle(txt, size, aling, pos.x, pos.y)
      }

    })

  }


}

function drawRectangle(txt, size, align, x, y) {
  const textMetrics = gCtx.measureText(txt)
  const textWidth = textMetrics.width
  const textHeight = size
  let rectX, rectY, rectWidth, rectHeight

  rectWidth = textWidth;
  rectHeight = textHeight
  console.log(textMetrics)
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
  console.log(size);

  gCtx.lineWidth = 2
  // gCtx.strokeStyle = 'brown'
  gCtx.fillStyle = color
  gCtx.font = `${size}px ${font}`
  gCtx.textAlign = aling
  gCtx.textBaseline = 'middle'

  gCtx.fillText(text, x, y)
  // gCtx.strokeText(text, x, y)
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
  // console.log('onMove')

  // const { isDrag } = getMeme()
  // if (!isDrag) return
  const { offsetX, offsetY, clientX, clientY } = ev


  // const pos = getEvPos(ev)
  // console.log('pos:', pos)

  // console.log('x' + offsetX);
  // console.log('y' + offsetY);
  // console.log('xc' + clientX);
  // console.log('yc' + clientY);


  const selctedLine = gMeme.lines.find(line => {
    return offsetX > line.pos.x && offsetX < line.pos.x &&
      offsetY > line.pos.y && offsetY < line.pos.y + clientY
  })

  console.log(selctedLine)
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
    setSelectedLine(selectedLine)
    renderMeme()
  } else {
    console.log('No line selected.')
  }
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





