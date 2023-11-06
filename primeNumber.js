//prime number => big o notation is O(n)
function isPrime(n) {
  if (n == 1) {
    return "not a prime";
  }
  if (n == 2) {
    return "is Prime number";
  }
  for (i = 2; i < n; i++) {
    return n % i === 0;
  }
}

console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(4));
console.log(isPrime(5));
console.log(isPrime(6));
console.log(isPrime(7));
console.log(isPrime(8));

/**  ---------------- optimsed way to find if a number is prime or not --------------------- */

// o(sqrt(n))

// find the sqrt of n and one factor will be less than the sqrt
// example => 35, a=5, b=7, sqrt(35) = 5.9160, a<sqrt

function checkPrime(n) {
  for (i = 2; i <= Math.sqrt(n); i++) {
    return n % i === 0;
  }
}

console.log(checkPrime(3));
console.log(checkPrime(4));
console.log(checkPrime(5));
console.log(checkPrime(6));
