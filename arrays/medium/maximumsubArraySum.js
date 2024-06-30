// brute force

const arr = [-2, -4, 4, 1, 4, -9, 1, 2, 4];
function subArraySum() {
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      let sum = 0;
      for (let k = i; k <= j; k++) {
        sum = sum + arr[k];
      }
      max = Math.max(sum, max);
    }
  }
  return max;
}

// better approach
function getBetterSum(arr) {
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum = sum + arr[j];
      max = Math.max(sum, max);
    }
  }
  return max;
}

console.log(getBetterSum(arr));

// optimal soln
//KADANE'S ALGO

function getOptimalSum(arr) {
  let max = Number.MIN_SAFE_INTEGER;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];

    if (max < sum) max = sum;

    if (sum < 0) sum = 0;
  }
  if (max == 0) return [];
  return max;
}

const arr1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(getOptimalSum(arr1));

// Return the sub array and not the sum
function getSubArray(arr) {
  let max = Number.MIN_SAFE_INTEGER;
  let sum = 0,
    start = -1,
    end = -1,
    initial = 0;

  for (let i = 0; i < arr.length; i++) {
    if (sum == 0) initial = i;

    sum = sum + arr[i];

    if (max < sum) {
      max = sum;
      start = initial;
      end = i;
    }

    if (sum < 0) sum = 0;
  }

  return arr.slice(start, end + 1);
}
