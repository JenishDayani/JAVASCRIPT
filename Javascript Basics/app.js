// Console Log
// console.log('Hello Jenish');
console.log('Hello Het');
console.log('Hello Yash');
console.log('Hello Jemish');
console.log('Hello Bhatu');
console.log('Hello Vaibha');

let _name, id;
_name = 'Dayani Jenish Kishorbhai';
id = 118;
if (_name) console.log(_name, ' Jenish ', id);
id = 'Hal Hal Cibli';
if (_name) console.log(_name, ' Jenish ', id);

console.log('Het gadara');
const surname = 'Dayani';

const num1 = 0.3;
const num2 = 0.5;
const ans = num1 + num2;
console.log(ans);

const friends = ['Jenish', 'Het', 'Bhatu', 118, undefined, null];
console.log(friends[3]);

let bestfriends = friends[0];
console.log('Best Friend :- ' + bestfriends);

const num10 = 10;
const num20 = 20;
const add = num10 + num20;
console.log(add);

// Array Methods

const names = ['Jenish', 'Vaibhav', 'Hardik', 'Het', 'Jemish'];
const lastName = ['Dayani', 'Patel', 'Tank', 'Gadara', 'Savani'];

console.log(names);
console.log(lastName);

// Adding 2 Array

const fullName = names.concat(lastName);
console.log(fullName);

// Reverse the Array

console.log(fullName.reverse());

// Adding value to a Array at the beginning

fullName.unshift('Hello');
console.log(fullName);

// Removing value to a Array at the beginning

fullName.shift();
fullName.shift();
fullName.shift();
console.log(fullName);

// Adding value to a Array at the Last

fullName.push('Hello');
console.log(fullName);

// Removing value to a Array at the Last

fullName.pop();
console.log(fullName);

// Take the Value from the second array with original status
// DELETE THE VALUE OF SECOND ARRAY AND PUT IT IN A NEW ARRAY

const duplicateArray = fullName.splice(0, 3);
console.log(duplicateArray);
console.log(fullName);

const Surname = 'Dayani';
let newArray = [];

for (let i = 0; i < names.length; i++) {
  const hello = `${names[i]} ${Surname}`;
  newArray.push(hello);
}

console.log(newArray);

// True and False
// '' "" `` 0 -0 NaN false null undefined

// False

const bool1 = '';
const bool2 = '';
const bool3 = ``;
const bool4 = 0;
const bool5 = -0;
const bool6 = NaN;
const bool7 = false;
const bool8 = null;
const bool9 = undefined;
