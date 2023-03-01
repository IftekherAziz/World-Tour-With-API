/* What happens with array map, forEach, filter, find in javascript. Write a summary of it. */

// map: creates a new array with the results of calling a provided function on every element in the calling array.
const numbers = [1, 4, 9];
const roots = numbers.map(Math.sqrt);
console.log(roots);
// output: Array [1, 2, 3]

/* -------------------------------------------------------------------------------- */
// forEach: executes a provided function once for each array element.
const numbers2 = [1, 2, 3, 4, 5];
numbers2.forEach((num) => console.log(num));
// output: 1 2 3 4 5

/* -------------------------------------------------------------------------------- */
// filter: creates a new array with all elements that pass the test implemented by the provided function.
const numbers3 = [1, 2, 3, 4, 5];
const filteredNumbers = numbers3.filter((num) => num > 3);
console.log(filteredNumbers);
// output: Array [4, 5]

/* -------------------------------------------------------------------------------- */
// find: returns the value of the first element in the provided array that satisfies the provided testing function. Otherwise undefined is returned.

const numbers4 = [1, 2, 3, 4, 5];
const foundNumber = numbers4.find((num) => num > 3);
console.log(foundNumber);
// output: 4