
var gImgs = [{ id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] },
{ id: 2, url: 'img/2.jpg', keywords: ['funny', 'cat'] },
{ id: 3, url: 'img/3.jpg', keywords: ['funny', 'cat'] },
{ id: 4, url: 'img/4.jpg', keywords: ['funny', 'comics'] },
  // { id: 5, url: 'img/5.jpg', keywords: ['funny', 'cat'] },
  // { id: 6, url: 'img/6.jpg', keywords: ['funny', 'cat'] },
  // { id: 7, url: 'img/7.jpg', keywords: ['funny', 'cat'] },
  // { id: 8, url: 'img/8.jpg', keywords: ['funny', 'cat'] },
  // { id: 9, url: 'img/9.jpg', keywords: ['funny', 'drinks'] },
  // { id: 10, url: 'img/10.jpg', keywords: ['funny', 'cat'] },
  // { id: 11, url: 'img/11.jpg', keywords: ['funny', 'cat'] },
  // { id: 12, url: 'img/12.jpg', keywords: ['funny', 'cat'] },
  // { id: 13, url: 'img/13.jpg', keywords: ['funny', 'cat'] },
  // { id: 14, url: 'img/14.jpg', keywords: ['funny', 'cat'] },
  // { id: 15, url: 'img/15.jpg', keywords: ['funny', 'cat'] },

]
var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }
var gFilterBy = ''



function getImages() {
  console.log(gFilterBy);

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