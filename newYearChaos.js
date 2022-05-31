function minimumBribes(q) {
  if (isTooChaotic()) return 'Too chaotic';
  return q.reduce((acc, cur, i) => q[i] > (i + 1) ? acc + (cur - (i + 1)) : acc, 0);
  function isTooChaotic() {
    for (let i = 0; i < q.length; i++) {
      if (q[i] - (i + 1) > 2) return true;
    }
    return false;
  }
}
console.log(minimumBribes([1,2,3,5,4,6,7,8]))