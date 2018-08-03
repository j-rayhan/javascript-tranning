const firstName = 'Johir';
const lastName = 'Rayhan';
const age = 40;
const str = 'Web design, Web development, Programming';
let val;

val = firstName + lastName;

// Concatenation

val = firstName + " " + lastName;

// Append;
val = ' Go ';
val += ' Home';

val = ' Hello, my name is '+ firstName + ' and i am '+ age + ' Old.';

// Escaping
val = 'That\'s awesom, I can\'t wait';
// or
val = "That's awesom, I can't wait";

// Length
val = firstName.length;

//concat()
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[0];

// insexOf()
val = firstName.indexOf('o');
val = lastName.lastIndexOf('h');

// charAt()
val = firstName.charAt('2');
// get last char
val = firstName.charAt(firstName.length - 1);

// substring()
val = firstName.substring(0, 4);
// slice();
val = firstName.slice(0,4); //same as substring
val = firstName.slice(-3); // slice from last
// split
val = firstName.split('o');
val = str.split(',');

// replace()
val = lastName.replace('Rayhan', 'Hasan');

// includes()
val = str.includes('Web') // print true
val = str.includes('Web  ') // print false
val = str.includes('Go') // print false

console.log(val);
