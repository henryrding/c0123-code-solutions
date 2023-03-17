function reduce(array, reducer, initialValue) {
  let reduced = initialValue !== undefined ? reducer(initialValue, array[0]) : array[0];
  for (let i = 1; i < array.length; i++) {
    reduced = reducer(reduced, array[i]);
  }
  return reduced;
}

// test cases

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// const account = [
//   { type: 'deposit', amount: 150 },
//   { type: 'deposit', amount: 20 },
//   { type: 'withdrawal', amount: 5 },
//   { type: 'deposit', amount: 100 },
//   { type: 'withdrawal', amount: 25 },
//   { type: 'withdrawal', amount: 60 }
// ];

// const traits = [
//   { color: 'yellow' },
//   { type: 'electric' },
//   { name: 'pikachu' },
//   { level: 15 },
//   { trainer: 'ash' }
// ];

// console.log(reduce(numbers, (tempSum, number) => tempSum + number));
// console.log(reduce(numbers, (tempProduct, number) => tempProduct * number));
// console.log(reduce(account, (tempBalance, transaction) => transaction.type === 'deposit' ? tempBalance + transaction.amount : tempBalance - transaction.amount, 0));
// console.log(reduce(traits, (tempComposite, trait) => Object.assign(tempComposite, trait)));
