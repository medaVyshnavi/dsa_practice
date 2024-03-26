function linearSearch(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      return i;
    }
  }
  return -1;
}

const arr = [1, 5, 6, 7, 4, 3, 3, 3];
linearSearch(arr, 3);
