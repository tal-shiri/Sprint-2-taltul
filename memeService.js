var gImgs = [{ id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] },
{ id: 2, url: 'img/2.jpg', keywords: ['funny', 'cat'] },
{ id: 3, url: 'img/3.jpg', keywords: ['funny', 'cat'] },
{ id: 4, url: 'img/4.jpg', keywords: ['funny', 'cat'] },
{ id: 5, url: 'img/5.jpg', keywords: ['funny', 'cat'] },
{ id: 6, url: 'img/6.jpg', keywords: ['funny', 'cat'] },
{ id: 7, url: 'img/7.jpg', keywords: ['funny', 'cat'] },
{ id: 8, url: 'img/8.jpg', keywords: ['funny', 'cat'] },
{ id: 9, url: 'img/9.jpg', keywords: ['funny', 'cat'] },
{ id: 10, url: 'img/10.jpg', keywords: ['funny', 'cat'] },
{ id: 11, url: 'img/11.jpg', keywords: ['funny', 'cat'] },
{ id: 12, url: 'img/12.jpg', keywords: ['funny', 'cat'] },
{ id: 13, url: 'img/13.jpg', keywords: ['funny', 'cat'] },
{ id: 14, url: 'img/14.jpg', keywords: ['funny', 'cat'] },
{ id: 15, url: 'img/15.jpg', keywords: ['funny', 'cat'] },

]

var gMeme = {
  selectedImgId: 5,
  selectedLineIdx: 0,
  lines: [
    {
      txt: 'I sometimes eat Falafel',
      size: 20,
      color: 'red',
      pos: { x: 200, y: 58 },
      id: 0,
      aling: 'center',
      font: 'Ariel',
      isDrag: false
    }

    , {
      txt: 'taltul',
      size: 30,
      color: 'green',
      pos: { x: 200, y: 350 },
      id: 1,
      aling: 'center',
      font: 'Ariel',
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
    font: 'Ariel',
    isDrag: false
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

function setFont(font) {
  const selctedLine = gMeme.lines[gMeme.selectedLineIdx]

  switch (font) {
    case 'Ariel':
      selctedLine.font = 'Ariel'
      break;
    case 'Verdana':
      selctedLine.font = 'Verdana'
      break;
    case 'Tahoma':
      selctedLine.font = 'Tahoma'
      break;
    case 'Trebuchet MS':
      selctedLine.font = 'Trebuchet MS'
      break;
    case 'Times New Roman':
      selctedLine.font = 'Times New Roman'
      break;
    case 'Georgia':
      selctedLine.font = 'Georgia'
      break;
    case 'Courier New':
      selctedLine.font = 'Courier New'
      break;
    default:
      return
  }
}

function setStep(direction) {
  const selctedLine = gMeme.lines[gMeme.selectedLineIdx]
  if (direction === 'up') {
    selctedLine.pos.y -= 10
  } else {
    selctedLine.pos.y += 10
  }
}

function removeLine() {
  gMeme.lines.splice(gMeme.selectedLineIdx, 1)
}

function moveLine(dx, dy) {
  console.log('dx' + dx);
  console.log('dy' + dy);

  const selctedLine = gMeme.lines[gMeme.selectedLineIdx]
  selctedLine.pos.x += dx
  selctedLine.pos.y += dy

}

function setLineDrag(isDrag) {
  const selctedLine = gMeme.lines[gMeme.selectedLineIdx]
  selctedLine.isDrag = isDrag
}

