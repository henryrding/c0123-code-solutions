/* exported reverseWords */
function reverseWords(string) {
  var stringArray = string.split(' ');
  var finalArray = [];
  for (var i = 0; i < stringArray.length; i++) {
    var reverse = '';
    for (var j = stringArray[i].length - 1; j >= 0; j--) {
      reverse = reverse + stringArray[i][j];
    } finalArray.push(reverse);
  } var finalString = finalArray.join(' ');
  return finalString;
}
