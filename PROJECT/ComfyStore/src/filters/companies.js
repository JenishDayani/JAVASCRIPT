import { getElement } from '../utils.js';
import display from '../displayProducts.js';

const setupCompanies = (store) => {
  let companies = ['all', ...new Set(store.map((product) => product.company))];
  const companiesDOM = getElement('.companies');
  companiesDOM.innerHTML = companies
    .map((company) => {
      return `<button class="company-btn">${company}</button>`;
    })
    .join('');
  companiesDOM.addEventListener('click', (event) => {
    const search = getElement('.search-input');
    search.value = '';
    const element = event.target;
    if (element.classList.contains('company-btn')) {
      let newStore = [];
      const selectedCompany = element.textContent;
      if (selectedCompany === 'all') {
        newStore = store;
      } else {
        newStore = store.filter(
          (product) => product.company === selectedCompany
        );
      }
      display(newStore, getElement('.products-container'),true);
    }
  });
};

export default setupCompanies;
