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

const gas = [20, 40, 100, 30];
const food = [10, 40, 50];

function calculateTotal(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  if (total > 100) {
    console.log(`You have spent to much`);
  } else {
    console.log(`Y
      ou have spent less than 100`);
  }
  return total;
}

console.log(calculateTotal(gas));
console.log(calculateTotal(food));
console.log(calculateTotal([10, 20, 30, 40]));

// Important Methods
// forEach, map, filter, find, reduce

// ForEach

const people = [
  {
    name: 'Jenish',
    age: 22,
    position: 'Full Stack Developer',
    salary: 50000,
  },
  {
    name: 'Vaibhav',
    age: 18,
    position: '3D Artist',
    salary: 20000,
  },
  {
    name: 'Jemish',
    age: 32,
    position: 'Manager',
    salary: 5000,
  },
];

console.log(people);

people.forEach(function (item) {
  console.log(item.position.toUpperCase());
});

function showPerson(person) {
  console.log(person.age);
}

people.forEach(showPerson);

// Map

const ages = people.map(function (person) {
  return person.age + 20;
});
console.log(ages);

const newPeople = people.map(function (person) {
  return {
    firstName: person.name.toUpperCase(),
    old: person.age,
  };
});

console.log(newPeople);

const name = people.map(function (person) {
  return `<h1>${person.name.toUpperCase()}</h1>`;
});

console.log(name);

document.body.innerHTML = name.join('');

// Filter

const young = people.filter(function (person) {
  return person.age <= 25;
});

console.log(young);

const developers = people.filter(function (person) {
  return person.position === 'Full Stack Developer';
});

console.log(developers);

// Find

const person = people.find(function (person) {
  return person.age === 18;
});

console.log(person);

console.log(
  names.find(function (name) {
    return name === 'Jenish';
  })
);

// Reduce
const total = people.reduce(function (previous, current) {
  console.log(`Previous Value = ${previous}`);
  console.log(`Current Value = ${current.salary}`);
  previous += current.salary;
  return previous;
}, 0);
console.log(total);
