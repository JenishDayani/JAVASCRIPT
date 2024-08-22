// const btn = document.querySelector('.btn');
// const url = './api/people.json';

// btn.addEventListener('click', () => {
//   getData(url);
// });

// function getData(url) {
//   const xhr = new XMLHttpRequest();

//   xhr.open('GET', url);
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       // const text = document.createElement('p');
//       // text.textContent = xhr.responseText;
//       // document.body.appendChild(text);
//       // console.log(`Done`);
//       const data = JSON.parse(xhr.responseText);
//       const displayData = data.map((item)=>{
//         return `<p>${item.name}</p>`
//       }).join('')
//       const element = document.createElement('div')
//       element.innerHTML = displayData
//       document.body.appendChild(element)
//     } else {
//       console.log({
//         status: xhr.status,
//         text: xhr.statusText,
//         state: xhr.readyState,
//       });
//     }
//   };
//   xhr.send();
// }

// console.log('Complete Code');

// ===============================================Fetch===============================================

const url = './api/people.json';

// fetch(url)
//   .then((response) => {
//     console.log(response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// fetch(url)
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// --------------------------------------------Data Display--------------------------------------------

// const btn = document.querySelector('.btn');
// btn.addEventListener('click', () => {
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       displayItem(data);
//     })
//     .catch((err) => console.log(err));
// });

// const displayItem = (items) => {
//   const displayData = items
//     .map((item) => {
//       const { name } = item;
//       return `<p>${name}</p>`;
//     })
//     .join('');
//   const element = document.createElement('div');
//   element.innerHTML = displayData;
//   document.body.appendChild(element);
// };

// ----------------------------------Data Display Async Await----------------------------------

// const btn = document.querySelector('.btn');
// btn.addEventListener('click', async () => {
//   const response = await fetch(url);
//   const data = await response.json();
//   displayItem(data);
// });

// function displayItem(items) {
//   const displayData = items
//     .map((item) => {
//       const { name } = item;
//       return `<p>${name}</p>`;
//     })
//     .join('');
//   const element = document.createElement('div');
//   element.innerHTML = displayData;
//   document.body.appendChild(element);
// }

// ----------------------------------Data Display Try Catch----------------------------------

const btn = document.querySelector('.btn');
btn.addEventListener('click', async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayItem(data);
  } catch (error) {
    console.log(error);
  }
});

function displayItem(items) {
  const displayData = items
    .map((item) => {
      const { name } = item;
      return `<p>${name}</p>`;
    })
    .join('');
  const element = document.createElement('div');
  element.innerHTML = displayData;
  document.body.appendChild(element);
}
