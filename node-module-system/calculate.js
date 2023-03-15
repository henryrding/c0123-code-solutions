import add from './add.js';
import subtract from './subtract.js';
import multiply from './multiply.js';
import divide from './divide.js';

const [, , firstNumericValue, operation, secondNumericValue] = process.argv;
let result;
switch (operation) {
  case 'plus':
    result = add(+firstNumericValue, +secondNumericValue);
    break;
  case 'minus':
    result = subtract(+firstNumericValue, +secondNumericValue);
    break;
  case 'over':
    result = divide(+firstNumericValue, +secondNumericValue);
    break;
  case 'times':
    result = multiply(+firstNumericValue, +secondNumericValue);
    break;
}

console.log(result !== undefined ? `result: ${result}` : `invalid operation:, ${operation}`);
