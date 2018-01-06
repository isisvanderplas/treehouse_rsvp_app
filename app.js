const form = document.getElementById('registrar');
const input = form.querySelector('input');
const ul = document.querySelector('#invitedList');

function createLi(text) {
  const li = document.createElement('li');
  li.textContent = text;
  const label = document.createElement('label');
  label.textContent = 'Confirmed';
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  label.appendChild(checkbox);
  li.appendChild(label);
  return li;
}

function createButton(text) {
  const button = document.createElement('button');
  button.textContent = text;
  return button;
}

form.addEventListener('submit', (event) => {
  const text = input.value;
  input.value = '';
  event.preventDefault();
  const li = createLi('text');
  ul.appendChild(li);
  const editButton = createButton('edit');
  editButton.textContent = "Edit";
  li.appendChild(editButton);
  const deleteButton = createButton('remove');
  deleteButton.textContent = "Remove";
  li.appendChild(deleteButton);
})

ul.addEventListener('change', (event) => {
  const checkbox = event.target;
  const checked = checkbox.checked;
  const listItem = checkbox.parentNode.parentNode;

  if (checked) {
    listItem.className = 'responded';
  } else {
    listItem.className = '';
  }
})

ul.addEventListener('click', (event) => {
  if (event.target.tagName === "BUTTON") {
    const listItem = event.target.parentNode;
    const list = listItem.parentNode;

    if (event.target.textContent === "Remove") {
      list.removeChild(listItem);
    } else if (event.target.textContent === "Edit") {

    }
  }
})
