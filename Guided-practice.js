//1. Create an array to include the following list items: Honda, Toyota, Ford, Subaru.
const cars = ["Honda", "Toyota", "Ford", "Subaru"];
//2. Using that array, use array methods to transform it to:
//["Hyundai", "Toyota", "Mercedes", "Ford", "Audi"]
cars.pop();
cars.push("Audi");
cars.shift();
cars.unshift("Hyundai");
cars.splice(2,0, "Mercedes");
console.log(cars);


//Practice 2
//Using loops, count how many "e"s are in the following sentence:
//"There once was a donkey named Eeyore."
