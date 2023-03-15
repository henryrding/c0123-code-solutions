import takeAChance from './take-a-chance.js';

const promiseObject = takeAChance('Henry');

promiseObject
  .then((value) => console.log(value))
  .catch((reason) => console.error(reason.message));
