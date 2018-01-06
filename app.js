const form = document.getElementById('registrar');
const input = form.querySelector('input');


form.addEventListener('submit', (event) => {
  event.preventDefault();
  const text = input.value;
  input.value = '';
  const ul = document.querySelector('#invitedList');
  const li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
})
