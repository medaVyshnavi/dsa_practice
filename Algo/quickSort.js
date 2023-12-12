// avg case complexity O(nlogn)
// worst case complexity O(n^2) , if we are sorting an already sorted array

function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let pivotElement = arr[arr.length - 1];
  let leftArray = [];
  let rightArray = [];

  for (i = 0; i < arr.length - 1; i++) {
    if (arr[i] > pivotElement) {
      rightArray.push(arr[i]);
    } else {
      leftArray.push(arr[i]);
    }
  }
  return [...quickSort(leftArray), pivotElement, ...quickSort(rightArray)];
}

const arr = [-6, 20, 8, -4, 2];
console.log(quickSort(arr));
