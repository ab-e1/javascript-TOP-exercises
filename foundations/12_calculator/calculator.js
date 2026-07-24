const add = function (a, b) {
  let sum = a + b;
  return sum;
};

const subtract = function (a, b) {
  let difference = a - b;
  return difference;
};

const sum = function (array) {
  let i = 0;
  let length = Number(array.length);
  let arrSum = 0;
  while (i < length) {
    arrSum = arrSum + array[i];
    i++;
  }
  return arrSum;
};

const multiply = function (array) {
  let i = 0;
  let length = Number(array.length);
  let arrSum = 1;
  while (i < length) {
    arrSum = arrSum * array[i];
    i++;
  }
  return arrSum;
};

const power = function (a, b) {
  let pow = a ** b;
  return pow;
};

const factorial = function (n) {
  let i = n;
  let result = n;
  while (i > 0) {
    let son = i - 1;
    if (son > 0) {
      result = result * son;
    }
    i--;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
/* 
console.log(factorial(5));
console.log(multiply([1, 2, 3, 4, 5]));
console.log(sum([1, 2, 3, 4, 5]));
console.log(power(2, 3));
console.log(subtract(5, 3));
console.log(add(3,5));
 */
