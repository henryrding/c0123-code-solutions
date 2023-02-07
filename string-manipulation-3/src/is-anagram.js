/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var sortFirst = firstString.replaceAll(' ', '').split('').sort();
  var sortSecond = secondString.replaceAll(' ', '').split('').sort();
  if (sortFirst.join() === sortSecond.join()) {
    return true;
  } else {
    return false;
  }
}
