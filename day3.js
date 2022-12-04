const _ = require('lodash')
const { readFile } = require('./utils')

const lines = readFile('day3')
lines.pop()

const a = lines
  .map((line) => {
    const chars = line.split('')
    const char = _.intersection(_.take(chars, chars.length / 2), _.takeRight(chars, chars.length / 2))[0]
    return char.charCodeAt() - 96
  })
  .reduce((sum, num) => {
    return sum + (num < 0 ? num + 58: num)
  }, 0)

console.log('part1: ', a)

const b = _.chunk(lines, 3)
  .map((group) => {
    const char = _.intersection(...group.map(l => l.split('')))[0]
    return char.charCodeAt() - 96
  })
  .reduce((sum, num) => {
    return sum + (num < 0 ? num + 58: num)
  }, 0)


console.log('part2: ', b)
