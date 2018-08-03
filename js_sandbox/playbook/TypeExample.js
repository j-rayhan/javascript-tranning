// Primitive Data Types:
/*
1. Stored Directly in the locatoon the variable accesses
2. Stored on the stack
*/

/*
1. String
2. Number
3. Boolean
4. Null          // Read the different in NULL & UNDEFINED
5. Undefined
6 Symbols(ES6)
*/

//String
const name = "Johir";
// Number
const num = 33;
// Boolean
const isOpen = true;
// Null
const pan = null; // print Object // for get details google it
// Undefined
let startDate;  // It's not const
// Symbol
const sym = Symbol();
// console.log(typeof sym);



// Referance Data Types:
/*
1. Accessed by reference
2. Objects that are stored on the heap
3. A pointer to a location in memory
*/
 
/*
1. Arrays
2. Object Literals
3. Functions
4. Dates
5. Anything Else......
*/

// Array
const hobbies = ['movies', 'music', 'sports'];
// Object literal
const address = {
  city: 'Dhaka',
  state: 'H1'
}

const today = new Date();
console.log(today);
console.log(typeof today);


// Types are associated with values not variables
// The same variable can hold multiple types
// We do not need to specify types
// There are supersets of JS and addons to allow static typing(TypeScript, Flow)

// Most other languages are statically typed (java, C#, C++)
