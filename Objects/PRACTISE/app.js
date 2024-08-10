const age = 21;
const person = {
  name: 'Jenish',
  age: age,
  married: true,
  siblings: ['Jaitra', 'Shree', 'Aarvi'],
  greet: function (name) {
    console.log(`Hello, My name is ${name}`);
  },
  sayHello(name) {
    console.log(`HELLO MY NAME IS ${name}`);
  },
  job: {
    title: 'Software Engineer',
    company: {
      name: 'Odan Infotech LLP',
      address: 'Orbit-2',
    },
  },
  'random-number': 'Random',
};

// Basics

console.log(person);
console.log(person.name);
const name1 = person.name;
console.log(name1);
person.age = 18;
person.city = 'Surat';
delete person.siblings;
console.log(person);

console.log(person['random-number']);
console.log(person['name']);
console.log(`I work in a ${person.job.company.name}`);

// This Keyword

function showThis() {
  console.log(this);
}

const jenish = {
  firstName: 'Jenish',
  lastName: 'Dayani',
  fullName: function () {
    console.log(`My full name is ${this.firstName} ${this.lastName}`);
  },
  showThis: showThis,
};

const vaibhav = {
  firstName: 'Vaibhav',
  lastName: 'Fagdiya',
  fullName: function () {
    console.log(`My full name is ${this.firstName} ${this.lastName}`);
  },
  showThis: showThis,
};

jenish.fullName();
vaibhav.fullName();
jenish.showThis();
vaibhav.showThis();

const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
showThis();
btn1.addEventListener('click', showThis);
btn2.addEventListener('click', showThis);

function createPerson(fName, lName) {
  return {
    firstName: fName,
    lastName: lName,
    fullName: function () {
      console.log(
        `My full name is ${this.firstName} ${this.lastName} and I Love Coding`
      );
    },
  };
}

function Person(fName, lName) {
  this.firstName = fName;
  this.lastName = lName;
  this.fullName = function () {
    console.log(
      `My full name is ${this.firstName} ${this.lastName} and I Love React`
    );
  };
  console.log(this);
}

const het = createPerson('Het', 'Gadara');
const hardik = createPerson('Hardik', 'Tank');

het.fullName();
hardik.fullName();

const jemish = new Person('Jemish', 'Tank');
const fenil = new Person('Fenil', 'Sutariya');

const tank = new jemish.constructor('JEMISH', 'TANK');
tank.fullName();

function Account(name, initialBalance) {
  this.name = name;
  this.balance = initialBalance;
  // this.deposit = function (amount) {
  //   this.balance += amount;
  //   console.log(
  //     `Hello my Name is ${this.name},your balance is ${this.balance}`
  //   );
  // };
}

Account.prototype.bank = `AXIS`;
Account.prototype.deposit = function (amount) {
  this.balance += amount;
  console.log(`Hello my Name is ${this.name},your balance is ${this.balance}`);
};

const dayani = new Account('JENISH', 500);
console.log(dayani);
console.log(dayani.bank);
dayani.deposit(500);

class AccountClass {
  constructor(name, initialBalance) {
    this.name = name;
    this.balance = initialBalance;
  }

  bank = `AXIS`;

  deposit(amount) {
    this.balance += amount;
    console.log(
      `Hello my Name is ${this.name},your balance is ${this.balance}`
    );
  }
}

const suzuka = new AccountClass('Suzuka', 0);
console.log(suzuka);
console.log(suzuka.name);
suzuka.deposit(500);
console.log(suzuka.bank);

const nobita = {
  name: 'Nobita',
  age: 10,
};

const doremon = {
  name: 'Doremon',
  age: 15,
};

function greet(city, country) {
  console.log(this);
  console.log(
    `Hello my name is ${this.name},I am ${this.age} years old and I live in a ${city}, ${country}`
  );
}

greet.call(nobita, 'Surat', 'India');
greet.call(doremon, 'Mumbai', 'Maharashtra');
greet.call({ name: 'Jenish', age: 20 }, 'Chennai', 'India');

greet.apply(nobita, ['Surat', 'India']);
greet.apply(doremon, ['Mumbai', 'Maharashtra']);
greet.apply({ name: 'Jenish', age: 20 }, ['Chennai', 'India']);

const nobitaGreet = greet.bind(nobita, 'Surat', 'India');
const doremonGreet = greet.bind(doremon, 'Mumbai', 'Maharashtra');
const jenishGreet = greet.bind({ name: 'Jenish', age: 20 }, 'Chennai', 'India');

nobitaGreet();
doremonGreet();
jenishGreet();

const counter = {
  count: 0,
  increment: function () {
    console.log(this);
    this.count++;
    console.log(this.count);
  },
};

const incrementBtn = document.querySelector('.increment');

incrementBtn.addEventListener('click', counter.increment);

incrementBtn.addEventListener('click', counter.increment.bind(counter));

const increment = counter.increment.bind(counter);
incrementBtn.addEventListener('click', increment);
