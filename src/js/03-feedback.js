const throttle = require('lodash.throttle');
const btnEl = document.querySelector('button[type = "submit"]');
const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('input[name = "email"]');
const messageEl = document.querySelector('textarea[name = "message"]');


function updateForm() {
  const updateItem = JSON.parse(
    localStorage.getItem(`feedback-form-state` || '')
  );
  emailEl.value = updateItem.email || '';
  messageEl.value = updateItem.message || '';
  
}
updateForm();

function fillForm() {
  const data = {
    email: emailEl.value,
    message: messageEl.value,
  };
  
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}


function clearForm(e) {
  e.preventDefault();
  localStorage.clear();
  formEl.reset();
  
}
console.log(data);

formEl.addEventListener('input', throttle(fillForm, 500));
btnEl.addEventListener('submit', clearForm);
