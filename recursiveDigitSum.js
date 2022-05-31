function superDigit(n, k) {
  if (superDigit.orig === undefined) superDigit['orig'] = n;
  let sumDigits = n.split('').reduce((acc, cur) => acc + cur * 1, 0).toString();
  if (sumDigits.length > 1) return superDigit(sumDigits, k);
  if (k > 1) return superDigit( (sumDigits * k).toString(), 1);
  return sumDigits;
}
console.log(superDigit('4757362', 10000));
