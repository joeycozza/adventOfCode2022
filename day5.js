const _ = require('lodash')
const { readFile } = require('./utils')

const [crates, details] = readFile('day5', '\n\n')
console.log('crates:\n', crates)
const storage = crates.split('\n')
const columnCount = Number(_.last(storage.pop().trim().split(' ')))
console.log('columnCount: ', columnCount)

const stacks = _.map(Array(columnCount), () => [])

const instructions = setInstructions(details)
fillStacks(storage, stacks)

_.forEach(instructions, (instruction) => {
  executeInstruction9001(instruction, stacks)
})

printTops(stacks)

function executeInstruction9000({ quantity, source, target }, stacks) {
  for (let i = 0; i < quantity; i++) {
    stacks[target].push(stacks[source].pop())
  }
}

function executeInstruction9001({ quantity, source, target }, stacks) {
  const mover = []
  for (let i = 0; i < quantity; i++) {
    mover.push(stacks[source].pop())
  }
  for (let i = 0; i < quantity; i++) {
    stacks[target].push(mover.pop())
  }
}

function setInstructions(details) {
  let instructions = details.split('\n')
  instructions.pop()

  instructions = instructions.map((line) => {
    const [, quantity, , source, , target] = line.split(' ').map(Number)
    return { quantity, source: source - 1, target: target - 1 }
  })
  return instructions
}

function fillStacks(storage, stacks) {
  storage.forEach((line) => {
    const crates = line.split('').filter((char, index) => {
      return index % 4 === 1
    })

    crates.forEach((crate, index) => {
      if (crate !== ' ') {
        stacks[index].unshift(crate)
      }
    })
  })
}

function printTops(stacks) {
  const a = _.map(stacks, (stack) => {
    return _.last(stack)
  })
  console.log('tops: ', a.join(''))
}
