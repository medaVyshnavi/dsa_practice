function isArraySorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= arr[i - 1]) {
      return false;
    }
  }
  return true;
}

const arr1 = [2, 3, 1, 3, 4, 5, 6];
const arr2 = [2, 3, 4, 5, 6, 7, 8];
isArraySorted(arr1);
