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
      aling: 'center',
      isDrag: true
    }

    , {
      txt: 'taltul',
      size: 30,
      color: 'green',
      pos: { x: 200, y: 350 },
      id: 1,
      aling: 'center',
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
    aling: 'center',
    isDrag: true
  }
  gMeme.lines.push(line)
  gMeme.selectedLineIdx = gMeme.lines.length - 1
}

function switchLine() {
  (gMeme.lines.length - 1 === gMeme.selectedLineIdx) ? gMeme.selectedLineIdx = 0 : gMeme.selectedLineIdx++
}

function setAlignText(selctor) {
  const selctedLine = gMeme.lines[gMeme.selectedLineIdx]
  console.log(selctor);

  switch (selctor) {
    case 'center':
      selctedLine.aling = 'center'
      break;
    case 'right':
      selctedLine.aling = 'right'
      break;
    case 'left':
      selctedLine.aling = 'left'
      break;
    default:
      break;
  }

}
