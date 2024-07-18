console.log(`Hello`);

function morning(name) {
  return `${name.toUpperCase()} Good Morning`;
}

function afternoon(name) {
  return `${name} Good Afternoon`;
}

function greet(name, cFunction) {
  console.log(`Hello ${cFunction(name)}, My name is Jenish`);
}

greet('vaibhav', morning);
greet('het', afternoon);