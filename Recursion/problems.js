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

// reverse an array using recursion
let arr = [5, 4, 3, 2, 1];
let reverseArray = (arr, i, length) => {
  if (i >= length / 2) {
    console.log(arr);
    return;
  }
  [arr[i], arr[length - i - 1]] = [arr[length - i - 1], arr[i]];
  reverseArray(arr, i + 1, length);
};

reverseArray(arr, 0, arr.length);

// check if a string is palindrome using recursion
let string = "MADAM";
function checkPalindrome(arr, i, length) {
  if (i >= length / 2) {
    console.log(true);
    return;
  }
  if (arr[i] !== arr[length - i - 1]) {
    console.log(false);
    return;
  }
  checkPalindrome(arr, i + 1, length);
}

checkPalindrome(Array.from(string), 0, string.length);

// fibonacci number using recursion
function fibonacchi(n) {
  if (n < 2) return n;
  return fibonacchi(n - 1) + fibonacchi(n - 2);
}

console.log(fibonacchi(4));
