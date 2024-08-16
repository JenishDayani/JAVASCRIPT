let filteredProducts = [...products];
const uniqueCompany = [
  'all',
  ...new Set(products.map((product) => product.company)),
];
console.log(uniqueCompany);

const productsContainer = document.querySelector('.products-container');
const companyBtn = document.querySelector('.companies');

const btn = uniqueCompany
  .map((companyName) => {
    return `<button class="company-btn" data-id="${companyName}">${companyName}</button>`;
  })
  .join('');
companyBtn.innerHTML = btn;

const displayProducts = () => {
  if (filteredProducts.length < 1) {
    productsContainer.innerHTML = `<h6>Sorry, No Product Found</h6> `;
    return;
  }

  productsContainer.innerHTML = filteredProducts
    .map(({ id, title, image, price }) => {
      return `
   <article class="product" data-id="${id}">
          <img
            src="${image}"
            alt=""
            class="product-img img"
          />
          <footer>
            <h5 class="product-name">${title}</h5>
            <span class="product-price">${price}</span>
          </footer>
        </article>
   `;
    })
    .join('');
};

displayProducts();

companyBtn.addEventListener('click', (event) => {
  const el = event.target;
  if (el.classList.contains('company-btn')) {
    if (el.dataset.id === 'all') {
      filteredProducts = [...products];
    } else {
      filteredProducts = products.filter(
        (product) => product.company === el.dataset.id
      );
    }
    searchInput.value = '';
    displayProducts();
  }
});

const form = document.querySelector('.input-form');
const searchInput = document.querySelector('.search-input');

form.addEventListener('keyup', (event) => {
  const searchValue = event.target.value.toLowerCase();
  filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchValue)
  );
  displayProducts();
});
