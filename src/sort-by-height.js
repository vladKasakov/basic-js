const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let copyArr = [...arr];
  let heights = copyArr.filter((height) => height !== -1);

  heights.sort((a, b) => b - a);

  return copyArr.map((height) => (height === -1 ? -1 : heights.pop()));
}

module.exports = {
  sortByHeight,
};
