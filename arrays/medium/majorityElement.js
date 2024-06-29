// brute force
function getMajority(arr, n) {
  for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = 0; j < n; j++) {
      if (arr[i] == arr[j]) {
        count++;
      }
    }
    if (count > Math.floor(n / 2)) {
      return arr[i];
    }
  }
  return -1;
}

let arr = [2, 3, 2, 2, 1, 4, 2, 2, 1];
getMajority(arr, arr.length);

// better soln using Hashing
function getBetterMajority(arr, n) {
  const mapp = new Map();
  for (let i = 0; i < n; i++) {
    if (mapp.has(arr[i])) {
      mapp.set(arr[i], mapp.get(arr[i]) + 1);
    } else {
      mapp.set(arr[i], 1);
    }
  }

  for (const [key, value] of mapp) if (value > Math.floor(n / 2)) return key;
  return -1;
}

// optimal soln using Moore's voting algo
function getOptimalMajority(arr, n) {
  let el;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (count == 0) {
      el = arr[i];
      count++;
    } else if (el == arr[i]) {
      count++;
    } else {
      count--;
    }
  }

  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (el == arr[i]) counter++;
  }
  if (counter > Math.floor(n / 2)) return el;
  return -1;
}

console.log(getOptimalMajority(arr, arr.length));
