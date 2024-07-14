// brute force

function rearrageArray(arr1) {
  let pos = [];
  let neg = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      pos.push(arr[i]);
    } else {
      neg.push(arr[i]);
    }
  }

  for (let i = 0; i < arr.length / 2; i++) {
    arr[2 * i] = pos[i];
    arr[2 * i + 1] = neg[i];
  }

  return arr;
}
console.log(rearrageArray(arr));
// TC = o(N) + O(N/2)
// SC = o(N/2) + O(n/2) = O(N)

// optimal solution
function getRearrage(arr) {
  let j = 0;
  let k = 1;
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      newArr[j] = arr[i];
      j = j + 2;
    } else {
      newArr[k] = arr[i];
      k = k + 2;
    }
  }
  return newArr;
}

console.log(getRearrage(arr));
const arr = [1, 2, 3, -1, -2, -3];

// considering the fact that the number of positives and negative are not equal

function reArrange(arr) {
  let pos = [];
  let neg = [];
  let newArr = [];
  let index = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      pos.push(arr[i]);
    } else {
      neg.push(arr[i]);
    }
  }

  if (pos.length > neg.length) {
    for (let i = 0; i < neg.length; i++) {
      newArr[2 * i] = pos[i];
      newArr[2 * i + 1] = neg[i];
      index = i;
    }
    return [...newArr, ...pos.slice(neg.length)];
  } else {
    for (let i = 0; i < pos.length; i++) {
      newArr[2 * i] = pos[i];
      newArr[2 * i + 1] = neg[i];
    }
    return [...newArr, ...neg.slice(pos.length)];
  }
}

console.log(reArrange(arr));
