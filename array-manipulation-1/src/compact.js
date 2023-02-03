/* exported compact */
function compact(array) {
  var arrayCompact = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      arrayCompact.push(array[i]);
    }
  } return arrayCompact;
}
