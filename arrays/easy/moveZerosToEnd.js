// brute force method with TC= O(2N)

function moveZerosToEnd(arr) {
  const temp = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) temp.push(arr[i]);
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] = temp[i];
  }

  for (let i = temp.length; i < arr.length; i++) {
    arr[i] = 0;
  }

  return arr;
}

const arr = [2, 3, 4, 0, 1, 3, 0, 6, 0, 0];
const arr1 = [1, 0, 2, 3, 2, 0, 0, 4, 5, 1];
moveZerosToEnd(arr1);

// optimal approach
function movesZeros(arr) {
  let j = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      j = i;
      break;
    }
  }
  if (j == -1) return nums;

  for (let i = j + 1; i < arr.length; i++) {
    if (arr[i] != 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j++;
    }
  }

  return arr;
}
const arr2 = [1, 0, 2, 3, 2, 0, 0, 4, 5, 1];
movesZeros(arr2);
