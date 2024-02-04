// brute force method
function removeDuplicate(arr) {
  return new Set(arr);
}

const arr = [1, 4, 2, 1, 13, 7, 1];
console.log(removeDuplicate(arr));

// optimal soln using two pointers
function removeDups(arr) {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] != arr[j]) {
      arr[i + 1] = arr[j];
      i++;
    }
  }
  return i + 1;
}

const arr1 = [1, 1, 2, 2, 3, 4, 4, 4, 4, 4];
console.log(removeDups(arr1));
