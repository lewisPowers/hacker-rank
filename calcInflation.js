function calculateInflation(baseCost, years, percentPerYear) {
  let total = baseCost;
  let totalYears = years
  while (years > 0) {
    total += (total * percentPerYear * .01);
    years--;
  }
  return `Total from $${baseCost} at ${percentPerYear}% per year over ${totalYears} years: $${Number(total.toFixed())}`
}

console.log(calculateInflation(61000, 60, 2.85))
console.log(calculateInflation(61000, 60, 5.7))
console.log(calculateInflation(10, 5, 15))

function averageInflationPerYear(baseCost, finalCost, yearsApart) {
  let difference = finalCost - baseCost;
  let average;
  if (yearsApart === 1) average = difference.toFixed(2) * .01;
  let risePerYear = difference / yearsApart;
  let baseAverage = risePerYear / baseCost;
  let median = risePerYear / finalCost;
  average = average || (median + (baseAverage - median) / 2).toFixed(3) * 1
  return `From $${baseCost} to $${finalCost} over ${yearsApart} years: ${average * 100}% average yearly inflation`
}
console.log(averageInflationPerYear(10,20,5))
console.log(averageInflationPerYear(100,108.6,1))
console.log(averageInflationPerYear(61000,425000,60))
console.log(averageInflationPerYear(1000,100000,100))