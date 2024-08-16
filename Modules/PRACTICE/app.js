import { random, people } from './utils/data.js';
// import Jenish from './utils/showPeople.js';
import Jenish from './utils/showPeople.js';
import get from './utils/getElement.js';

console.log(random);

const container = get('.container');
const btn = get('.btn');
// const container1 = get('.container1')

btn.addEventListener('click', () => {
  container.innerHTML = Jenish(people);
});
