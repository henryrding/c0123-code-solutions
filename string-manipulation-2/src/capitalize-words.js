/* exported capitalizeWords */
function capitalizeWords(string) {
  var array = string.split(' ');
  for (var i = 0; i < array.length; i++) {
    array[i] = array[i][0].toUpperCase() + array[i].slice(1).toLowerCase();
  } var newString = array.join(' ');
  return newString;
}
