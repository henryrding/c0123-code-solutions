const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((tempSum, number) => tempSum + number);
const product = numbers.reduce((tempProduct, number) => tempProduct * number);
const initialBalance = 0;
const balance = account.reduce((tempBalance, transaction) => transaction.type === 'deposit' ? tempBalance + transaction.amount : tempBalance - transaction.amount, initialBalance);
const composite = traits.reduce((tempComposite, trait) => Object.assign(tempComposite, trait));
