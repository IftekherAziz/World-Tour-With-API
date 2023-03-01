/* Declare an object. That object will have minimum five properties. 
Then the value of one property will be another object, 
the value of another property will be an array. 
The value of a property will be a function (method). 
Calling this method will return any property of the object from within the method. 
And the other two are as you wish. */

// 1:

const myObject = {
  name: "John",
  age: 30,
  contact: {
    email: "john@example.com",
    phone: "555-1234",
  },
  hobbies: ["reading", "cooking", "traveling"],
  getPropertyValue: function (property) {
    return this[property];
  },
  isAdmin: true,
};

/* --------------------------------------------------------------- */
/* Declare a string variable with a template string. 
In that, put the value of one of the three properties of the above object in your template string. 
One of these will set a property--from the property of the nested object. 
Another property would be that property's value is an array with the elements at the second position. 
And you can set the rest as you wish. 
*/

// 2:

const myString = `My name is ${myObject.name}, I am ${myObject.age} years old, and my email is ${myObject.email}. I like ${myObject.hobbies[1]}`;
console.log(myString);