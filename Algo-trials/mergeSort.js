// time complexity O(nlogn)
// we are dividing the elements and also we have 1 loop n logn

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  return mergeArray(mergeSort(left), mergeSort(right));
}

function mergeArray(left, right) {
  let temp = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      temp.push(left.shift());
    } else {
      temp.push(right.shift());
    }
  }
  return [...temp, ...left, ...right];
}

const arr = [2, -3, -8, 1, 10];
console.log(mergeSort(arr));
