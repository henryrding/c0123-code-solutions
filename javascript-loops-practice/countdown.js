/* exported countdown */
function countdown(number) {
  var countdownArr = [];
  for (var i = number; i >= 0; i--) {
    countdownArr.push(i);
  } return countdownArr;
}
