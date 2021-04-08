// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Note: If the number is a multiple of both 3 and 5, only count it once. Also, if a number is negative, return 0(for languages that do have them)

function solution(number){
  let sum = 0;
  if (number < 0) {
    return 0;
  }
  for (i = 0; i < number; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
      sum += i 
      }
  }
  return sum;
}


// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

numArr = [1, 2, 6, 3, 90, 7, 9, 8, 12, 18, 33, 21, .07, 250];

function maxAndMin(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return [min, max];
}


// A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is, knowing the following rules:

// The wanted word is in lowercase.
// The crowd of letters is all in uppercase.
// Note that the word will be spread out amongst the random letters, but their letters remain in the same order.