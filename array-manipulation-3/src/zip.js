/* exported zip */
function zip(first, second) {
  var zippedArray = [];
  var zippedChunk = [];
  for (var i = 0; i < first.length && i < second.length; i++) {
    // if (first[i] && second[i]) {
    zippedChunk.push(first[i]);
    zippedChunk.push(second[i]);
    zippedArray.push(zippedChunk);
    zippedChunk = [];
    // }
  } return zippedArray;
}
