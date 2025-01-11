
var gImgs = [{ id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] },
{ id: 2, url: 'img/2.jpg', keywords: ['funny', 'cat'] },
{ id: 3, url: 'img/3.jpg', keywords: ['funny', 'cat'] },
{ id: 4, url: 'img/4.jpg', keywords: ['funny', 'comics'] },
{ id: 5, url: 'img/5.jpg', keywords: ['dog', 'cat'] },
{ id: 6, url: 'img/6.jpg', keywords: ['funny', 'dog'] },
{ id: 7, url: 'img/7.jpg', keywords: ['baby', 'cat'] },
{ id: 8, url: 'img/8.jpg', keywords: ['funny', 'cat'] },
{ id: 9, url: 'img/9.jpg', keywords: ['sad', 'drinks'] },
{ id: 10, url: 'img/10.jpg', keywords: ['funny', 'cat'] },
{ id: 11, url: 'img/11.jpg', keywords: ['baby', 'cat'] },
{ id: 12, url: 'img/12.jpg', keywords: ['happy', 'cat'] },
{ id: 13, url: 'img/13.jpg', keywords: ['funny', 'dog'] },
{ id: 14, url: 'img/14.jpg', keywords: ['magic', 'cat'] },
{ id: 15, url: 'img/15.jpg', keywords: ['funny', 'cat'] },

]
var gKeywordSearchCountMap = { 'funny': 20, 'cat': 16, 'baby': 12, 'dog': 10, 'drinks': 12, 'magic': 6, 'comics': 20 }
var gFilterBy = ''

function getImages() {
  if (gFilterBy === undefined) return gImgs
  if (!gFilterBy) return gImgs

  const filteredImages = gImgs.filter((img) =>
    img.keywords.some((word) => word.toLowerCase().includes(gFilterBy.toLowerCase()))
  )
  return filteredImages
}

function setFilterBy(filterBy) {
  gFilterBy = filterBy
}

function increaseFontSize(tag) {
  gKeywordSearchCountMap[tag] += 2
}

