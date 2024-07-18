const car = {
  make: 'Range Rover',
  model: 'S22 Ultra',
  year: 2024,
  colors: ['Black', 'White', 'Red'],
  hybrid: true,
  drive: function () {
    console.log('The Car is Going for a Ride');
  },
  stop() {
    console.log('The Car is Stop');
  },
};

console.log(car.make);
console.log(car.colors[0]);

car.drive();
car.stop();
