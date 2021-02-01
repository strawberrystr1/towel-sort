

module.exports = function towelSort (matrix) {
  let newArr = [];
  if (!arguments.length) {
    return [];
  } else {
    matrix.forEach((item, i) => {
      if (i%2 === 0) {
        newArr = newArr.concat(item);
      } else {
        newArr = newArr.concat(item.reverse())
      }
    });
  }
    return newArr;
}
