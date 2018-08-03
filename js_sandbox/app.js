const person = {
  firstName: 'Johan',
  lastName: 'Dev',
  age: 40,
  email: 'johan23@gao.com',
  hobbies: ['music', 'sports'],
  address: {
    city: 'Boston',
    state: 'BA'
  },
  getBirthYear: function(){
    return 2018 - this.age; // for get access in object use 'this' key word
  }
}

let val;

val =person;
// get specific value
val = person.firstName;
val = person['firstName'];
val = person.age;
val = person.hobbies[1];
val = person.address;
val = person.address['city'];
val = person.address.state;

val = person.getBirthYear(); 

console.log(val);

const people = [
  {name: 'Ja', age: 33},
  {name: 'Ra', age: 30},
  {name: 'Ka', age: 35}
]

for(let i =0; i<people.length; i++){
  console.log((people[i].name));
  
}
