// print Name 5 times
function printName(i, n) {
  if (i > n) return;
  console.log("vyshnavi");
  printName(i + 1, n);
}

printName(1, 5);

// print names linearly from 1 to N
function printNumbers(i, n) {
  if (i > n) return;
  console.log(i);
  printNumbers(1 + 1, n);
}
printNumbers(1, 10);

// print names linearly from N to 1
function printNumbersReverse(i, n) {
  if (i <= 0) return;
  console.log(i);
  printNumbersReverse(i - 1, n);
}
printNumbersReverse(10, 10);

//print Number lineraly from 1 to N using backtracking use i-1
function backTrackingToN(i, n) {
  if (i < 1) return;
  backTrackingToN(i - 1, n);
  console.log(i);
}
backTrackingToN(3, 3);

//print Number lineraly from N to 1 using backtracking use i+1 => 3,2,1
function backTrackingToN(i, n) {
  if (i > n) return;
  backTrackingToN(i + 1, n);
  console.log(i);
}
backTrackingToN(1, 3);

// find the sum of first n numbers using recursion
function sumNumber(n) {
  if (n == 0) return 0;
  return n + sumNumber(n - 1);
}

const sum = sumNumber(6);
console.log(sum);

// find the factorial of first n numbers using recursion
function factorialNumber(n) {
  if (n == 0) return 1;
  return n * factorialNumber(n - 1);
}

const factorial = factorialNumber(6);
console.log(factorial);
