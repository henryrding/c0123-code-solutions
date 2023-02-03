/* exported reverseWord */
// function reverseWord(word) {
//   var wordReverse = '';
//   var wordReverseArr = [];
//   for (var i = word.length - 1; i >= 0; i--) {
//     wordReverseArr.push(word[i]);
//   } wordReverse = wordReverseArr.join('');
//   return wordReverse;
// }
function reverseWord(word) {
  var wordReverse = '';
  for (var i = word.length - 1; i >= 0; i--) {
    wordReverse += word[i];
  } return wordReverse;
}
