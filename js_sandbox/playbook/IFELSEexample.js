/*
if(something){
  do something
}else{
  do domething else
}
*/ 

const id = 1;

// // EQUAL TO ==
// if(id == 1){
//   console.log('CORRECT');
// }else{
//   console.log('NOT CORRECT');
// }
// // NOT EQUAL TO !=
// if(id != 1){
//   console.log('CORRECT');
// }else{
//   console.log('NOT CORRECT');
// }
// // EQUAL TO VALUE & TYPE ===
// if(id === 1){
//   console.log('CORRECT');
// }else{
//   console.log('NOT CORRECT');
// }



// // Test if undefined
// if (id) {
//   console.log(`The ID is ${id}`); // print id is not defined
// } else {
//   console.log('No ID');
// }
// OR
// if (typeof id !== 'undefined') {
//   console.log(`The ID is ${id}`); // print id is not defined
// } else {
//   console.log('No ID');
// }

// LOGICAL OPERATORS

const name = 'Steve';
const age = 23;

// AND &&
if (age> 0 && age <= 12) {
  console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19) {
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is a adult`);
}

// OR ||
if (age < 16 || age > 65) {
  console.log(`${name} can't run the race`);
} else {
  console.log(`${name} is registered for the race`);
}

// TERNARY OPERATOR
console.log(id === 1 ? 'CORRECT' : 'INCORRECT');

// WITHOUT BRACKETS

if (age < 16 || age > 65) 
  console.log(`${name} can't run the race`);
 else 
  console.log(`${name} is registered for the race`);
