const removeFromArray = function (array, num) {
  let arrLength = Number(array.length);
  i = 0;
  let newArray = [];
  while (i < arrLength) {
    if (array[i] != num) {
      newArray.push(array[i]);
    }
    i++;
  }
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
