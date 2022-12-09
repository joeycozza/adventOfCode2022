const _ = require('lodash')
const { readFile } = require('./utils')

let grid = readFile('day8')
grid.pop()
grid = grid.map((line) => line.split(''))

const visibles = {}

// console.log('original grid: ', grid)

grid.forEach((line, index) => {
  let prev = line[0]
  visibles[`${index}-0`] += 'leftside'

  for (let i = 1; i < line.length; i++) {
    const cur = line[i]
    if (cur > prev) {
      visibles[`${index}-${i}`] += 'left'
      prev = cur
    }
  }

  prev = line[line.length - 1]
  visibles[`${index}-${line.length - 1}`] += 'rightside'

  for (let i = line.length - 2; i > 0; i--) {
    const cur = line[i]
    if (cur > prev) {
      visibles[`${index}-${i}`] += 'right'
      prev = cur
    }
  }
})

grid = transposeArray(grid)
// console.log('grid: ', grid)

grid.forEach((line, index) => {
  let prev = line[0]
  visibles[`0-${index}`] += 'topside'

  for (let i = 1; i < line.length; i++) {
    const cur = line[i]
    if (cur > prev) {
      visibles[`${i}-${index}`] += 'top'
      prev = cur
    }
  }

  prev = line[line.length - 1]
  visibles[`${line.length - 1}-${index}`] += 'bottomside'

  for (let i = line.length - 2; i > 0; i--) {
    const cur = line[i]
    if (cur > prev) {
      visibles[`${i}-${index}`] += 'bottom'
      prev = cur
    }
  }
})

console.log('_.size(visibles): ', _.size(visibles))
printVisibles(visibles)

function printVisibles(visibles) {
  _.sortBy(Object.entries(visibles), ([key]) => key).forEach((thing) => console.log(thing))
}

function transposeArray(array) {
  const newArray = []
  for (let i = 0; i < array.length; i++) {
    newArray.push([])
  }

  for (let i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length; j++) {
      newArray[j].push(array[i][j])
    }
  }

  return newArray
}
