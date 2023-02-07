/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var first = string[firstIndex];
  var second = string[secondIndex];
  return string.slice(0, firstIndex) + second + string.slice(firstIndex + 1, secondIndex) + first + string.slice(secondIndex + 1);
}
