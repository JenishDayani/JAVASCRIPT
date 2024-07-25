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
