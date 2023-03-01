/* Writes an arrow function with zero parameters that returns 89.*/
// 3.1:
const myFunction = () => 89;
console.log(myFunction());

/* Declares an arrow function with one parameter. 
This function will divide the parameter it takes by 17 and return the quotient. */
// 3.2:
const myFunction2 = (num) => num / 17;
console.log(myFunction2(34));

/* Write an arrow function with parameters. This function will take two parameters as input. 
Add those two parameters and divide the sum by two to return the quotient. */
// 3.3:
const myFunction3 = (num1, num2) => num1 + num2 / 2;
console.log(myFunction3(34, 17));

/* Write a multi-line arrow function. It will take two parameters. That arrow function will be many lines. 
It will add 7 to each input parameter there and then add the sum of those numbers. Try to figure out how to do it. */
// 3.4:

const myFunction4 = (num1, num2) => {
  num1 += 7;
  num2 += 7;
  return num1 + num2;
};
console.log(myFunction4(50, 50));

/* There will be an array of many numbers. Then your work will be using map on the array. 
Divide each element by 7 and keep the quotient as another array. The whole work will be done in one line. */
// 4:

const myArray = [7, 14, 21, 28, 35, 42, 49, 56, 63, 70];
const mapMyArray = myArray.map((num) => num / 7);
console.log(mapMyArray);