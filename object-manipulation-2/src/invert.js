/* exported invert */
function invert(source) {
  var obj = {};
  for (var x in source) {
    obj[source[x]] = x;
  } return obj;
}
