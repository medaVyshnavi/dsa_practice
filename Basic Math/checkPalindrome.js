function palindrome(n) {
  let val = Array.from(n.toString());
  for (let i = 0; i < n; i++) {
    if (val[i] !== val[val.length - i - 1]) return false;
  }
  return true;
}

palindrome(454);
