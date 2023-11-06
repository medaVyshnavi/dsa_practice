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
