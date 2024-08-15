const items = [...document.querySelectorAll('.number')];
console.log(items);

const updateCount = (el) => {
  const value = parseInt(el.dataset.value);
  const increment = Math.ceil(value / 1000);
  let initialValue = 0;

  const increaseCount = setInterval(() => {
    initialValue += increment;
    el.textContent = `${initialValue}+`;
    if (initialValue >= value) {
      clearInterval(increaseCount);
    }
  }, 1);

  console.log(value);
};

items.forEach(function (item) {
  updateCount(item);
});
