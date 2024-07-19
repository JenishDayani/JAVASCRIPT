const strName = 'Jenish Dayani JenishDayani 2411';
const strName2 = '  Kishor Dayani KishorDayani 0107  ';
const myName = 'Jenish';

// String Methods

console.log(`String 1 :- ${strName}`);
console.log(`String 2 :- ${strName2}`);
console.log(`My Name :- ${myName}`);

console.log(`Length of the String is ${strName.length}`);

console.log(
  `Character at 4th place starting with index 0 is ${strName.charAt(4)}`
);

console.log(
  `Character Code of the 4th place starting with index 0 is ${strName.charCodeAt(
    4
  )}`
);

console.log(
  `Character at the 14th place from right side is ${strName.at(-14)}`
);

console.log(`Character at the 14th place from left side is ${strName.at(14)}`);

strName[5] = 'o';
console.log(`We Can only read by [] we can not modify ${strName[5]}`);

console.log(
  `Slice function return a String we have to give start and end position 7 to 13 :- ${strName.slice(
    7,
    13
  )}`
);

console.log(
  `SubString function return a String we have to give start and end position 7 to 13 :- ${strName.substring(
    7,
    13
  )}`
);

console.log(
  `SubString function return a String we have to give start and end position but if we not give end position than it return remaining String :- ${strName.substring(
    7
  )}`
);

console.log(
  `SubStr function return a String we have to give start and length like from index 7 and 13 more character :- ${strName.substr(
    7,
    13
  )}`
);

console.log(
  `SubStr function return a String we have to give start and end position but if we not give end position than it return remaining String :- ${strName.substr(
    7
  )}`
);

console.log(
  `SubStr function return a String we have to give start and end position but if we not give end position and start position is negative than it return last all 7 character :- ${strName.substr(
    -7
  )}`
);

console.log(
  `Convert whole String to the Upper Case :- ${strName.toUpperCase()}`
);

console.log(
  `Convert whole String to the Lower Case :- ${strName.toLowerCase()}`
);

console.log(`Add 2 String ${strName.concat(' ', strName2)}`);

console.log(
  `Trim the String means remove space from start and end :- ${strName2.trim()}.`
);

console.log(
  `Trim the String from Start means remove space from start :- ${strName2.trimStart()}.`
);

console.log(
  `Trim the String from end means remove space from end :- ${strName2.trimEnd()}.`
);

console.log(
  `Pad the String from Start means it makes the String to the given length if it is small than add another string to the start until String Length became the same as the length given :- ${myName.padStart(
    15,
    'Hello '
  )}`
);

console.log(
  `Pad the String from End means it makes the String to the given length if it is small than add another string to the end until String Length became the same as the length given :- ${myName.padEnd(
    15,
    ' Hello'
  )}`
);

console.log(`Repeat Function Repeat's the String :- ${myName.repeat(3)}`);

console.log(
  `Replace method replace the String at first occurrence (Case-Sensitive) only :- ${strName.replace(
    'Jenish',
    'Kishor'
  )}`
);

console.log(
  `Replace method replace the String at first occurrence only and if you want to replace by non-case sensitive then write the string in // and add i at last like /STRING/i:- ${strName.replace(
    /JENISH/i,
    'Kishor'
  )}`
);

console.log(
  `Replace method replace the String at all occurrence then write the string in // and add g at last like /STRING/g:- ${strName.replace(
    /Jenish/g,
    'Kishor'
  )}`
);

console.log(
  `Replace All method replace the String at all occurrence :- ${strName.replaceAll(
    'Jenish',
    'Kishor'
  )}`
);

console.log(`Split the String and make a Array :- ${strName.split(' ')}`);

// String Search

console.log(
  `Index Of Function return the index of the first occurrence :- ${strName.indexOf(
    'Dayani'
  )}`
);

console.log(
  `Last Index Of Function return the index of the last occurrence :- ${strName.lastIndexOf(
    'Dayani'
  )}`
);

console.log(
  `Search Function return the index of the first occurrence :- ${strName.search(
    'Dayani'
  )}`
);

console.log(
  `Match Function return the String of the first occurrence :- ${strName.match(
    'Dayani'
  )}`
);

console.log(
  `Match Function return the String of the first occurrence Non-Case Sensitive:- ${strName.match(
    /DAYANI/i
  )}`
);

console.log(
  `Match Function return the String of the all occurrence and Non-Case Sensitive:- ${strName.match(
    /DAYANI/gi
  )}`
);

const example = strName.matchAll('Dayani');
const data = Array.from(example);
console.log(
  'Match all Function return the Object  of the all occurrence :- ',
  data
);

console.log(
  `Includes function return true if the string contains the specify value :- ${strName.includes(
    'Jenish'
  )}`
);

console.log(
  `Includes function with parameter return true if the string contains the specify value after the given position :- ${strName.includes(
    'Jenish',
    20
  )}`
);

console.log(
  `Starts with Function return true if the string start with specify value :- ${strName.startsWith(
    'Dayani'
  )}`
);

console.log(
  `Starts with Function with parameter return true if the string start with specify value at specify position:- ${strName.startsWith(
    'Dayani',
    7
  )}`
);

console.log(
  `Ends with Function return true if the string end with specify value :- ${strName.endsWith(
    2411
  )}`
);

console.log(
  `Ends with Function with parameter return true if the string end with specify value at specify position:- ${strName.endsWith(
    'Dayani',
    13
  )}`
);
