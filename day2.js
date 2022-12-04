const { parseFileLinesToArray } = require('./utils')

const rawPoints = { A: 1, B: 2, C: 3, X: 1, Y: 2, Z: 3 }
const outcomes = {
  X: { A: 3, B: 0, C: 6 },
  Y: { A: 6, B: 3, C: 0 },
  Z: { A: 0, B: 6, C: 3 },
}

const outcomeThrowPoint = {
  X: { A: 3, B: 1, C: 2 },
  Y: { A: 1, B: 2, C: 3 },
  Z: { A: 2, B: 3, C: 1 },
}

const outcomePoints = { X: 0, Y: 3, Z: 6 }

const games = parseFileLinesToArray(
  'day2',
  // 'day2test',
  () => true,
  (l) => l.split(' ')
)
games.pop()

const score = games.reduce((sum, [them, me]) => {
  return sum + rawPoints[me] + outcomes[me][them]
}, 0)

console.log('score: ', score)

const newScore = games.reduce((sum, [them, me]) => {
  return sum + outcomePoints[me] + outcomeThrowPoint[me][them]
}, 0)

console.log('newScore: ', newScore)

