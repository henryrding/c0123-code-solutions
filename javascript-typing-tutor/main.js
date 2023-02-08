var index = 0;
var count = 0;
function handleColor(event) {
  if ($span[index].textContent !== '') {
    if (event.key === $span[index].textContent) {
      $span[index].className = 'green';
      $span[index + 1].className = 'underline';
      index++;
    } else {
      $span[index].className = 'red underline';
    } count++;
    $accuracy.textContent = 'Accuracy:' + Math.round(index / count * 100).toFixed(2) + '%';
  }
  if ($span[index].textContent === '') {
    $popUp.className = 'popup over';
  }
}

function reset() {
  $popUp.className = 'popup under';
  for (var i = index; i > 0; i--) {
    $span[index].className = 'none';
    index--;
  }
  count = 0;
  $span[index].className = 'underline';
  $resetButton.blur();
  // location.reload();
}
var $span = document.querySelectorAll('span');
document.addEventListener('keydown', handleColor);
var $accuracy = document.querySelector('.accuracy');
var $resetButton = document.querySelector('#reset-button');
$resetButton.addEventListener('click', reset);
var $popUp = document.querySelector('.popup');
