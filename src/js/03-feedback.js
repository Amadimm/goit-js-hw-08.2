const throttle = require('lodash.throttle');
const emailForm = document.querySelector('form');
const emailEl = document.querySelector('input[name = "email"]');
const messageEl = document.querySelector('textarea[name = "message"]');


const data = {
  email: ``,
  message: ``,
}


const fillForm = () => {
  data.email = emailEl.value;
  data.message = messageEl.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}



const updateForm = () => {
  const updateItem = JSON.parse(localStorage.getItem(`feedback-form-state`));

  if (updateItem) {
    emailEl.value = updateItem.email;
    messageEl.value = updateItem.message;
    data.email = updateItem.email;
    data.message = updateItem.message;
  } else {
    emailEl.value = ``;
    messageEl.value = ``;
  }
};


const clearForm = (e) => {
  e.preventDefault();
  console.log(data);
  emailForm.reset();
  localStorage.clear();
  
}

emailForm.addEventListener('input', throttle(fillForm, 500));
emailForm.addEventListener('submit', clearForm);
