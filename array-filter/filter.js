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

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// const names = [
//   'Ada',
//   'Hedy',
//   'Jean',
//   'Grace',
//   'Evelyn',
//   'Joan',
//   'Elizabeth',
//   'Janese',
//   'Donna'
// ];

// console.log(filter(numbers, (number) => !(number % 2)));
// console.log(filter(numbers, (number) => number > 5));
// console.log(filter(names, (name) => name.startsWith('E')));
// console.log(filter(names, (name) => name.includes('D') || name.includes('d')));
