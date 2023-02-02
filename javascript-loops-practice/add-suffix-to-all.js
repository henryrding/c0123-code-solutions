/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var newArr = [];
  for (var i = 0; i < words.length; i++) {
    newArr[i] = words[i] + suffix;
  } return newArr;
}
