// // Data Structures
// class Emoji {
//   constructor(param, param2, param3) {
//     super();
//     this.param = param;
//     this.param2 = param2; 
//   }  
  
//   static method() {
//     return 0;
//   }
// }

// class SuperHuman extends Emoji {
//   constructor (){
//     (super);
//     this.property = 0;

//   }
// }

// FizzBuzz
//We are going to write a function called fizzbuzz that will accept no arguments.
//The goal of this function is to print out all numbers from 1 to 100 but with three exceptions:
//For every number that is divisible by 3 and 5, console log "FizzBuzz".
//For every number that is divisible by only 3 and not 5, console log "Fizz".
//For every number that is divisible by only 5 and not 3, console .log "Buzz".
// function fizzbuzz() {
//   for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log('FizzBuzz')
//     }
//     if (i % 3 === 0) {
//       console.log('Fizz');
//     }
//     else if (i % 5 === 0) {
//       console.log('Buzz')
//     }
//     else console.log(i);
//   }
// }

// fizzbuzz();


// Solve outloud and explain your thought process
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let sum = 0

// .filter()
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
console.log(nums.filter(num => num % 3 === 0 ));
  
//.forEach
// The forEach() method executes a provided function once for each array element. 

// .reduce().map().split().join()

function myFunction(item) {
  sum += item;
}

nums.forEach(myFunction);

console.log(sum);

// The join() method returns the array as a string.
// The elements will be separated by a specified separator. The default separator is comma (,).

// Note: this method will not change the original array.

const joinNums = nums.join();
console.log(joinNums);

// The reduce() method reduces the array to a single value.
//The reduce() method executes a provided function for each value of the array (from left-to-right).
//The return value of the function is stored in an accumulator (result/total).
// reduce() does not execute the function for array elements without values.
// Note: This method does not change the original array.

const leah = nums.reduce(myFunc);

function myFunc(total, num) {
  return total - num;
}

console.log(leah);

//The map() method creates a new array with the results of calling a function for every array element.

// The map() method calls the provided function once for each element in an array, in order.
// Note: this method does not change the original array.

nums.map(Math.sqrt);