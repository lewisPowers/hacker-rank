import frontend from '/modules/frontendModule.js';

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

gridChallenge.newName = 'Grid Challenge';
gridChallenge.inputWidth = 9;
// gridChallenge.info =
frontend(gridChallenge, [[1,2,3],[4,5,6],[7,8,9]])
console.log(gridChallenge([[1,2],[3,4]]))