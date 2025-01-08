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
      let x
      let y
      const txt = line.txt
      const color = line.color
      const size = line.size

      console.log(txt);

      if (index === 0) {
        x = gElCanvas.width / 2
        y = gElCanvas.height / 7
      }
      else if (index === 1) {
        x = gElCanvas.width / 2
        y = gElCanvas.height / 1.2
      } else {
        x = gElCanvas.width / 2
        y = gElCanvas.height / 2
      }


      drawText(txt, size, color, x, y)

    })

  }


}




function drawText(text, size, color, x, y) {
  gCtx.lineWidth = 2
  // gCtx.strokeStyle = 'brown'
  gCtx.fillStyle = color
  gCtx.font = `${size}px Aria`
  gCtx.textAlign = 'center'
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
  addLineText()
  renderMeme()
}

function onSwitchLine() {
  switchLine()

}





