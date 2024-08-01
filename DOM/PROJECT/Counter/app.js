const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');
const increase = document.querySelector('.increase');
var count = 0;

const value = document.getElementById('value');

decrease.addEventListener('click', function () {
  count--;
  value.textContent = count;
  colorChange();
});

reset.addEventListener('click', function () {
  count = 0;
  value.textContent = count;
  colorChange();
});

increase.addEventListener('click', function () {
  count++;
  value.textContent = count;
  colorChange();
});

function colorChange() {
  if (count < 0) {
    value.style.color = 'red';
  } else if (count == 0) {
    value.style.color = '#102a42';
  } else {
    value.style.color = 'green';
  }
}
