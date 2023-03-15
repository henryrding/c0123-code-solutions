import add from './add.js';
import subtract from './subtract.js';
import multiply from './multiply.js';
import divide from './divide.js';

const [, , ...values] = process.argv;
const [firstNumericValue, operation, secondNumericValue] = values;
let result;
switch (operation) {
  case 'plus':
    result = add(Number(firstNumericValue), Number(secondNumericValue));
    console.log('result:', result);
    break;
  case 'minus':
    result = subtract(Number(firstNumericValue), Number(secondNumericValue));
    console.log('result:', result);
    break;
  case 'over':
    result = divide(Number(firstNumericValue), Number(secondNumericValue));
    console.log('result:', result);
    break;
  case 'times':
    result = multiply(Number(firstNumericValue), Number(secondNumericValue));
    console.log('result:', result);
    break;
  default:
    console.log('invalid operation');
}
