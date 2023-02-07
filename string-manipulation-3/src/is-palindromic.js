/* exported isPalindromic */
function isPalindromic(string) {
  var noSpace = string.replaceAll(' ', '');
  var halfLength = Math.floor(noSpace.length / 2);
  var firstHalf = noSpace.slice(0, halfLength);
  var lastHalf = noSpace.slice(noSpace.length - halfLength, noSpace.length);
  var lastHalfBackwards = '';
  for (var i = lastHalf.length - 1; i >= 0; i--) {
    lastHalfBackwards += lastHalf[i];
  }
  if ((noSpace.length % 2) === 1 && firstHalf === lastHalfBackwards) {
    return true;
  } else {
    return false;
  }
}
