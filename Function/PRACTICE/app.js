const num1 = 20;
const num2 = 30;

function add() {
  console.log(`The Result is :- ${num1 + num2}`);
}
add();

(function () {
  const num3 = 30;
  const num4 = 50;
  console.log(`The Result is :- ${num3 + num4}`);
})();

(function (num3, num4) {
  console.log(`The Result is :- ${num3 + num4}`);
})(100, 200);

const result = (function (num3, num4) {
  console.log(`The Result is :- ${num3 + num4}`);
  return num3 + num4;
})(10, 250);
console.log(result);

// Hoisting

display();
moreComplex();
console.log(display);
console.log(moreComplex);

// console.log(firstName);
// console.log(lastName);
console.log(company);

const firstName = 'Jenish';
let lastName = 'Dayani';
var company = 'Odan Infotech LLP';

function display() {
  console.log(`Hello Member`);
}

function moreComplex() {
  console.log(`I Work in a ${company}`);
}

// Closure

function outer() {
  let privateVar = `Secret`;
  function inner() {
    console.log(`Hello There secret is : ${privateVar}`);
  }
  console.log(`Hello World`);
  return inner;
  inner();
}

outer();

outer()();

const value = outer();
console.log(value);

value();

function newAccount(name, initialBalance) {
  let balance = initialBalance;

  function showBalance() {
    console.log(`Hey ${name}, your balance is ${balance}`);
  }

  function deposit(amount) {
    balance += amount;
    showBalance();
  }

  function withdraw(amount) {
    if (amount > balance) {
      console.log('Insufficient balance');
      return;
    }
    balance -= amount;
    showBalance();
  }

  return { showBalance: showBalance, deposit: deposit, withdraw: withdraw };
}

newAccount('Jenish', 500);

const Jenish = newAccount('Jenish', 1000);
const Vaibhav = newAccount('Vaibhav', 100);

Jenish.showBalance();
Vaibhav.showBalance();

Jenish.deposit(500);
Jenish.withdraw(700);

