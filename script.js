const productNameInput = document.getElementById('productName');
const productPriceInput = document.getElementById('productPrice');
const productGrid = document.getElementById('productGrid');
const productForm = document.getElementById('productForm');
const eliminarTodoBtn = document.getElementById('eliminarTodoBtn');

// Actualiza el precio del producto y la imagen según la opción seleccionada
productNameInput.addEventListener('input', () => {
  const selectedOption = Array.from(document.getElementById('productLista').options)
    .find(option => option.value === productNameInput.value);
  if (selectedOption) {
    productPriceInput.value = selectedOption.getAttribute('data-price');
  } else {
    productPriceInput.value = '';
  }
});

// Evento para agregar un producto
productForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = productNameInput.value;
  const price = productPriceInput.value;
  const selectedOption = Array.from(document.getElementById('productLista').options)
    .find(option => option.value === name);
  const imgSrc = selectedOption ? selectedOption.getAttribute('data-img') : '';

  if (name && price && imgSrc) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImage = document.createElement('img');
    productImage.src = imgSrc;
    productImage.alt = name;

    const productName = document.createElement('h3');
    productName.textContent = name;

    const productPrice = document.createElement('p');
    productPrice.textContent = `$${price}`;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.addEventListener('click', () => {
      productCard.remove();
    });

    productCard.appendChild(productImage);
    productCard.appendChild(productName);
    productCard.appendChild(productPrice);
    productCard.appendChild(deleteButton);

    productGrid.appendChild(productCard);

    productForm.reset();
  }
});

// Elimina todos los productos
eliminarTodoBtn.addEventListener('click', () => {
  productGrid.innerHTML = '';
});
