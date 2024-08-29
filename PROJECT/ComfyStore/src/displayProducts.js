import { formatPrice } from './utils.js';
import { addToCart } from './cart/setupCart.js';
const display = (products, element, filters) => {
  element.innerHTML = products
    .map((product) => {
      const { id, name, image, price } = product;
      // const { id, name, image } = product;
      // const price = product.price/100
      return `
        <article class="product">
          <div class="product-container">
            <img src="${image}" alt="${name}" class="product-img img" />
            <div class="product-icons">
              <a href="./product.html?id=${id}" class="product-icon"><i class="fas fa-search"></i></a>
              <button class="product-card-btn product-icon" data-id="${id}"><i class="fas fa-shopping-cart"></i></button>
            </div>
          </div>
          <footer>
            <p class="product-name">${name}</p>
            <h4 class="product-price">${formatPrice(price)}</h4>
          </footer>
        </article>
      `;
    })
    .join('');
  if (filters) {
    return;
  }
  element.addEventListener('click', function (event) {
    if (event.target.parentElement.classList.contains('product-card-btn')) {
      const id = event.target.parentElement.dataset.id;
      addToCart(id);
    }
  });
};

export default display;
