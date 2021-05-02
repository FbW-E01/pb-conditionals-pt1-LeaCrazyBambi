const numberOne = 45;
const numberTwo = 80;
const numberThree = 207;

if ((numberOne >= 50 && numberOne <= 99) || (numberTwo >= 50 && numberTwo <= 99)) {
  console.log("Is in range")
}


//  2.
const oneInRange = (numberOne >= 50 && numberOne <= 99);
const twoInRange = (numberTwo >= 50 && numberTwo <= 99);
const thirdInRange = (numberThree >= 50 && numberThree <= 99);
if (oneInRange || twoInRange || thirdInRange) {
  console.log("One or more are in range")
}

// 3.
const a = 23;
const b = 11;
const c = 1991;

console.log(Math.max(a, b, c));


//  4.
const stringOne = "Photo";
const newString = "Py";

if (newString === stringOne.slice(0, 2)) {
  console.log(stringOne)
} else {
  console.log(newString + stringOne)
}

// 5.

const number1 = 15;
const number2 = 42;
const sumOfNumbers = number1 + number2;

if ((sumOfNumbers >= 50) && (sumOfNumbers<= 80)) {
  console.log(65)
} else {
  console.log(80)
}


// 6.
(sumOfNumbers === 8) || (number1 - number2 === 8) || (number2 - number1 === 8) ? console.log(true) : console.log(false);

//  7.
(number1 === 15) || (number2 === 15) || (sumOfNumbers === 15) ? console.log(true) : console.log(false);

// 8. 
// (number1 / 7) === ? console.log(true) : console.log(false);
// console.log(number1 / 7);

// 9
