const findTheOldest = function (array) {
  let length = Number(array.length);
  let i = 0;
  let age = [];
  while (i < length) {
    let a = array[i].yearOfBirth;
    let b = array[i].yearOfDeath || new Date().getFullYear();
    let c = b - a;
    age.push({ index: i, value: c });
    i++;
  }
  let j = 0;
  let oldest = 0;
  let index = 0;
  while (j < age.length) {
    if (oldest < age[j].value) {
      oldest = age[j].value;
      index = age[j].index;
    }
    j++;
  }
  return array[index];
};

// Do not edit below this line
module.exports = findTheOldest;
/*
console.log(
  findTheOldest([
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]),
);
*/
