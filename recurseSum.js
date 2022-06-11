function superDigit(n, k) {
  let sumKTimes = (sumOfN(n) * k).toString();
  return sumOfN(sumKTimes)
  function sumDigitsOfStr(numStr) {
    return numStr.split('').reduce((acc, curr) => {
      return acc + Number(curr);
    }, 0).toString();
  }
  function sumOfN(nStr) {
    while (nStr.length > 1) nStr = sumDigitsOfStr(nStr);
    return nStr;
  }
}
// console.log(superDigit('148', 3));
// console.log(superDigit('4757362', 111));
// console.log(superDigit('4757362', 10000));
