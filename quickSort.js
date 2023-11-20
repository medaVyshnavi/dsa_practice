function quickSort(arr) {
  let pivotElement = arr[arr.length - 1];
  let leftArray = [];
  let rightArray = [];
  let i = 0;
  while (arr.length > 0) {
    if (arr[i] > pivotElement) {
      rightArray.push(arr[i]);
    } else {
      leftArray.push(arr[i]);
    }
    arr.splice(arr[i], 1);
    i = i + 1;
    console.log(leftArray, rightArray);
  }
  return [...leftArray, ...rightArray];
}

const arr = [-6, 20, 8, -4, 2];
quickSort(arr);
console.log(arr);
