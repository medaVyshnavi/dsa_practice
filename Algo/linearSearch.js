// big o =  O(n)
function getIndex(arr, num) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    } else {
    }
  }
  return -1;
}

console.log(getIndex([2, 4, 2, 1, 3], 3)); // 4
console.log(getIndex([6, 2, 1, 7, 3], 5)); // -1
