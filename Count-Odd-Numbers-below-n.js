//Given a number n, return the number of positive odd numbers below n

// oddCount(7) => 3, i.e [1, 3, 5]
// oddCount(15) => 7, i.e [1, 3, 5, 7, 9, 11, 13]


// Solution:

function oddCount(n) {
    let oddCounter = 0;

    if (n % 2 !== 0){
      oddCounter = (n - 1 ) / 2;
    }

    oddCounter = n / 2;

    return oddCounter
}


