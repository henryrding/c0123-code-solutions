/* exported getKeys */
function getKeys(object) {
  var keys = [];
  for (var x in object) {
    keys.push(x);
  } return keys;
}
