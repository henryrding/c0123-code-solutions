/* exported capitalize */
function capitalize(word) {
  var wordArr = word.toLowerCase().split('');
  wordArr[0] = wordArr[0].toUpperCase();
  var wordCap = wordArr.join('');
  return wordCap;
}
