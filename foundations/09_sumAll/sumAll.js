const sumAll = function (a, b) {
  if (a < 0 || b < 0) {
    return Error;
  } else {
    let i = a;
    let sum = 0;
    while (i <= b) {
      sum = sum + i;
      i++;
    }
    return sum;
  }
};

// Do not edit below this line
module.exports = sumAll;
