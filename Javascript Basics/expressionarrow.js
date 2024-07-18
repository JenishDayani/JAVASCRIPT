function AddValues(num1, num2) {
  return num1 + num2;
}

console.log(AddValues(20, 15));

// Expression

const Add = function AddValues(num1, num2) {
  return num1 + num2;
};

console.log(Add(100, 50));

// Arrow Function

const Mul = (num1, num2) => num1 * num2;
console.log(Mul(15, 85));
