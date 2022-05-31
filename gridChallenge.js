function gridChallenge(grid) {
  let isSorted = string => string === sort(string)
  let sort = str => str.split('').sort((a,b) => a < b ? -1 : b < a ? 1 : 0).join('');
  let columnArr = (arr, index) => {
    return arr.reduce((a, c) => {
      a.push(c[index]);
      return a;
    }, [])
  }
  let sortedGrid = grid.map( str => !isSorted(str) ? sort(str) : str )
  for (let i in grid[0]) {
    let column = columnArr(sortedGrid, i).join('');
    if (!isSorted(column)) return 'NO';
  }
  return 'YES';
}