const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let arrCopy = [...arr];
  let result = [];

  let controls = {
    '--discard-prev': (i) => {
      if (i > 0 && arrCopy[i - 1] !== null) result.pop();
    },
    '--double-prev': (i) => {
      if (i > 0 && arrCopy[i - 1] !== null) result.push(arrCopy[i - 1]);
    },
    '--discard-next': (i) => {
      if (i < arrCopy.length - 1) arrCopy[i + 1] = null;
    },
    '--double-next': (i) => {
      if (i < arrCopy.length - 1) result.push(arrCopy[i + 1]);
    },
  };

  for (let i = 0; i < arrCopy.length; i++) {
    if (controls[arrCopy[i]]) {
      controls[arrCopy[i]](i);
    } else if (arrCopy[i] !== null) {
      result.push(arrCopy[i]);
    }
  }

  return result;
}

module.exports = {
  transform,
};
