document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registrar');
  const input = form.querySelector('input');
  const ul = document.querySelector('#invitedList');
  const mainDiv = document.querySelector('.main');
  const div = document.createElement('div');
  const filterLabel = document.createElement('label');
  const filterCheckBox = document.createElement('input');

  filterLabel.textContent = "Filter those who haven't responded";
  filterCheckBox.type = 'checkbox';

  div.appendChild(filterLabel);
  div.appendChild(filterCheckBox);

  mainDiv.insertBefore(div, ul);

  filterCheckBox.addEventListener('change', (event) => {
    const isChecked = event.target.checked;
    const lis = ul.children;
    if (isChecked) {
      for (let i = 0; i < lis.length; i++) {
        let li = lis[i];
        if (li.className === 'responded') {
          li.style.display = '';
        } else {
          li.style.display = 'none';
        }
      }
    } else {
      for (let i = 0; i < lis.length; i++) {
        let li = lis[i];
        li.style.display = '';
      }
    }
  })

  function createLi(text) {

    function createElement(elementName, property, value) {
      const element = document.createElement(elementName);
      element[property] = value;
      return element;
    }

    function appendToLI(elementName, property, value) {
      const element = createElement(elementName, property, value);
      li.appendChild(element);
      return element;
    }

    const li = document.createElement('li');
    appendToLI('span', 'textContent', text);
    appendToLI('label', 'textContent', 'Confirmed')
      .appendChild(createElement('input', 'type', 'checkbox'));
    appendToLI('button', 'textContent', 'Edit');
    appendToLI('button', 'textContent', 'Remove');
    return li;
  }

  // function createButton(text) {
  //   const button = document.createElement('button');
  //   button.textContent = text;
  //   return button;
  // }

  form.addEventListener('submit', (event) => {
    const text = input.value;
    input.value = '';
    event.preventDefault();
    const li = createLi(text);
    ul.appendChild(li);
    // const editButton = createButton('edit');
    // editButton.textContent = "Edit";
    // li.appendChild(editButton);
    // const deleteButton = createButton('remove');
    // deleteButton.textContent = "Remove";
    // li.appendChild(deleteButton);
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
    const button = event.target;
    if (button.tagName.toUpperCase() === "BUTTON") {
      const listItem = button.parentNode;
      const list = listItem.parentNode;
      if (button.textContent === "Remove") {
        list.removeChild(listItem);
      } else if (button.textContent === "Edit") {
        const span = listItem.firstElementChild;
        const input = document.createElement('input');
        input.type = 'text';
        input.value = span.textContent;
        listItem.insertBefore(input, span);
        listItem.removeChild(span);
        button.textContent = 'Save';
      } else if (button.textContent === "Save") {
        const input = listItem.firstElementChild;
        const span = document.createElement('span');
        span.textContent = input.value;
        listItem.insertBefore(span, input);
        listItem.removeChild(input);
        button.textContent = 'Edit';
      }
    }
  })
})
