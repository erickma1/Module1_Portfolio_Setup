const form = document.getElementById('form');
const names = document.querySelector('#name');
const email = document.querySelector('#email');
const message = document.querySelector('#message');

form.addEventListener('keyup', () => {
  const formData = {
    names: names.value,
    email: email.value,
    message: message.value,
  };
  localStorage.setItem('formData', JSON.stringify(formData));
});

