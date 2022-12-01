const _ = require('lodash')
const { readFile } = require('./utils')

const inputFile = 'day1.txt'

const groupedLines = readFile(inputFile, '\n\n')
const caloriesPerElf = groupedLines.map((groupedLine) => _.sum(groupedLine.split('\n').map(Number)))

const mostCalories = _.max(caloriesPerElf)
const top3Sum = _.chain(caloriesPerElf)
  .sortBy((a) => -a)
  .take(3)
  .sum()
  .value()

console.log('mostCalories: ', mostCalories)
console.log('top3Sum: ', top3Sum)
