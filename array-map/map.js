function map(array, transform) {
  const transformed = [];
  for (let i = 0; i < array.length; i++) {
    transformed.push(transform(array[i]));
  }
  return transformed;
}

// test cases
// console.log(map([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], (number) => number * 2));
// console.log(map([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], (number) => `$${number.toFixed(2)}`));
