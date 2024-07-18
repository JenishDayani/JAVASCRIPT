const calculateTotal = function (subTotal, tax) {
  const answer = subTotal + tax;
  return answer;
};

const Hello = calculateTotal(500, 50);
console.log(Hello);

//----------------------------------------------------

const order1 = calculateTotal(100, 5);
const order2 = calculateTotal(152, 10);
const order3 = calculateTotal(1000, 50);

console.log(order1, order2, order3);
