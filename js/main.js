// Control Flow
/*
  Conditionals - skip lines of code
  Loops - repeat lines of code
  functions - store code for reusibilty, or for later use
*/

const sunny = true;
const temp = 76;

const age = null;

// if (sunny) {
//   // Code below only runs if true
//   console.log('It is sunny today.')
// } else if (temp > 70) {
//   console.log('It is NOT sunny today, but it is warm.')
// } else {
//   console.log('It is cloudy and cold');
// }

if (!(age >= 21)) {
  // console.log('You can NOT have a drink')
}

// Truthiness - the boolean expression of a value
// There are a LOT of truthy values
// It's easier to focus on the the 6 falsey values
// false
// 0
// "" (empty string)
// NaN
// null
// undefined



// const title = document.querySelector('h1');
// const button = document.querySelector('button');
// let shouldChangeTitle = false;




// button.addEventListener('click', () => {
//   shouldChangeTitle = true
//   // title.innerHTML = 'Different';
//   // title.style.color = 'red';
//   if (shouldChangeTitle) {
//     title.innerHTML = 'Different';
//     title.style.color = 'red';
//   }
// })

/*
EQUALITY
==, ===

InEquality
!=, !==
*/

// if (1 !== '1') {
//   console.log('True')
// } else {
//   console.log('False')
// }


// if (0 && 0) {
//   console.log('Truthy')
// } else {
//   console.log('Falsey')
// }

const user = 'John Doe';
const isAdmin = false;
const isEditor = false;
const formInput = null;
const id = formInput || 1;
// const isLoggedIn = false;

// if (isLoggedIn && isAdmin) {
//   console.log('Secret Password: AbraCadabra');
// }

// isAdmin && console.log('Secret Password: AbraCadabra');




for (let i = 0; i < 1000; i++) {
  const enemy = {
    id: i,
    health: 10,
    damage: 0,
    attack: function(){},
  };
  console.log(enemy);
}
