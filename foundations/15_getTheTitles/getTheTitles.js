const getTheTitles = function (array) {
  let i = 0;
  let length = Number(array.length);
  let newArray = [];
  while (i < length) {
    newArray.push(array[i].title);
    i++;
  }
  return newArray;
};

// Do not edit below this line
module.exports = getTheTitles;
