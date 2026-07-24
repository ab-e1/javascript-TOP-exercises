const convertToCelsius = function (fahrenheit) {
  let tempConverted = (fahrenheit - 32) * (5 / 9);
  return tempConverted;
};

const convertToFahrenheit = function (celisius) {
  let otherTempConverted = celisius * (9 / 5) + 32;
  return otherTempConverted;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
