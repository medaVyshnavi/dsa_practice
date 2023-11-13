function binarySearch(arr, target) {
  if (arr[arr.length / 2] === target) {
    return arr[arr.length / 2];
  }
  if (arr[arr.length / 2] > target) {
    return arr[arr.length / 2];
  }
}

binarySearch([1, 3, 4, 5, 6, 7], 3);
