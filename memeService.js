var gImgs = [{ id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] }, { id: 2, url: 'img/2.jpg', keywords: ['funny', 'cat'] }]
var gMeme = {
  selectedImgId: 5,
  selectedLineIdx: 0,
  lines: [
    {
      txt: 'I sometimes eat Falafel',
      size: 20,
      color: 'red'
    }

    , {
      txt: 'taltul',
      size: 30,
      color: 'green'
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



function setImg(selectedImgId) {
  gMeme.selectedImgId = selectedImgId
}

function setColor(color) {
  gMeme.lines[gMeme.selectedLineIdx].color = color
}

function changeFont(symbol) {
  console.log(symbol);
  // if (gMeme.lines[0].size < 10 || gMeme.lines[0].size > 40) return

  if (symbol === '+') gMeme.lines[gMeme.selectedLineIdx].size += 2
  else gMeme.lines[gMeme.selectedLineIdx].size -= 2
}

function addLineText() {
  const line = {
    txt: 'Text',
    size: 16,
    color: 'black'
  }
  gMeme.lines.push(line)
  gMeme.selectedLineIdx = gMeme.lines.length - 1
}

function switchLine() {
  console.log(gMeme.selectedLineIdx);

  (gMeme.lines.length - 1 === gMeme.selectedLineIdx) ? gMeme.selectedLineIdx = 0 : gMeme.selectedLineIdx++
}