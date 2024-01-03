function secondLargest(arr) {
  let largest = arr[0];
  let secondLargest = -1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] < largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

function secondSmallest(arr) {
  let smallest = arr[0];
  let secondSmallest = Number.MIN_SAFE_INTEGER;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      secondSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] < smallest && arr[i] > secondSmallest) {
      secondSmallest = arr[i];
    }
  }
  return secondSmallest;
}

const arr = [3, 9, 2, 1, 6, 4, 8, 5, 8];
console.log(secondLargest(arr));
console.log(secondSmallest(arr));
