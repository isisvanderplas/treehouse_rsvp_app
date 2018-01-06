const form = document.getElementById('registrar');
const input = form.querySelector('input')

form.addEventListener('submit', (event) => {
  console.log(input.value);
  event.preventDefault();
})
