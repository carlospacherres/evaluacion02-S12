// Variables
const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
const formBtn = itemForm.querySelector('button');

function onAddItemSubmit(event) {
    event.preventDefault();
    const nuevoItem = itemInput.value;
    addItemToDOM(nuevoItem);
}

function addItemToDOM(item) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));
    const button = createButton('remove-item btn-link text-red');
    li.appendChild(button);
    itemList.appendChild(li);
}

function createButton(classes) {
    const boton = document.createElement('button');
    boton.className = classes;
    const icono = createIcon('fa-solid fa-xmark');
    boton.appendChild(icono);
    return boton;
}

function createIcon(classes) {
    const icono = document.createElement('i');
    icono.className = classes;
    return icono;
}

function addItemToStorage(item) {
    localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}

function onClickItem(e) {
  if (e.target.parentElement.classList.contains('remove-item')) {
    removeItem(e.target.parentElement.parentElement);
  } else if (e.target.closest('li')) {
    setItemToEdit(e.target);
  }
}

function removeItem(item) {
  if (
    confirm(`Esta seguro que quiere eliminar el item "${item.textContent}"?`)
  ) {
    item.remove();
    removeItemFromStorage(item.textContent);
  }
}

function clearItems() {
    while (itemList.firstChild) {
      itemList.removeChild(itemList.firstChild);
    }
    localStorage.removeItem('items');
  }

function inicio() {
  itemForm.addEventListener('submit', onAddItemSubmit);
  itemList.addEventListener('click', onClickItem);
  clearBtn.addEventListener('click', clearItems);
}

inicio();