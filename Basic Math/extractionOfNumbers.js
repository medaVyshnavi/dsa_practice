function extractNumbers(n) {
  let count = 0;
  while (n > 0) {
    let lastDigit = n % 10;
    console.log(lastDigit);
    n = Math.trunc(n / 10);
    count++;
  }
  console.log(count);
}

extractNumbers(8988);
