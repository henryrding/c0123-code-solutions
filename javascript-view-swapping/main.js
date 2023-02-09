var $tabContainer = document.querySelector('.tab-container');
var $tabNodeList = document.querySelectorAll('.tab');
var $viewNodeList = document.querySelectorAll('.view');
$tabContainer.addEventListener('click', handleTabs);

function handleTabs(event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $tabNodeList.length; i++) {
      if (event.target === $tabNodeList[i]) {
        $tabNodeList[i].className = 'tab active';
      } else {
        $tabNodeList[i].className = 'tab';
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
}
