const fibonacci = function (n) {
  let i = 0;
  let febArr = [];
  let c = 0;

  while (i <= 10) {
    if (i <= 1) {
      febArr.push(1);
    } else {
      let a = i - 2;
      let b = i - 1;
      let d = Number(febArr[a]);
      let e = Number(febArr[b]);
      c = d + e;
      febArr.push(c);
    }
    i++;
  }
  let N = n - 1;
  return febArr[N];
};

// Do not edit below this line
module.exports = fibonacci;
