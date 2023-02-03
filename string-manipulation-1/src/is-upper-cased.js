/* exported isUpperCased */
function isUpperCased(word) {
  var wordUpperCased = word.toUpperCase();
  if (word === wordUpperCased) {
    return true;
  } else {
    return false;
  }
}
