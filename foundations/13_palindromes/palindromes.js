const palindromes = function (str) {
  let length = Number(str.length);
  let noSpaceStr = "";
  let j = 0;
  while (j < length) {
    if (str[j] == " ") {
      noSpaceStr = noSpaceStr;
    } else {
      noSpaceStr = noSpaceStr + str[j];
    }
    j++;
  }

  let i = length - 1;
  let revStr = "";
  while (i >= 0) {
    if (str[i] == " ") {
      revStr = revStr;
    } else {
      revStr = revStr + str[i];
    }
    i--;
  }
  if (noSpaceStr == revStr) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
