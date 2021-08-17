// Find the number with the most digits.
// If two numbers in the argument array have the same number of digits, return the first one in the array.

// Example:

// findLongest([1, 10, 100])// => 100)
// findLongest([9000, 8, 800])// => 9000)
// findLongest([8, 900, 500])// => 900)\


// Solution:

function findLongest(array){
    let longest = 0;
    
    for (num of array) {
      if (num.toString().length > longest.toString().length) {
        longest = num
      }
    }
    return longest
  }