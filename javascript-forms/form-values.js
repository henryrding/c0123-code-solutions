var $contactForm = document.querySelector('#contact-form');
$contactForm.addEventListener('submit', submit);
function submit(event) {
  event.preventDefault();
  var object = {};
  for (var i = 0; i < $contactForm.elements.length - 1; i++) {
    object[$contactForm.elements[i].name] = $contactForm.elements[i].value;
  }
  console.log('messageData:', object);
  $contactForm.reset();
}
