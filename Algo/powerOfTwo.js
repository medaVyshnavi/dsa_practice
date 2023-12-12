// power of 2
// n === 2^n

function getPowerOfTwo(n) {
  if (n == 1 || n == 2) {
    return true;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}

console.log(getPowerOfTwo(3));
console.log(getPowerOfTwo(5));
console.log(getPowerOfTwo(8));

// BITWISE OPERATOR

function getPowerOfTwoBitwise(n) {
  if (n < 1) {
    return false;
  }
  if (n & (n - 1 !== 0)) {
    return false;
  }
  return true;
}

console.log(getPowerOfTwo(3));
console.log(getPowerOfTwo(5));
console.log(getPowerOfTwo(8));
