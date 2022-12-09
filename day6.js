const { readFile } = require('./utils')

const markerSize = 14

const [line] = readFile('day6')

for (let i = 0; i < line.length; i++) {
  const set = new Set(line.slice(i, i + markerSize))
  if (set.size === markerSize) {
    console.log('position: ', i + markerSize)
    break
  }
}
