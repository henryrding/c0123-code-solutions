/* exported tail */
function tail(array) {
  var tailArr = [];
  for (var i = 1; i < array.length; i++) {
    tailArr[i - 1] = array[i];
  } return tailArr;
}
