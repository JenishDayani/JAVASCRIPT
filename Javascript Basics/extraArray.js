const str1 = ['Jenish', 'Vaibhav', 'Hardik', 'Het', 'Jemish'];
const str2 = ['Dayani', 'Patel', 'Tank', 'Gadara', 'Savani'];
const num1 = [
  [0, 1],
  [2, 3],
  [4, 5],
  [6, 7],
];

console.log(`Array :- ${str1}`);

console.log(`Length of the Array :- ${str1.length}`);

console.log(`Convert Array to the String :- ${str1.toString()}`);

console.log(
  `Join function use to join the Array by particular string :- ${str1.join(
    ' Hello '
  )}`
);

console.log(
  `By using the delete the array value will be removed but at that place remain undefined :- ${delete str2[0]}`
);
console.log(str2);

// console.log(`Copy the value of particular index to particular index :- ${str1.copyWithin(2,0,2)}`);

console.log(`Flat function is use to mix the array :- ${num1.flat()}`);

console.log(
  `Slice Function cut the array from the given position to the end :- ${str1.slice(
    2
  )}`
);

console.log(
  `Slice Function with two parameter cut the array from the given position to the one less than second index which you have pass :- ${str1.slice(
    2,
    4
  )}`
);

console.log(
  `Splice function remove the element by index from the original Array and Returns the Deleted Items :- ${str1.splice(
    0,
    3
  )}`
);

console.log(
  `To Spliced function return the remaining elements and does not affect original Array :- ${str2.toSpliced(
    0,
    3
  )}`
);

console.log(str2);

// Array Search

const str3 = ['Apple', 'Orange', 'Apple', 'Mango'];
const numbers = [10, 20, 30, 40, 50, 10, 20, 50, 60, 85, 42, 16];

console.log(
  `IndexOf Function returns the Index of the particular Element at first Occurrence :- ${str3.indexOf(
    'Mango'
  )}`
);

console.log(
  `LastIndexOf Function returns the Index of the particular Element at last Occurrence :- ${str3.lastIndexOf(
    'Apple'
  )}`
);

console.log(
  `Includes Function checks the array that it contains the particular element and returns boolean value :- ${str3.includes(
    'Orange'
  )}`
);

function myFunction(value, index, array) {
  return value > 18;
}

console.log(
  `Find Function returns the first value for the given condition :- ${numbers.find(
    myFunction
  )}`
);

console.log(
  `FindIndex Function returns the first index for the given condition :- ${numbers.findIndex(
    myFunction
  )}`
);

console.log(
  `FindLast Function returns the last value for the given condition :- ${numbers.findLast(
    myFunction
  )}`
);

console.log(
  `FindLastIndex Function returns the last index for the given condition :- ${numbers.findLastIndex(
    myFunction
  )}`
);

// Find Function Also Can be Written as

console.log(
  `Find Function returns the first value for the given condition :- ${numbers.find(
    (x) => x > 18
  )}`
);

console.log(
  `FindIndex Function returns the first index for the given condition :- ${numbers.findIndex(
    (x) => x > 18
  )}`
);

console.log(
  `FindLast Function returns the last value for the given condition :- ${numbers.findLast(
    (x) => x > 18
  )}`
);

console.log(
  `FindLastIndex Function returns the last index for the given condition :- ${numbers.findLastIndex(
    (x) => x > 18
  )}`
);

// Array Sort (Alphabetic)

const str4 = ['Banana', 'Orange', 'Apple', 'Mango'];
const str5 = ['Jan', 'Feb', 'Mar', 'Apr'];

console.log(str4);
console.log(str5);
console.log(
  `By Sort method we can sort the Original Array by alphabetically :- ${str4.sort()}`
);

console.log(
  `By ToSorted method we can sort the  Array by alphabetically and returns new Array :- ${str5.toSorted()}`
);

console.log(str4);
console.log(str5);

console.log(
  `By Reverse method we can reverse the Original Array :- ${str4.reverse()}`
);

console.log(
  `By ToSorted method we can reverse the  Array  returns new Array :- ${str5.toReversed()}`
);

console.log(str4);
console.log(str5);

// Array Sort by the Numeric

const num2 = [40, 100, 1, 5, 25, 10];

console.log(` Sort a Original  array ascending :- 
  ${num2.sort(function (a, b) {
    return a - b;
  })}
`);

console.log(num2);

console.log(` Sort a Original  array descending :- 
  ${num2.sort(function (a, b) {
    return b - a;
  })}
`);

console.log(num2);

console.log(` Sort a Original  array in Random Order :- 
  ${num2.sort(function () {
    return 0.5 - Math.random();
  })}
`);

console.log(num2);

console.log(
  `Find the Minimum Number from Array :- ${Math.min.apply(null, num2)}`
);

console.log(
  `Find the Maximum Number from Array :- ${Math.max.apply(null, num2)}`
);

// Sorting the Object

const dev1 = [
  { name: 'Jenish', year: 22 },
  { name: 'Vaibhav', year: 18 },
  { name: 'Hardik', year: 32 },
  { name: 'Het', year: 23 },
  { name: 'Jemish', year: 28 },
];

console.log(dev1);

dev1.sort(function (a, b) {
  return a.year - b.year;
});

console.log(`By Sort Method we can also sort a Object :-`);
console.log(dev1[0].name.toLowerCase());

dev1.sort(function (a, b) {
  let x = a.name.toLowerCase();
  let y = b.name.toLowerCase();
  if (x < y) {
    return -1;
  }
  if (x > y) {
    return 1;
  }
  return 0;
});

console.log(`By Sort Method we can also sort a Object :-`);

console.log(dev1);

// Array Iteration

dev1.forEach(function (value, index) {
  console.log(
    `ForEach is used to do any operation in a array by its all value it is a one type of for loop :- ${value.name}`
  );
});

console.log(`We can also pass a function to a forEach method`);
dev1.forEach(forEachCustomFunction);

function forEachCustomFunction(value, index, array) {
  console.log(value.year);
}

console.log(
  `Map is used to create a new array from the existing array by one by one value :- `
);

// const num3 = num2.map(function (value, index) {
//   return value * 2;
// });
const num3 = num2.flatMap((x) => x * 2);
console.log(num3);

console.log(
  `Every Method is use to see that all the element of the array pass the condition or not :- ${num3.every(
    (x) => x > 0
  )}`
);

console.log(
  `Some Method is use to see that at least one  element of the array pass the condition or not :- ${num3.some(
    (x) => x > 18
  )}`
);

console.log(
  `From method convert the String to a Array :- ${Array.from('123456789')}`
);

const example = [
  { str: 'jenish', year: 500 },
  { str: 'hello', year: 300 },
];

console.log(`Keys methods return the key of the array :- `);
const example1 = example.keys();
for (let x of example1) {
  console.log(x);
}

console.log(`Entries methods return the key and value of the array :- `);
const example2 = example.entries();
for (let x of example2) {
  console.log(x);
}

console.log(str5);
console.log(
  `With methods returns a new array with changes :- ${str5.with(0, 'Dec')}`
);
console.log(str5);

const q1 = ['Jan', 'Feb', 'Mar'];
const q2 = ['Apr', 'May', 'Jun'];
const q3 = ['Jul', 'Aug', 'Sep'];
const q4 = ['Oct', 'Nov', 'May'];

console.log(`With the help of ... Operator we can use the value of the Array `);
const year = [...q1, ...q2, ...q3, ...q4];
console.log(year);
