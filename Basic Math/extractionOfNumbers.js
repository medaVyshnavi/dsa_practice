// extraction of digits
function extractNumbers(n) {
  let count = 0;
  while (n > 0) {
    let lastDigit = n % 10;
    console.log(lastDigit); // 4 3 2 1
    n = Math.trunc(n / 10);
    count++;
  }
  console.log(count); // 4
}

// if we need only the number of digits then we can do Math.log10(n) + 1

extractNumbers(1234);

//Time complexity O(log10(n))
