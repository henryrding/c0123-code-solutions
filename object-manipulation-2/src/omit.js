/* exported omit */
function omit(source, keys) {
  var obj = {};
  for (var x in source) {
    if (keys.includes(x) === false) {
      obj[x] = source[x];
    }
  } return obj;
}
