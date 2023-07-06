//From HTML
let userInput = '';
let selectedItem = document.getElementById('inputGroupSelect01');
let seePromptButton = document.getElementById('see-prompt');

//Event Listener
seePromptButton.addEventListener('click', seePromptButtonClicked);

//Function
function seePromptButtonClicked(e) {
  if (selectedItem.value == 'phone-number') {
    userInput = prompt('Please enter a phone number: ');

    let re1 = /^\+8801[^012][0-9]{8}$/;
    let re2 = /^01[^012][0-9]{8}$/;
    let re3 = /^8801[^012][0-9]{8}$/;

    if (re1.test(userInput) || re2.test(userInput) || re3.test(userInput)) {
      alert('Valid Number');
    } else {
      alert('Invalid Number');
    }
  } else if (selectedItem.value == 'e-mail') {
    userInput = prompt('Please enter an e-mail: ');

    let re1 =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (re1.test(userInput)) {
      alert('Valid E-mail');
    } else {
      alert('Invalid E-mail');
    }
  } else if (selectedItem.value == 'post-code') {
    userInput = prompt('Please enter a Post Code: ');
    let re1 = /^\d{4}$/;

    if (re1.test(userInput)) {
      alert('Valid Post Code');
    } else {
      alert('Invalid Post Code');
    }
  } else {
    alert('Please select an option');
  }

  selectedItem.value = '';
  userInput = '';
}
