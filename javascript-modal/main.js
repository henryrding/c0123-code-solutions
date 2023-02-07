function popOver() {
  popUp.className = 'popup over';
}

function popUnder() {
  popUp.className = 'popup under';
}

var popUp = document.querySelector('.popup');
var openModalButton = document.querySelector('.open-modal-button');
var noButton = document.querySelector('.no-button');
openModalButton.addEventListener('click', popOver);
noButton.addEventListener('click', popUnder);
