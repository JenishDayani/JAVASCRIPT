var number = 10;
console.log(number);
number = 50;
console.log(number);
var number = 'Jenish';
console.log(number);

let amount = 10;
console.log(amount);
amount = 50;
console.log(amount);
// let amount = 'Jenish';
// console.log(amount);

const total = 10;
console.log(total);
// total = 50;
// console.log(total);
// const total = 'Jenish';
// console.log(number);

const person = { name: 'Dayani' };
console.log(person.name);

person.name = 'Jenish';
console.log(person.name);

const result = document.querySelector('.result');

const personExample = {
  name: 'Jenish',
  job: 'Full-Stack Developer',
  hobbies: ['Cricket', 'Singing', 'Reading', 'Movie'],
};

result.innerHTML = `
  <h2>${personExample.name}</h2>
  <p>${personExample.job}</p>
  <ul>${personExample.hobbies
    .map(function (item) {
      return `<li>${item}</li>`;
    })
    .join('')}</ul>
`;

const author = 'Some Author';
const statement = 'Some Statement';

const quote = highlight`Here is the ${statement} by ${author} and it could no be more true.`;
console.log(quote);

result.innerHTML = quote;

function highlight(text, ...vars) {
  const awesomeText = text.map(function (item, index) {
    return `${item} <strong class="blue">${vars[index]}</strong>`;
  });

  return awesomeText.join('');
}

const sayHi = () => console.log('Hello I am Jenish Dayani');
sayHi();

const double = (value) => value * 2;
const num = double(50);
console.log(num);

const multiply = (num1, num2) => {
  const result = num1 * num2;
  return result;
};

const mul = multiply(50, 7);
console.log(mul);

const object = () => ({ name: 'Jenish', age: 22 });
const people = object();
console.log(people);

const numbers = [1, 2, 3, 4, 5, 6];
const big = numbers.filter((number, index) => {
  return number > 2;
});
console.log(big);
