/* exported reverse */
function reverse(array) {
  var arrayReverse = [];
  for (var i = array.length - 1; i >= 0; i--) {
    arrayReverse.push(array[i]);
  } return arrayReverse;
}
