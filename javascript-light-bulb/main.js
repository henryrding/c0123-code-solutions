var count = 0;
function lightSwitch() {
  if (count % 2) {
    lightBulb.className = 'light-bulb off';
    background.className = 'background dark';
  } else {
    lightBulb.className = 'light-bulb on';
    background.className = 'background light';
  }
  count++;
}

var lightBulb = document.querySelector('.light-bulb');
var background = document.querySelector('.background');
lightBulb.addEventListener('click', lightSwitch);
