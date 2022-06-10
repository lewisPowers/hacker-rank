// function minimumBribes(q) {
//   q.forEach( (num, i) => {
//     if (num - (i + 1) > 2) minimumBribes['chaos'] = 'Too chaotic';
//   })
//   let res = q.reduce((acc, cur, i) => q[i] > (i + 1) ? acc + (cur - (i + 1)) : acc, 0)
//   if (minimumBribes.chaos) {
//     console.log(minimumBribes.chaos)
//   } else {
//     console.log(res);
//   }
// }

// function minimumBribes(q) {
//   let sortedArr = q.slice().sort((a,b)=> a - b);
//   let moves = 0
//   for (let i = 0; i < q.length; i++) {
//     let elMoved = 0;
//     if (q[i] > sortedArr[i]) {
//       let sortedIdx = sortedArr.indexOf(q[i])
//       elMoved = sortedIdx - i;
//       if (elMoved > 2) minimumBribes['chaos'] = 'Too chaotic';
//       let spliced = sortedArr.splice(sortedIdx, 1)
//       sortedArr.splice(i, 0, spliced[0])
//       moves = moves + elMoved;
//     }
//   }
//   return moves;
// }

// function minimumBribes(q) {
//   let moves = 0
//   for (let i = 1; i <= q.length; i++) {
//     if (q[i - 1] > i) {
//       if (q[i - 1] - i > 2) {
//         // return `Too chaotic`
//         console.log(`Too chaotic`)
//         return
//       }
//       moves += q[i - 1] - i;
//     }
//   }
//   // return moves;
//   console.log(moves);
// }

function minimumBribes(q) {
  let moves = 0;
  let valBiggerTotal;
  let iBiggerTotal;
  for (let i = 1; i <= q.length; i++) {
    let num = q[i - 1];
    if (num !== i) {
      if (num - i > 2) return 'Too chaotic';
      if (num < i)  iBiggerTotal += i - num;
      if (num > i)  valBiggerTotal += num - i;
    }
  }
  return moves;
}


title = document.querySelector('[data-id]')
title.textContent = `New Years Chaos: ${minimumBribes([1,2,5,3,4,6])} moves`
