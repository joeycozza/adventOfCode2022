const { readFile } = require('./utils')

const lines = readFile('day4')
lines.pop()

const containedLines = lines.filter(isFullyOverlapped)
const overlappedLines = lines.filter(isOverlapped)

console.log('contained.length : ', containedLines.length)
console.log('overlappedLines.length: ', overlappedLines.length)

function isOverlapped(line) {
  const [elf1, elf2] = line.split(',')

  return hasOverlapped(elf1, elf2) || hasOverlapped(elf2, elf1)
}

function hasOverlapped(elfA, elfB) {
  const [leftA, rightA] = elfA.split('-').map(Number)
  const [leftB, rightB] = elfB.split('-').map(Number)

  return (leftA >= leftB && leftA <= rightB) || (rightA >= leftB && rightA <= rightB)
}

function isFullyOverlapped(line) {
  const [elf1, elf2] = line.split(',')

  return isContained(elf1, elf2) || isContained(elf2, elf1)
}

function isContained(elfA, elfB) {
  const [leftA, rightA] = elfA.split('-').map(Number)
  const [leftB, rightB] = elfB.split('-').map(Number)

  return leftA >= leftB && rightA <= rightB
}
