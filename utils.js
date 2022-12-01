const fs = require('fs')
const path = require('path')

module.exports = {
  parseFileLinesToArray,
  readFile,
}

/**
 *
 * Removes blank lines and passes it through a mapper function
 *
 * @param {string} file name of file located in ./input/ directory
 * @param {Function} filterer the Function to filter based off of
 * @param {Function} mapper the Function to map each line of the file through
 *
 * @returns {array} The type of array depends on what the mapper Function returns
 */
function parseFileLinesToArray(file, filterer = Boolean, mapper = Number) {
  return readFile(file).filter(filterer).map(mapper)
}

function readFile(file, splitter = '\n') {
  return fs.readFileSync(path.join(__dirname, 'input', file), 'utf8').split(splitter)
}
