let arr = [2, 1, 5, 1, 3, 2]
let k =3

function maxSumOfSubArray(arr,k) {
  if (arr.length < k) return null;

  let sum = 0;
  let maxSum = 0;

  for (let i = 0; i < k; i++){
    sum = sum + arr[i]
  }
  maxSum = sum;

  for (let i = k; i < arr.length; i++){
    sum = sum + arr[i] - arr[i - k]
    maxSum = Math.max(sum, maxSum);
  }
  return maxSum;
}

console.log(maxSumOfSubArray(arr,k))