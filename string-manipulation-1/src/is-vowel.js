/* exported isVowel */
function isVowel(char) {
  var vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  for (var i = 0; i < vowel.length; i++) {
    if (char === vowel[i]) {
      return true;
    }
  } return false;
}
