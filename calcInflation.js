function calculateInflation(baseCost, years, percentPerYear) {
  let total = baseCost;
  while (years > 0) {
    total = total + (total * percentPerYear * .01);
    years--;
  }
  return Number(total.toFixed(2))
}

console.log(calculateInflation(61000, 80, 3))

function averageInflationPerYear(baseCost, finalCost, yearsApart) {
  let difference = finalCost - baseCost;
  let risePerYear = difference / yearsApart;
  let baseAverage = risePerYear / baseCost;
  let finalAverage = risePerYear / finalCost;
  let average = (finalAverage + (baseAverage - finalAverage) / 2).toFixed(2) * 1
  return `From $${baseCost} to $${finalCost} over ${yearsApart} years: ${average * 100}% average yearly inflation`
}
console.log(averageInflationPerYear(10,20,5))
console.log(averageInflationPerYear(61000,425000,60))