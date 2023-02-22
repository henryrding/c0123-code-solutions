var $progressDots = document.querySelector('.progress-dots');
var $dotsNodeList = document.querySelectorAll('.fa-circle');
var $viewNodeList = document.querySelectorAll('.view');
$progressDots.addEventListener('click', handleDots);

function handleDots(event) {
  if (event.target.matches('.fa-circle')) {
    for (var i = 0; i < $dotsNodeList.length; i++) {
      if (event.target === $dotsNodeList[i]) {
        $dotsNodeList[i].className = 'fa-solid fa-circle';
      } else {
        $dotsNodeList[i].className = 'fa-regular fa-circle';
      }
    }
    var $dataView = event.target.getAttribute('data-view');
    for (var j = 0; j < $viewNodeList.length; j++) {
      if ($dataView !== $viewNodeList[j].getAttribute('data-view')) {
        $viewNodeList[j].className = 'view hidden';
      } else {
        $viewNodeList[j].className = 'view';
      }
    }
  }
  pause();
}

var $previous = document.querySelector('#previous');
var $next = document.querySelector('#next');
$previous.addEventListener('click', function () {
  handlePrevious();
  pause();
});
$next.addEventListener('click', function () {
  handleNext();
  pause();
});

function handlePrevious() {
  for (var i = 0; i < $dotsNodeList.length; i++) {
    if ($dotsNodeList[i].className === 'fa-solid fa-circle') {
      $dotsNodeList[i].className = 'fa-regular fa-circle';
      if ((i - 1) === -1) {
        i = 5;
      } $dotsNodeList[i - 1].className = 'fa-solid fa-circle';
    }
  }
  for (var j = 0; j < $viewNodeList.length; j++) {
    if ($viewNodeList[j].className === 'view') {
      $viewNodeList[j].className = 'view hidden';
      if ((j - 1) === -1) {
        j = 5;
      } $viewNodeList[j - 1].className = 'view';
    }
  }
}

function handleNext() {
  for (var i = $dotsNodeList.length - 1; i >= 0; i--) {
    if ($dotsNodeList[i].className === 'fa-solid fa-circle') {
      $dotsNodeList[i].className = 'fa-regular fa-circle';
      if ((i + 1) > ($dotsNodeList.length - 1)) {
        i = -1;
      } $dotsNodeList[i + 1].className = 'fa-solid fa-circle';
    }
  }
  for (var j = $viewNodeList.length - 1; j >= 0; j--) {
    if ($viewNodeList[j].className === 'view') {
      $viewNodeList[j].className = 'view hidden';
      if ((j + 1) > ($viewNodeList.length - 1)) {
        j = -1;
      } $viewNodeList[j + 1].className = 'view';
    }
  }
}

var intervalID = setInterval(handleNext, 3000);

function pause() {
  clearInterval(intervalID);
  setTimeout(function () {
    intervalID = setInterval(handleNext, 3000);
  }, 0);
}
