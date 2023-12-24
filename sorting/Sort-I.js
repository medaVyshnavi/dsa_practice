function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
    }
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  return arr;
}

const arr = [15, -3, -2, 100, 18, 39];
console.log(selectionSort(arr));

/* ---------------------------------Bubble Sort---------------------------------------------------- */
// 0(n^2)
function bubbleSort(arr) {
  for (let i = 1; i <= arr.length - 1; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] < arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
}

const arr1 = [9, 13, 20, 24, 2];
console.log(bubbleSort(arr1));

// for Best time complexity only
function bubbleSort(arr) {
  for (let i = 1; i <= arr.length - 1; i++) {
    let didSwap = 0;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[i]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        didSwap = 1;
      }
    }
    if (didSwap == 0) {
      break;
    }
    console.log("ran");
  }
  return arr;
}

const arr2 = [1, 2, 3, 4, 5, 6];
console.log(bubbleSort(arr2));

/* ---------------------------------Insertion Sort---------------------------------------------------- */

function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      j--;
    }
  }
  return arr;
}

console.log(insertionSort([6, 2, 5, 3, 1, 3]));
