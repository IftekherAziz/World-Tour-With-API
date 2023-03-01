/* Simply use destructuring to declare a property of a JavaScript object as a variable. 
destructuring the array and to do that you destruct the element of the second position of the array 
and put it in a variable called 'balance'.
 */

// 1: Destructuring an object property as a variable:

const myObject = { name: "Alice", age: 30 };
const { age } = myObject;
console.log(age); 
// Output: 30

// 2: Destructuring an array element as a variable:

const myArray = ["apple", "banana", "orange"];
const [first] = myArray;
console.log(first); 
// Output: "apple"
const [, second] = myArray;
console.log(second);
// Output: "banana"
const [, , third] = myArray;
console.log(third);
// Output: "orange"

// 3: Destructuring an object property as a variable and renaming it:

const myObject2 = { name: "Alice", age: 30 };
const { age: myAge } = myObject2;
console.log(myAge);
// Output: 30


