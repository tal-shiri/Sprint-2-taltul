

function renderGallery() {
  const images = getImages()
  const elGallery = document.querySelector('.gallery-imges')
  strHtml = ''
  images.forEach(img => {

    strHtml += `<img src="${img.url}" data-id="${img.id}" onclick="onSelectImg(this)" />`
  })

  elGallery.innerHTML = strHtml


  renderTags()
}

function renderTags() {
  const categoriesContainer = document.querySelector('.popular-categoires')
  categoriesContainer.innerHTML = '';
  for (var key in gKeywordSearchCountMap) {
    categoriesContainer.innerHTML += `<div class="category" onClick="onSelectTag(this)" style="font-size: ${Math.min(gKeywordSearchCountMap[key] * 1.5, 40)}px">${key}</div>`
  }
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
  document.querySelector('.gallery-content').style.display = 'block'
  document.querySelector('.gallery').style.textDecoration = 'underline'
  document.querySelector('.meme-editor').style.display = 'none'
}

function navgiateToEditor() {
  document.querySelector('.gallery-content').style.display = 'none'
  document.querySelector('.gallery').style.textDecoration = 'auto'
  document.querySelector('.meme-editor').style.display = 'grid'
}

function onSelectTag(elTag) {
  const tag = elTag.innerText
  increaseFontSize(tag)
  gFilterBy = tag
  renderGallery()
  renderTags()
}
