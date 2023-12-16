// print all the number that are divisible by N => O(n)
function divisible(n) {
  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      console.log(i);
    }
  }
}

divisible(40);

// optimised way => O(sqrt(N))
function btrDivisible(n) {
  const arr = [];
  // for (let i = 1; i < Math.sqrt(n); i++) { // sqrt is a function and it takes time to return a value
  for (let i = 1; i * i <= n; i++) {
    if (n % i == 0) {
      arr.push(i);
      if (n / i !== i) {
        arr.push(n / i);
      }
    }
  }
  console.log(
    arr.sort(function (a, b) {
      return a - b;
    })
  );
}

btrDivisible(36);
