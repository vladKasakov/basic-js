const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (!str) return '';

  let resultString = '';

  let currentChar = str[0];
  let counter = 1;

  for (let i = 1; i < str.length; i++) {
    const char = str[i];

    if (currentChar === char) {
      counter++;
    } else {
      resultString += (counter > 1 ? counter : '') + currentChar;
      currentChar = char;
      counter = 1;
    }
  }

  resultString += (counter > 1 ? counter : '') + currentChar;

  return resultString;
}

module.exports = {
  encodeLine,
};
