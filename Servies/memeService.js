var gMeme = {
  selectedImgId: 5,
  selectedLineIdx: 0,
  lines: []
}

function getMeme() {
  return gMeme
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
    size: 40,
    color: 'white',
    id: gMeme.lines.length,
    aling: 'center',
    font: 'Impact',
    isDrag: false,
  }

  gMeme.lines.push(line)
  gMeme.selectedLineIdx = gMeme.lines.length - 1
}

function switchLine() {
  (gMeme.lines.length - 1 === gMeme.selectedLineIdx) ? gMeme.selectedLineIdx = 0 : gMeme.selectedLineIdx++
}

function setAlignText(selctor) {
  const selctedLine = gMeme.lines[gMeme.selectedLineIdx]
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
    case 'Impact':
      selctedLine.font = 'Impact'
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
    if (selctedLine.pos.y > 10) {
      selctedLine.pos.y -= 10
    }
  } else if (direction === 'down') {
    if (selctedLine.pos.y < 390) {
      selctedLine.pos.y += 10;
    }
  }
}

function removeLine() {
  gMeme.lines.splice(gMeme.selectedLineIdx, 1)
}

function moveLine(dx, dy) {
  const selctedLine = gMeme.lines[gMeme.selectedLineIdx]
  selctedLine.pos.x += dx
  selctedLine.pos.y += dy
}

function setLineDrag(isDrag) {
  const selctedLine = gMeme.lines[gMeme.selectedLineIdx]
  selctedLine.isDrag = isDrag
}

