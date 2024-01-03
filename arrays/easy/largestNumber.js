// brute force will be any sorting algo - selection,bubble,merge o(NlogN)

//optimal soln  TS -> O(N) SC(1)
function findLargest(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) largest = arr[i];
  }
  return largest;
}

const arr = [1, 4, 2, 1, 13, 7, 1];
console.log(findLargest(arr));
