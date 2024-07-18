const name = 'Jenish';
const age = 22;
const sentence = "Hello my name is " + name + ' and i am ' + age + ' year old';

console.log(sentence);


// Template Literals

// use ` ` (BackTick) and to add the variable use ${}

const example = `Hello my name is ${name} , my name is of ${name.length} letter and i am ${age} year old`;

console.log(example);

const calculation = `We can also do Calculation in this like 4 * 5 = ${4*5}`;
console.log(calculation)