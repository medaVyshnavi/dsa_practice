//Binary sort => O(log n) - input value is halved in every iteration

function binarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (arr[middleIndex] === target) {
      return middleIndex;
    }
    if (target < arr[middleIndex]) {
      rightIndex = middleIndex;
    } else {
      leftIndex = middleIndex;
    }
  }
  return -1;
}

binarySearch([1, 3, 4, 5, 6], 3);

// Binary search recursion => O(logn)

function binarySearchRecursion(arr, target) {
  return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, left, right) {
  let leftIndex = left;
  let rightIndex = right;

  if (leftIndex > rightIndex) return -1;

  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (arr[middleIndex] === target) {
    return middleIndex;
  }
  if (target < arr[middleIndex]) {
    return search(arr, target, leftIndex, middleIndex);
  } else {
    return search(arr, target, middleIndex, leftIndex);
  }
}
