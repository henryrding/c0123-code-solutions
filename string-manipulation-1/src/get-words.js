/* exported getWords */
function getWords(string) {
  var splitArr = [];
  var stringArr = string.split(' ');
  if (string !== '') {
    for (var i = 0; i < stringArr.length; i++) {
      splitArr.push(stringArr[i]);
    }
  } return splitArr;
}
