let val;

// Number to String
val = 5;
val = String(555);
val = String(4+4);
// Bool to String
val = String(true);
// Date to String
val = String(new Date());
// Array to String
val = String([1,2,3,5]);

// toString();
val = (5).toString();
val = (true).toString();
// //Output
// console.log(val);
// console.log(typeof val);
// console.log(val.length); // Number have no length it's undefined

// String to Number
val = Number('5'); //log print 1) 5 2) number 3) 5
val = Number(true); //log print 1) 1 2) number 3) 1
val = Number(false); //log print 1) 0 2) number 3) 0
val = Number(null); //log print 1) 0 2) number 3) 0
val = Number('hello'); //log print 1) NaN 2) number 3) NaN
val = Number([1,2,3]); //log print 1) NaN 2) number 3) NaN

val = parseInt('100.40');
val = parseFloat('100.40');

//Output
// console.log(val);
// console.log(typeof val);
// console.log(val.toFixed(3)); // toFixed use for show decimal value


// This example of cohesion
// const val1 = 5;
// const val1 = '5';
const val1 = String(5);
const val2 = 6;
// const sum = val2 + val1;
const sum = Number(val2 + val1); // only Change the type ADD value is 65


// Output
console.log(sum);
console.log(typeof sum);

