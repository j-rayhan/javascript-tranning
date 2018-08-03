// Function declarations

// function greet(firstName, lastName){
//   // Default valu
//   if(typeof firstName === 'undefined'){firstName = 'Johir'}
//   if(typeof lastName === 'undefined'){lastName = 'Raihan'}
//   return 'Hello '+ firstName + ' ' + lastName;
// }

// Best way set default value
function greet(firstName = 'Johir', lastName = 'Raihan'){
  return 'Hello '+ firstName + ' ' + lastName;
};

// console.log(greet());
// console.log(greet('Hasan', 'Khan'));

// FUNCTION EXPRESIONS
const square = function(x = 3){
  return x * x;
};
// console.log(square());

// IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS -IIFEs

// (function(){
//   console.log('IIFE Ran...');
// })();

// (function(name){
//   console.log(`Hello..${name}.`);
// })('Johir');

// PROPERTY METHODS

const todo = {
  add: function(){
    console.log('Add todo....');
  },
  edit: function(){
    console.log('Edit todo....');
  }
}

todo.delete = function(){
  console.log('Delete todo....');
}

todo.add();
todo.edit();
todo.delete();