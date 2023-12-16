function ArmstrongNumber(n) {
  let num = n;
  let sum = 0;
  while (n > 0) {
    let digit = n % 10;
    sum = sum + Math.pow(digit, num.toString().length);
    n = Math.trunc(n / 10);
  }
  if (sum === num) return true;
  return false;
}

ArmstrongNumber(1634);
