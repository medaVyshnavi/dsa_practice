// brute force soln ①

function getSubArrayLength(arr, ksum) {
  let length = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      let sum = 0;
      for (let k = i; k <= j; k++) {
        sum = sum + arr[k];
      }
      if (sum == ksum) length = Math.max(length, j - i + 1);
    }
  }
  return length;
}

const arr2 = [1, 2, 3, 4, 1, 1, 1, 1, 1, 4, 2, 9];
const ksum = 3;
getSubArrayLength(arr2, ksum);

//brute force soln ②

function getSubArray(arr, ksum) {
  let length = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum = sum + arr[j];
      if (sum == ksum) length = Math.max(length, j - i + 1);
    }
  }
  return length;
}

getSubArray(arr2, ksum);

// better soln => this is the optimal soln for positives and negatives
const arr1 = [1, 2, 3, 4, 1, 1, 1, 1, 1, 4, 2, 9];
const k = 3;
function getMaxLengthSubArray(arr, k) {
  let n = arr.length;
  let sum = 0;
  let preMap = new Map();
  let maxLength = 0;

  for (let i = 0; i < n; i++) {
    sum = sum + arr[i];
    if (sum === k) {
      maxLength = Math.max(maxLength, i + 1);
    }

    let rem = sum - k;
    if (preMap.has(rem)) {
      let newLength = i - preMap.get(rem);
      maxLength = Math.max(maxLength, newLength);
    }

    if (!preMap.has(sum)) {
      preMap.set(sum, i);
    }
  }

  return maxLength;
}

// optimal solution if there are only positives.

function returnMaxLength(arr, k) {
  let i = 0,
    j = 0;
  let length = 0;
  let sum = 0;

  while (j < arr.length) {
    while (sum > k) {
      sum = sum - arr[i];
      i++;
    }

    if (sum == k) {
      length = Math.max(length, j - i + 1);
    }

    j++;
    if (j < arr.length) {
      sum = sum + arr[j];
    }
  }

  return length;
}

const arr = [1, 2, 3, 4, 1, 1, 1, 1, 1, 4, 2, 9];
console.log(returnMaxLength(arr, 6));
