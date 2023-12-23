// Bubble sort => O(n^2)
function bubbleSort(arr) {
  let temp = 0;

  for (i = 1; i <= arr.length - 1; i++) {
    for (j = 0; j < i; j++) {
      if (arr[i] < arr[j]) {
        // temp = arr[j];
        // arr[j] = arr[i];
        // arr[i] = temp;
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
}

bubbleSort([8, 20, -2, -4, 6, 2]);
