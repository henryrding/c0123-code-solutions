/* exported intersection */
function intersection(first, second) {
  var sameArray = [];
  for (var i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      sameArray.push(first[i]);
    }
  } return sameArray;
}
