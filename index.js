//Only Odds -TAB 1
//Create a JavaScript code that accepts an array of numbers

//Input values:

const numbers1 = ["2", "4", "6", "8", "11", "20", "15", "22"];
console.log(numbers1);

//returns a new array with only the odd numbers from the original array.

const oddsOnly = numbers1.slice(4, 7);
oddsOnly.splice(-2, 1);

// If there is only one odd number in the array, return an array with that single value.

console.log(oddsOnly);

//Input values:

const numbers2 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
console.log(numbers2);

//returns a new array with only the odd numbers from the original array.

const oddsOnly2 = numbers2.slice(0, 9);
oddsOnly2.splice(1, 1);
oddsOnly2.splice(2, 1);
oddsOnly2.splice(3, 1);
oddsOnly2.splice(4, 1);
console.log(oddsOnly2);

//Input Values:

const numbers3 = ["70", "42", "55", "81", "21", "91", "34"];
console.log(numbers3);

//returns a new array with only the odd numbers from the original array.

const oddsOnly3 = numbers3.slice(2, 6);
console.log(oddsOnly3);

//Input Values:

const numbers4 = ["2", "4", "6", "8", "10", "11", "12"];
console.log(numbers4);

//returns a new array with only the odd numbers from the original array.

const onlyOdds4 = numbers4.slice(5, 6);
console.log(onlyOdds4);

//Vowel versus Consonant - TAB 2

//Create a JavaScript code that accepts a string of lowercase letters.

//inputs to test-hello, ukelele, awesome, onomonopia, textbook:

let str = "hello";
let vowels = 0;
let consonants = 0;

for (let i = 0; i < str.length; i++) {
  let char = str[i].toLowerCase();
  if (
    char === "a" ||
    char === "e" ||
    char === "i" ||
    char === "o" ||
    char === "u"
  ) {
    vowels++;
  } else if (char >= "a" && char <= "z") {
    consonants++;
  }
}
//Print the word followed by how many consonants and vowels it has.

console.log("hello has", consonants, "consonants and", vowels, "vowels");

//Reverse Array - TAB 3

//With a for loop, create a JavaScript code that creates a new array in reverse order.

//Input Arrays to test- [1, 2, 3], [1, 3, 5, 7, 9, 11], [20, 50, 30, 60, 200], [1, -1, 2, -3, 5, -8, 13]:

const array = [1, 2, 3];

const reversedArray = [];

for (let i = array.length - 1; i >= 0; i--) {
  const valueAtIndex = array[i];

  reversedArray.push(valueAtIndex);
}

console.log(reversedArray);

//FizzBuzz - TAB 4

//Create a JavaScript code that prints each number from 1 to 100 on a new line.
for (let i = 1; i <= 100; i++) {
  let pattern = /\n/;

  //For numbers that are multiples of both 3 and 5, print "FizzBuzz" instead of the number.

  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i + "FizzBuzz");
  }

  //For each multiple of 3, print "Fizz" instead of the number.
  else if (i % 3 === 0) {
    console.log(i + " Fizz");
  }
  //For each multiple of 5, print "Buzz" instead of the number.
  else if (i % 5 === 0) {
    console.log(i + " Buzz");
  } else {
    console.log(i);
  }
}
