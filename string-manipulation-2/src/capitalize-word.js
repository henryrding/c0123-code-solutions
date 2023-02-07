/* exported capitalizeWord */
function capitalizeWord(word) {
  if (word.toLowerCase() !== 'javascript') {
    return word[0].toUpperCase() + word.toLowerCase().slice(1);
  } else {
    return 'JavaScript';
  }
}
