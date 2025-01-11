

function renderGallery() {
  const images = getImages()
  const elGallery = document.querySelector('.gallery-imges')
  strHtml = ''
  images.forEach(img => {

    strHtml += `<img src="${img.url}" data-id="${img.id}" onclick="onSelectImg(this)" />`
  })

  elGallery.innerHTML = strHtml
}

function onSelectImg(elSelctedImg) {
  const id = elSelctedImg.dataset.id
  setImg(id)
  navgiateToEditor()
  renderMeme()
}

function onSetFilterBy(elInput) {
  const filterBy = elInput.value
  if (filterBy === '') setFilterBy(undefined)

  if (filterBy) setFilterBy(filterBy)

  renderGallery()
}

function onNavgiateToGallery() {
  console.log('ssss');

  document.querySelector('.gallery-content').style.display = 'block'
  document.querySelector('.meme-editor').style.display = 'none'
}

function navgiateToEditor() {
  document.querySelector('.gallery-content').style.display = 'none'
  document.querySelector('.meme-editor').style.display = 'grid'
}

