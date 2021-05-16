function sumTwoSmallestNumbers(numbers) {
  let sortedNumers = numbers.sort((a, b) => a - b);
  return sortedNumers[0] + sortedNumers[1];
};

console.log(sumTwoSmallestNumbers([15,22,39,84,25,1,55,2]));
