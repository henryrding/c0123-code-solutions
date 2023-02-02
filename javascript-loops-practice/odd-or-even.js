/* exported oddOrEven */
function oddOrEven(numbers) {
  var newArr = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      newArr.push('odd');
    } else {
      newArr.push('even');
    }
  } return newArr;
}
