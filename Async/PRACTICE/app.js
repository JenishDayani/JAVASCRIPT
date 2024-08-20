// Make Soup
// Chop Onion
// Chop Carrots
// Boil Water for 10 Min
// Add Carrots and Boil for 5 Min
// Add Onion and Boil for 5 Min

// Make Soup
// Boil Water for 10 Min
// Chop Carrots
// Add Carrots and Boil for 5 Min
// Chop Onion
// Add Onion and Boil for 5 Min

//===================================NORMAL===================================
// console.log(`I am First`);
// console.log(`I am Second`);
// console.log(`I am Third`);

// console.log(`I am First`);
// boilingWater();
// console.log(`I am Third`);

// function boilingWater() {
//   console.log('Water start boiling');
//   for (let i = 0; i < 10000; i++) {
//     console.log('Water is boiling');
//   }
//   console.log('Water has Boiled');
// }

//===================================setTimeout===================================

// boilingWater(5000);
// console.log('Chop Carrots');

// function boilingWater(time) {
//   console.log('Water start boiling');
//   setTimeout(() => {
//    console.log('Water has Boiled');
//   }, time);
// }

// boilingWater();
// console.log(`Chop Carrot`);

// function boilingWater() {
//   console.log('Water start boiling');
//   setTimeout(() => {
//     console.log('Water has Boiled');
//     console.log('Add Carrot');
//     setTimeout(() => {
//       console.log('Carrot Done');
//       console.log('Add Onion');
//       setTimeout(() => {
//         console.log('Soup is Ready');
//       }, 5000);
//     }, 5000);
//     console.log('Chop Onion');
//   }, 10000);
// }

//===================================Color Change ===================================

const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
const heading3 = document.querySelector('.three');

// const btn = document.querySelector('.btn');

// btn.addEventListener('click', () => {
//   setTimeout(() => {
//     heading1.style.color = 'red';
//     setTimeout(() => {
//       heading2.style.color = 'green';
//       setTimeout(() => {
//         heading3.style.color = 'blue';
//       }, 1000);
//     }, 2000);
//   }, 1000);
// });

//--------------------------------------------------------------------------

// btn.addEventListener('click', () => {
//   addColor(2000, heading1, 'red')
//     .then(() => addColor(4000, heading2, 'green'))
//     .then(() => addColor(2000, heading3, 'blue'))
//     .catch((err)=>console.log(err)
//     )
// });

function addColor(time, element, color) {
  return new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color;
        resolve();
      }, time);
    } else {
      reject(new Error(`There is no such Element ${element}`));
    }
  });
}

//===================================PROMISE===================================
// const promise = new Promise((resolve, reject) => {
//   const value = true;
//   if (value) {
//     resolve('Promise is Resolved');
//   } else {
//     reject('Promise is Rejected');
//   }
// });

// console.log(promise);
// promise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//===================================Final Image===================================

// const btn = document.querySelector('.btn');
// const container = document.querySelector('.img-container');
// const url = 'https://picsum.photergeos/250';

// btn.addEventListener('click', () => {
//   loadImage(url)
//     .then((taco) => container.appendChild(taco))
//     .catch((err) => console.log(err));
// });

// function loadImage(url) {
//   return new Promise((resolve, reject) => {
//     let img = new Image();

//     img.addEventListener('load', () => {
//       resolve(img);
//     });

//     img.addEventListener('error', () => {
//       reject(
//         new Error(
//           `Failed to Load a image please check the path of the Image :- ${url}`
//         )
//       );
//     });

//     img.src = url;
//   });
// }

//===================================Async Await===================================

// async function functionName(params) {
//   await
// }

// const otherFunction = async () => {
//   await
// }

const btn = document.querySelector('.btn');

btn.addEventListener('click', async () => {
  const result = await displayColor();
  console.log(result);
});

async function displayColor() {
  try {
    const first = await addColor(1000, heading1, 'red');
    console.log(first);
    await addColor(1000, heading2, 'green');
    await addColor(1000, heading3, 'blue');
  } catch (error) {
    console.log(error);
  }
  return `Hello`;
}
