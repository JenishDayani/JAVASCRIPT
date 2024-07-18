// function fullName(firstName, lastName) {
//   const name = `My name is ${firstName} ${lastName}`;
//   return name.toUpperCase();
// }

// console.log(fullName('Jenish', 'Dayani'));

function fullName({ firstName, lastName }) {
  const name = `My name is ${firstName} ${lastName}`;
  return name.toUpperCase();
}

console.log(fullName({ lastName: 'Dayani', firstName: 'Jenish' }));
