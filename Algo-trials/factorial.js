// factorial of a number => big o notation is O(n)

function getFactorial(n) {
  let fact = n;
  if (n == 0 || n == 1) {
    return 1;
  }
  for (i = 2; i < n; i++) {
    fact = fact * (n - i);
  }
  return fact;
}

console.log(getFactorial(7));

// recursive approach big o notation is O(n)
function getFact(n) {
  if (n < 2) {
    return 1;
  }
  return n * getFact(n - 1);
}

console.log(getFact(3)); //6
console.log(getFact(5)); // 120
console.log(getFact(4)); //24
