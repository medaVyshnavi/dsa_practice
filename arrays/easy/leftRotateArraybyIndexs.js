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
  return arr.slice(0, n).concat(arr.slice(n));
}
const arr3 = [1, 2, 3, 4, 5];
console.log(rotateByReverse(arr3, 2));

// ------------------------------------------------------------------------------------------------------

function rotateByRight(nums, k) {
  return nums.slice(nums.length - k).concat(nums.slice(0, nums.length - k));
}
const nums = [1, 2, 3, 4, 5];
console.log(rotateByReverse(nums, 2));

// RIGHT ROTATE
var rotate = function (nums, k) {
  k %= nums.length; // if k is greater than nums.length then one cycle is completed that means it will remain the same and we have to remainder shifts

  let reverse = function (i, j) {
    while (i < j) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++;
      j--;
    }
  }; // suppose  ----->--->
  reverse(0, nums.length - 1); // reverse   <--<------
  reverse(0, k - 1); // reverse first part ---><----
  reverse(k, nums.length - 1); // reverse second part --->----->
};
