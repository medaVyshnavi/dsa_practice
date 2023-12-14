function reverseNumber(n) {
  let num = 0;
  while (n > 0) {
    let lastDigit = n % 10;
    num = num * 10 + lastDigit;
    n = Math.trunc(n / 10);
  }
  console.log(num);
}

reverseNumber(5900);
