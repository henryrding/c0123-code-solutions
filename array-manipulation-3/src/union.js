/* exported union */
function union(first, second) {
  var uniqueArray = [];
  for (var i = 0; i < first.length; i++) {
    if (!uniqueArray.includes(first[i])) {
      uniqueArray.push(first[i]);
    }
  }
  for (var j = 0; j < second.length; j++) {
    if (!uniqueArray.includes(second[j])) {
      uniqueArray.push(second[j]);
    }
  } return uniqueArray;
}
