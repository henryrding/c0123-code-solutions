/* exported takeRight */
function takeRight(array, count) {
  if (array.length >= count) {
    return array.slice(array.length - count);
  } else {
    return array;
  }
}
