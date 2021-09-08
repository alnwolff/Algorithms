// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. 
// If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples
// GetSum(1, 0) == 1   // 1 + 0 = 1
// GetSum(1, 2) == 3   // 1 + 2 = 3
// GetSum(0, 1) == 1   // 0 + 1 = 1
// GetSum(1, 1) == 1   // 1 Since both are same
// GetSum(-1, 0) == -1 // -1 + 0 = -1
// GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2

// Solution:

export function getSum(a: number, b: number): number {
    if (a === b) {
      return a
    }
    
    var maxNum = Math.max(a,b)
    var minNum = Math.min(a,b)
    var counter = 0
    
    while(minNum <= maxNum) {
    counter += minNum;
    minNum ++;
    }
    return counter
  }