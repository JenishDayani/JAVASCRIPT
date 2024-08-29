import { getElement } from '../utils.js';
import display from '../displayProducts.js';
const setupSearch = (store) => {
  const form = getElement('.input-form');
  const nameInput = getElement('.search-input');
  form.addEventListener('keyup', function () {
    const value = nameInput.value;
    if (value) {
      const filteredProducts = store.filter((product) =>
        product.name.toLowerCase().includes(value.toLowerCase())
      );
      display(filteredProducts, getElement('.products-container'),true);
      if(filteredProducts.length<1)
      {
        const productContainer = getElement('.products-container')
        productContainer.innerHTML = `
        <h1 class="filter-error">Sorry, no product found</h1>
        `
      }
    } else {
      display(store, getElement('.products-container'),true);
    }
  });
};

export default setupSearch;
