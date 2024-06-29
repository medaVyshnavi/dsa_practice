// brute force approach

const arr = [2, 6, 5, 8, 11];
const target = 14;

// when comparing two elements you dont have to compare again when new loop starts
function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == target) return "YES";
      // return [i,j]
    }
  }
  return "NO";
  // return [-1,-1]
}

console.log(twoSum(arr, target));

// better approach

function getTwoSum(arr, target) {
  let mapp = new Map();
  for (let i = 0; i < arr.length; i++) {
    let more = target - arr[i];
    if (mapp.get(more) !== undefined) return "YES"; // return [mapp.get(more),i]
    mapp.set(arr[i], i);
  }
  return "NO"; // return [-1,-1]
}

// optimal solution
function getOptimalTwoSum(arr, target) {
  left = 0;
  right = arr.length - 1;
  arr.sort((left,right) => left-right);
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum == target) return "YES";
    else if (sum < target) left++;
    else right--;
  }
  return "NO";
}

console.log(getOptimalTwoSum(arr,target))
