//Fibonacchi Sequences => big o notation is O(n)

function getFibonacchi(n) {
  const arr = [0, 1];
  for (i = 2; i < n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  // OR
  // for (i = 0; i < n; i++) {
  //   arr[i + 2] = arr[i] + arr[i + 1];
  // }
  return arr;
}

console.log(getFibonacchi(7));

// Recursive Fibonacchi big O notation - o(2^n)

function fibonacchi(n) {
  if (n < 2) {
    return n;
  }
  return fibonacchi(n - 1) + fibonacchi(n - 2);
}

console.log(fibonacchi(0));
console.log(fibonacchi(1));
console.log(fibonacchi(8));
