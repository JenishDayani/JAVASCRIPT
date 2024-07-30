console.log(document);
console.dir(document);

// Dynamic Adding Css

document.getElementById('title').style.color = 'red';

const btn = document.getElementById('btn');
btn.style.backgroundColor = 'blue';
btn.style.color = 'white';
btn.style.borderRadius = '50px';
btn.style.fontSize = '50px';
btn.style.padding = '20px';

const listVar = document.getElementsByTagName('li');
const listVar2 = [...listVar];

listVar[0].style.color = 'pink';
listVar2[1].style.color = 'blue';

console.log(listVar);
console.log(listVar2);

listVar2.forEach(function (item) {
  console.log(item);
});

const special = document.getElementsByClassName('special');
special[2].style.backgroundColor = 'yellow';

const result = document.querySelector('#result');
result.style.backgroundColor = 'red';

const lastItem = document.querySelector('li:last-child');
console.log(lastItem.innerHTML);

const list = document.querySelectorAll('.special');
list.forEach(function (item) {
  item.style.color = 'green';
});

const allChildren = result.children;
console.log(allChildren);

const firstChildren = result.firstChild;
console.log(firstChildren);

const lastChildren = result.lastChild;
console.log(lastChildren);

console.log(document.querySelector('#result').parentElement);
document.querySelector('#result').parentElement.style.backgroundColor = 'pink';

console.log(
  (document.querySelector('.hello').nextSibling.nextSibling.style.fontSize =
    '25px')
);

console.log(
  (document.querySelector(
    '.hello'
  ).previousSibling.previousSibling.style.color = 'white')
);

console.log(
  (document.querySelector('.hello').previousElementSibling.style.fontSize =
    '25px')
);

console.log(
  (document.querySelector('.hello').nextElementSibling.style.color = 'white')
);

// Dynamic Class Add or remove

console.log(document.getElementById('content').childNodes[0].nodeValue);
console.log(document.getElementById('content').firstChild.nodeValue);
console.log(document.getElementById('content').textContent);

const google = document.querySelector('#google');
console.log(google.getAttribute('href'));
console.log(google.setAttribute('href', 'https://www.youtube.com/'));
console.log(google.setAttribute('class', 'btn'));
const oldClass = google.getAttribute('class');
console.log(google.setAttribute('class', `${google.className} danger`));
console.log(google.getAttribute('class'));
google.textContent = 'Youtube';

const sentence1 = document.getElementById('sentenceOne');
const sentence2 = document.getElementById('sentenceTwo');
const sentence3 = document.getElementById('sentenceThree');
const sentence4 = document.getElementById('sentenceFour');
const sentence5 = document.getElementById('sentenceFive');

sentence1.className = 'textChange';
sentence2.className = 'colorChange';
sentence3.className = 'textChange';
sentence3.className = 'colorChange';
sentence4.className = 'colorChange';
sentence4.classList.add('textChange');
sentence5.classList.add('textChange', 'colorChange');

// Dynamic Add Tag and Text Add

const bodyDiv = document.createElement('div');
const bodyText = document.createTextNode(
  'This a div tag which is added dynamically.'
);
bodyDiv.appendChild(bodyText);
document.body.appendChild(bodyDiv);
bodyDiv.classList.add('textChange');

const bodyDiv2 = document.createElement('div');
const bodyText2 = document.createTextNode(
  'This a div tag Two which is added dynamically.'
);
bodyDiv2.appendChild(bodyText2);
document.body.insertBefore(bodyDiv2, bodyDiv);
bodyDiv2.classList.add('colorChange', 'textChange');

const bodyDiv3 = document.createElement('div');
const bodyText3 = document.createTextNode(
  'This a div tag There which is replaced dynamically.'
);
bodyDiv3.appendChild(bodyText3);
document.body.replaceChild(bodyDiv3, bodyDiv2);
bodyDiv3.classList.add('colorChange', 'textChange');

const heading = document.createElement('h1');
heading.innerText = `Hello I am a Dynamic Heading with Prepend`;
document.body.prepend(heading);

// Dynamic Remove Tag and Text

const Item3 = document.getElementById('item3');
Item3.remove();

result.removeChild(result.firstElementChild);

