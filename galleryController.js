

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
  renderMeme()
}

function onSetFilterBy(elInput) {
  const filterBy = elInput.value
  if (filterBy === '') setFilterBy(undefined)

  if (filterBy) setFilterBy(filterBy)

  renderGallery()
}