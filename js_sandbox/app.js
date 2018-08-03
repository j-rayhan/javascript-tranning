// create some arrays
const num = [ 2, 4, 5, 23,45, 55]; // Array is gero based it's start from 0 index
const num2 = new Array(22,34,42,26,77);
const fruit = ['Apple',  'Orange','Banana', 'Pear'];
const mixed = [ 22, 'Apple', true, undefined, null, {a:2, b:5}, new Date()];

let val;

// get array length
val = num.length;
// Check if is array
val = Array.isArray(num);
// get single value
val = num[2];
// insert 
num[2] = 1;
// find value index
val = num.indexOf(45);

// MUTATING ARRAYS

// // add to end
// num.push(222);
// // add to front
// num.unshift(122);
// // take off from end
// num.pop();
// // take off from front
// num.shift();
// // splice values;
// num.splice(2,3); // start from index 2 and splice 3 value
// // Reverse
// num.reverse();
// // concat
// val = num.concat(num2);


// // Sorting Array
// val = fruit.sort(); // it's ok
// val = num.sort(); // it's not work

// // use the "compare function"
// val = num.sort(function(x,y){
//   return x - y;
// });

// // Reverse sort
// val = num.sort(function(x,y){
//   return  y - x;
// });

// Find
function under5(num){
  return num < 5; 
}

function over5(num){
  return num > 5; 
}
val = num.find(over5); // show the first over 5 
console.log(num);
console.log(val);
