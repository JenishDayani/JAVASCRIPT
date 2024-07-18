const person1 = {
  firstname: 'Jenish',
  age: 22,
  status1: 'resident',
};
const person2 = {
  firstname: 'Dayani',
  age: 15,
  status1: 'tourist',
};

function Hello(per) {
  if (per.age > 18 && per.status1 === 'resident') {
    console.log(per.firstname + ' is True');
  } else {
    console.log(per.firstname + ' is False');
  }
}

Hello(person1);
Hello(person2);
