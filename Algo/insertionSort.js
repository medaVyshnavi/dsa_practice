// time complexity = O(n^2) , 2 loops
// comparing each element to its left and then swap

function insertionSort() {
  for (i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    j = i - 1;
    while (j >= 0 && arr[j] > currentValue) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = currentValue;
  }
}
const arr = [4, -2, 5, 1, 8];
insertionSort(arr);
console.log(arr);
