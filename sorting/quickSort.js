function quickSort(arr, low, high) {
  if (low < high) {
    let partial = getPartitionIndex(arr, low, high);
    quickSort(arr, low, partial - 1);
    quickSort(arr, partial + 1, high);
  }
}

function getPartitionIndex(arr, low, high) {
  let pivot = arr[low];
  let i = low;
  let j = high;

  while (i < j) {
    while (arr[i] <= pivot && i <= high - 1) {
      // <= we need to decide where we need to place the duplicate numbers before or after the partial number
      i++;
    }
    while (arr[j] > pivot && j >= low + 1) {
      // >
      j--;
    }
    if (i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[low], arr[j]] = [arr[j], arr[low]];
  return j;
}

const arr = [4, 2, 7, 3, 9, 1, 5, 8, 6];
quickSort(arr, 0, arr.length - 1);
console.log(arr);
