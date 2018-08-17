// FOR loop

// for (let i = 0; i < 8; i++) {
//   if (i === 2) {
//     console.log(' 2 is my favorite number');
//     continue;
//   }  
//   if (i === 6) {
//     console.log(' Stop the loop');
//     break;
//   }
//   console.log('NUmber '+ i);
  
// }

// let i = 20;
// // While loop
// while (i<5) {
//   console.log('Number '+ i);
//   i++;
// }

// // Do while
// do {
//   console.log('Number '+ i); // it must be print one
//   i++;
// } while (i<10);

// LOOP through array
const cars = ['Ford', 'Honda', 'Toyota'];

// for (let i = 0; i < cars.length; i++) {
//   const element = cars[i];
//   console.log(element);
// }

// // use this 
// cars.forEach(car => {
//   console.log(car);
// });

// cars.forEach((car ,index , array) => {
//   console.log(`${index} : ${car}`);
//   console.log(array);
// });

//MAP
const users = [
  {id: 1, name: 'Ja'},
  {id: 2, name: 'Ka'},
  {id: 3, name: 'Ra'}
];

const ids = users.map( user => {
  return user.id;
});

// console.log(ids);

// FOR IN LOOP
const user = {
  name: 'Ja',
  age: 22,
  email: "a@g.com"
};

for (const x in user) {
  console.log(`${x}: ${user[x]}`);
  
};

