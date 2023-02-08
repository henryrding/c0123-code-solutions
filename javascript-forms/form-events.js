function handleFocus(event) {
  console.log('focus event was fired');
  console.log('event.target.name:', event.target.name);
}

function handleBlur(event) {
  console.log('blur event was fired');
  console.log('event.target.name:', event.target.name);
}

function handleInput(event) {
  console.log('value of', event.target.name + ':', event.target.value);
}

var $name = document.querySelector('#user-name');
var $email = document.querySelector('#user-email');
var $message = document.querySelector('#user-message');

$name.addEventListener('focus', handleFocus);
$email.addEventListener('focus', handleFocus);
$message.addEventListener('focus', handleFocus);
$name.addEventListener('blur', handleBlur);
$email.addEventListener('blur', handleBlur);
$message.addEventListener('blur', handleBlur);
$name.addEventListener('input', handleInput);
$email.addEventListener('input', handleInput);
$message.addEventListener('input', handleInput);