// innerHTML  textContent

console.log(result.innerHTML);
console.log(result.innerText);

const ulVariable = document.createElement('ul');
ulVariable.innerHTML = `
      <li class="textChange">Item 6</li>
      <li>Item 7</li>
      <li>Item 8</li>
      <li>Item 9</li>
      <li>Item 10</li>
`;

document.body.appendChild(ulVariable);

const divVariable = document.createElement('div');
divVariable.innerText = `Hello i am a Div Tag`;
document.body.insertBefore(divVariable, ulVariable);
divVariable.setAttribute('class', 'customCSS');

const divTag2 = document.createElement('div');
divTag2.innerText = `Hello i am a Div Tag 2`;
document.body.insertBefore(divTag2, divVariable);

function changeClass() {
  const hasClass = divVariable.classList.contains('divColor');
  const text = divVariable.innerText;
  if (hasClass) {
    divVariable.classList.remove('divColor');
    divVariable.innerText = text.toLowerCase();
  } else {
    divVariable.classList.add('divColor');
    divVariable.innerText = text.toUpperCase();
  }
}

function changeClass2() {
  divTag2.classList.add('tagColor');
}
function resetClass() {
  divTag2.classList.remove('tagColor');
}

btn.addEventListener('click', changeClass);
divVariable.addEventListener('click', changeClass);
divTag2.addEventListener('mouseenter', changeClass2);
divTag2.addEventListener('mouseleave', resetClass);

const inputTag = document.createElement('div');
inputTag.innerHTML = `
                        <input type="text" id="inputTag" placeholder="Enter your name">
                      `;
document.body.append(inputTag);

const inputTagValue = document.getElementById('inputTag');

function keyDownFunction() {
  console.log('You have Pressed the Key Countinously');
}

function keyUpFunction() {
  console.log('You have Unpressed the Key');
  console.log(inputTagValue.value);
}

function keyPressFunction() {
  console.log('You have Pressed the Key and Unpressed the Key');
}

inputTagValue.addEventListener('keydown', keyDownFunction);
inputTagValue.addEventListener('keyup', keyUpFunction);
inputTagValue.addEventListener('keypress', keyPressFunction);

const example1 = document.createElement('div');
example1.innerText = `Hello Please Click Me.`;
example1.setAttribute('id', 'eventDivTag');
document.body.insertBefore(example1, inputTag);

const eventExampleTag = document.getElementById('eventDivTag');
eventExampleTag.addEventListener('click', function (event) {
  event.preventDefault(); // To not to reload the page
  console.log('You Click Me');
  console.log(event.currentTarget);
  console.log(this);
  console.log(event.type);
});

const example2 = document.createElement('div');
example2.innerHTML = `
  <button class='btnTarget'> First Button </button>
  <button class='btnTarget'> Second Button but <strong> Click Me</strong></button>
  <button class='btnTarget'> Third Button </button>
`;

document.body.insertBefore(example2, example1);

const example3 = document.createElement('div');
example3.innerHTML = `
  <button class='btnTarget2'> First Button </button>
  <button class='btnTarget2'> Second Button but <strong> Click Me</strong></button>
  <button class='btnTarget2'> Third Button </button>
`;

document.body.insertBefore(example3, example1);

const button1 = document.querySelectorAll('.btnTarget');
const button2 = document.querySelectorAll('.btnTarget2');

button1.forEach(function (btn) {
  btn.addEventListener('click', function (event) {
    event.currentTarget.style.color = 'red';
    console.log(event.currentTarget);
  });
});

button2.forEach(function (btn) {
  btn.addEventListener('click', function (event) {
    event.target.style.color = 'blue';
    console.log(event.target);
  });
});

const example4 = document.createElement('div');
example4.classList.add('container');
example4.innerHTML = `
  <ul class='list-items'>
    <li class="item"><a href="#" class="link">Link1</a></li>
    <li class="item"><a href="#" class="link">Link2</a></li>
    <li class="item"><a href="#" class="link">Link3</a></li>
  </ul>
`;

document.body.insertBefore(example4, example3);

const containerTag = document.querySelector('.container');
const listTag = document.querySelector('.list-items');

