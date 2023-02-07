/* exported pick */
function pick(source, keys) {
  var newObj = {};
  for (var i = 0; i < keys.length; i++) {
    for (var x in source) {
      if (x === keys[i] && source[x] !== undefined) {
        newObj[keys[i]] = source[x];
      }
    }
  } return newObj;
}
