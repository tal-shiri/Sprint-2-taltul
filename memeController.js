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
  console.log(elImg.src);
  const txt = meme.lines[0].txt
  const color = meme.lines[0].color
  const size = meme.lines[0].size
  const x = gElCanvas.width / 2
  const y = gElCanvas.height / 2
  elImg.onload = () => {
    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
    drawText(txt, size, color, x, y)

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
  // console.log(elInput.value);
  const txt = elInput.value
  setLineTxt(txt)
  renderMeme()


}

function onDownloadImg(elLink) {
  console.log(elLink);

  const imgContent = gElCanvas.toDataURL('image/jpeg')
  elLink.href = imgContent
}