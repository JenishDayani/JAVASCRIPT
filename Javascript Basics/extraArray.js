const str1 = ['Jenish', 'Vaibhav', 'Hardik', 'Het', 'Jemish'];
const str2 = ['Dayani', 'Patel', 'Tank', 'Gadara', 'Savani'];
const num = [
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

console.log(`Flat function is use to mix the array :- ${num.flat()}`);

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
