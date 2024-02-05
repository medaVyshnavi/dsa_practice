// rotate by 1
function leftRotate(arr) {
  const temp = arr[0];
  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  arr[arr.length - 1] = temp;
  return arr;
}

const arr = [1, 2, 3, 4, 5];
console.log(leftRotate(arr)); // [2,3,4,5,1]

// ---------------------------------------------------------------------------------------------
// rotate by N by brute force method
function leftRotateByN(arr, n) {
  n = n % arr.length;
  const temp = arr.slice(0, n);
  for (let i = n; i < arr.length; i++) {
    arr[i - n] = arr[i];
  }
  const newArr = arr.splice(0, arr.length - n);
  return [...newArr, ...temp];
}

const arr1 = [1, 2, 3, 4, 5];
console.log(leftRotateByN(arr1, 12));

// -----------------------------------------------------------------------------------------------

function rotateByReverse(arr, n) {
  return arr.slice(n).concat(arr.slice(0, n));
}
const arr3 = [1, 2, 3, 4, 5];
console.log(rotateByReverse(arr3, 2));
