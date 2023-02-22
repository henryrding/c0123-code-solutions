var $countdownDisplay = document.querySelector('.countdown-display');

setInterval(countdown, 1000);

function countdown() {
  if ($countdownDisplay.textContent > 1) {
    $countdownDisplay.textContent--;
  } else {
    $countdownDisplay.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(setInterval(countdown, 1000));
  }
}
