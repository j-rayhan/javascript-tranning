const name = 'Rakin';
const age = 40;
const job = 'Web Developer';
const city = 'Dhaka';
let html;

// Without template string (es5)

html = '<ul>' +
'<li>Name : ' + name + '</li>'+
'<li>' + age + '</li>'+
'<li>' + job + '</li>'+
'<li>' + city + '</li>'+
'</ul>';



// With template Strings (es6)
function hello(){
  return 'HELLO'
};
html = `
  <ul>
    <li> ${name} </li>
    <li> ${age} </li>
    <li> ${job} </li>
    <li> ${city} </li>
    <li> ${2+5} </li>
    <li> ${hello()} </li>
    <li> ${age > 35? 'Over 35':'Under 35'} </li>
  </ul>
`
document.body.innerHTML = html;
