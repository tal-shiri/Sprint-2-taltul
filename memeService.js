var gImgs = [{ id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] }, { id: 2, url: 'img/2.jpg', keywords: ['funny', 'cat'] }]

var gMeme = {
  selectedImgId: 5,
  selectedLineIdx: 0,
  lines: [],
  lines: [
    {
      txt: 'I sometimes eat Falafel',
      size: 20,
      color: 'red',
      pos: { x: 200, y: 58 },
      id: 0,
      isDrag: true
    }

    , {
      txt: 'taltul',
      size: 30,
      color: 'green',
      pos: { x: 200, y: 350 },
      id: 1,
      isDrag: false

    }
  ]
}
var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }


function getMeme() {
  return gMeme
}

function getImages() {
  return gImgs
}

function setLineTxt(txt) {
  gMeme.lines[gMeme.selectedLineIdx].txt = txt
}

function setSelectedLine(line) {
  gMeme.selectedLineIdx = line.id
}



function setImg(selectedImgId) {
  gMeme.selectedImgId = selectedImgId
}

function setColor(color) {
  gMeme.lines[gMeme.selectedLineIdx].color = color
}

function changeFont(symbol) {
  const selctedLine = gMeme.lines[gMeme.selectedLineIdx]
  console.log(selctedLine.size);
  // max min size
  if (selctedLine.size < 6) selctedLine.size = 6
  if (selctedLine.size > 40) selctedLine.size = 40

  if (symbol === '+') selctedLine.size += 2
  else selctedLine.size -= 2
}

function addLineText(pos = { x: 0, y: 0 }) {
  const line = {
    pos: pos,
    txt: 'Text',
    size: 16,
    color: 'black',
    id: gMeme.lines.length,
    isDrag: true
  }
  gMeme.lines.push(line)
  gMeme.selectedLineIdx = gMeme.lines.length - 1
}

function switchLine() {
  console.log(gMeme.selectedLineIdx);
  (gMeme.lines.length - 1 === gMeme.selectedLineIdx) ? gMeme.selectedLineIdx = 0 : gMeme.selectedLineIdx++
}

function isLineClicked(clickedPos) {

  const line = gMeme.lines.find(line => {
    return offsetX > star.x && offsetX < star.x + BAR_WIDTH &&
      offsetY > star.y && offsetY < star.y + star.rate
  })

  // const { pos } = gMeme[]
}