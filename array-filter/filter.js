function filter(array, predicate) {
  const filtered = [];
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      filtered.push(array[i]);
    }
  }
  return filtered;
}

// test cases
// console.log(filter([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], (number) => !(number % 2)));
// console.log(filter([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], (number) => number > 5));