function showBubbling(event) {
  event.preventDefault();
  console.log(`Current Target`, event.currentTarget);
  console.log(`Target`, event.target);
}

function stopPropagation(event) {
  event.preventDefault();
  console.log('You have Click the List');
  event.stopPropagation();
}

listTag.addEventListener('click', stopPropagation, { capture: true });
containerTag.addEventListener('click', showBubbling, { capture: true });
// document.addEventListener('click', showBubbling, { capture: true });
// window.addEventListener('click', showBubbling, { capture: true });

const divTagBubble = document.createElement('div');
divTagBubble.classList.add('divTagBubble');
document.body.append(divTagBubble);

const buttonTagBubble = document.createElement('button');
buttonTagBubble.classList.add('buttonTagBubble');
buttonTagBubble.textContent = `Click Me to Add Heading`;
document.body.append(buttonTagBubble);

buttonTagBubble.addEventListener('click', function (event) {
  const heading = document.createElement('h1');
  heading.classList.add('headingTagBubble');
  heading.textContent = 'I am a Heading';
  divTagBubble.appendChild(heading);
});

divTagBubble.addEventListener('click', function (event) {
  console.log('You have Click the Div');
  if (event.target.classList.contains('headingTagBubble')) {
    console.log('You have Click the Heading');
    event.target.style.color = 'red';
  }
});

//--------------------------FORM----------------------

const form = document.createElement('form');
form.setAttribute('id', 'form');
form.innerHTML = `
    <input type="text" placeholder="Enter Your Name" id="name">
    <input type="password"  placeholder="Enter Your Password" id="password">
    <input type="submit" id="submit">
`;
document.body.appendChild(form);

form.addEventListener('submit', function (event) {
  const name = document.getElementById('name');
  const password = document.querySelector('#password');
  event.preventDefault();

  if (name.value == '') {
    console.log('Please Enter Name');
  } else if (password.value == '') {
    console.log('Please Enter Password');
  } else {
    console.log('Form Submitted Successfully');
    console.log(`Your Name is ${name.value}`);
    console.log(`Your Password is ${password.value}`);
  }
});

// ===================================Local Storage===================================

localStorage.setItem('name', 'Jenish');
localStorage.setItem('surname', 'Dayani');
localStorage.setItem('job', 'Full Stack Developer');
localStorage.setItem('address', 'Dayani Villa');

console.log(`Name :- ${localStorage.getItem('name')}`);
console.log(`Surname :- ${localStorage.getItem('surname')}`);
console.log(`Job :- ${localStorage.getItem('job')}`);
console.log(`Address :- ${localStorage.getItem('address')}`);

localStorage.removeItem('name');

console.log(`Name :- ${localStorage.getItem('name')}`);
console.log(`Surname :- ${localStorage.getItem('surname')}`);
console.log(`Job :- ${localStorage.getItem('job')}`);
console.log(`Address :- ${localStorage.getItem('address')}`);

// localStorage.clear();

console.log(`Name :- ${localStorage.getItem('name')}`);
console.log(`Surname :- ${localStorage.getItem('surname')}`);
console.log(`Job :- ${localStorage.getItem('job')}`);
console.log(`Address :- ${localStorage.getItem('address')}`);

const friends = ['Jenish', 'Vaibhav', 'Het', 'Jemish'];
localStorage.setItem('friends', JSON.stringify(friends));

console.log(
  `Index 2 value from array Friends :- ${
    JSON.parse(localStorage.getItem('friends'))[2]
  }`
);

let fruits = [];

if (localStorage.getItem('fruits')) {
  console.log('Success');
  fruits = JSON.parse(localStorage.getItem('fruits'));
  console.log(fruits);
}

console.log(fruits);
fruits.push('Mango');
console.log(fruits);
localStorage.setItem('fruits', JSON.stringify(fruits));

function sayHello() {
  console.log('Hello My name is Jenish');
}

function showScore(name,score){
  console.log(`Hello i am ${name} and My score is ${score}`);
}

sayHello();
setTimeout(sayHello,10000)
setTimeout(function(){
  console.log('My Surname is Dayani');
},3000)
showScore('Vaibhav',20)
setTimeout(showScore,6000,'Jenish',99)

setInterval(showScore,0,'Het',50)