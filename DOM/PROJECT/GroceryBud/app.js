// ****** SELECT ITEMS **********

const form = document.querySelector('.grocery-form');
const alert = document.querySelector('.alert');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

// edit option

let editElement;
let editFlag = false;
let editID = '';

// ****** EVENT LISTENERS **********

window.addEventListener('DOMContentLoaded', setupItems);
form.addEventListener('submit', addItem);
clearBtn.addEventListener('click', clearItems);

// ****** FUNCTIONS **********

function setupItems() {
  let items = getLocalStorage();
  if (items) {
    items.forEach((item) => {
      addListItem(item.id, item.value);
    });
  }
}

function addListItem(id, value) {
  const element = document.createElement('article');
  const attr = document.createAttribute('data-id');

  element.classList.add(`grocery-item`);
  attr.value = id;

  element.setAttributeNode(attr);
  element.innerHTML = `
          <p class="title">${value}</p>
          <div class="btn-container">
            <button type="button" class="edit-btn">
              <i class="fas fa-edit"></i>
            </button>
            <button type="button" class="delete-btn">
              <i class="fas fa-trash"></i>
            </button>
          </div>
  `;

  const editBtn = element.querySelector('.edit-btn');
  const deleteBtn = element.querySelector('.delete-btn');

  editBtn.addEventListener('click', editItem);
  deleteBtn.addEventListener('click', deleteItem);

  list.appendChild(element);
  container.classList.add('show-container');
}

function addItem(event) {
  event.preventDefault();
  const value = grocery.value.trim();
  const id = new Date().getTime().toString();

  if (value && !editFlag) {
    addListItem(id, value);
    addToLocalStorage(id, value);
    setBackToDefault();
    displayAlert(`Item Added Successful`, 'success');
  } else if (value && editFlag) {
    editElement.innerHTML = value;
    displayAlert(`Item Edited Successful`, 'success');
    editLocalStorage(editID, value);
    setBackToDefault();
  } else {
    displayAlert(`Please enter Value`, 'danger');
  }
}

function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  setTimeout(() => {
    alert.textContent = ``;
    alert.classList.remove(`alert-${action}`);
  }, 5000);
}

function clearItems() {
  const items = document.querySelectorAll('.grocery-item');

  if (items.length > 0) {
    items.forEach(function (item) {
      list.removeChild(item);
    });
  }
  container.classList.remove('show-container');
  displayAlert(`All Items Deleted Successfully`, 'danger');
  clearLocalStorage();
  setBackToDefault();
}

function editItem(event) {
  const element = event.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;

  editElement = event.currentTarget.parentElement.previousElementSibling;

  grocery.value = editElement.innerHTML;
  editFlag = true;
  editID = element.dataset.id;
  submitBtn.textContent = 'Edit';
}

function deleteItem(event) {
  const element = event.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;
  list.removeChild(element);
  if (list.children.length === 0) {
    container.classList.remove('show-container');
  }
  displayAlert(`Item Deleted Successfully`, 'danger');
  setBackToDefault();
  removeFromLocalStorage(id);
}

// ****** BACK DEFAULT **********

function setBackToDefault() {
  grocery.value = '';
  editFlag = false;
  editID = '';
  submitBtn.textContent = 'Submit';
}

// ****** LOCAL STORAGE **********

function getLocalStorage() {
  return localStorage.getItem('list')
    ? JSON.parse(localStorage.getItem('list'))
    : [];
}

function addToLocalStorage(id, value) {
  const grocery = { id, value };
  let items = getLocalStorage();
  items.push(grocery);
  localStorage.setItem('list', JSON.stringify(items));
}

function removeFromLocalStorage(id) {
  let items = getLocalStorage();
  items = items.filter((item) => item.id !== id);
  localStorage.setItem('list', JSON.stringify(items));
}

function editLocalStorage(id, value) {
  let items = getLocalStorage();
  items = items.map((item) => {
    if (item.id === id) {
      item.value = value;
    }
    return item;
  });
  localStorage.setItem('list', JSON.stringify(items));
}

function clearLocalStorage() {
  localStorage.clear();
}

// ****** SETUP ITEMS **********
