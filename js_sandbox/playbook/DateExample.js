let val;

const today = new Date();
let birthday = new Date('9-10-1992');
birthday = new Date('September 10 1988');
birthday = new Date('10/10/1998');

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getUTCFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();    //1533284978995

birthday.setDate(2);
birthday.setMonth(11);
birthday.setFullYear(2000);
birthday.setHours(2);
birthday.setMinutes(20);
birthday.setSeconds(12);


// console.log(val);
console.log(birthday);
