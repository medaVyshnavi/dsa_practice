// largest number in an array

let num = [22,-9,10,-12,4,3,2,7,8,10]

function findLargest (arr) {
  let largest = arr[0]
  let secondLargest = 0

  for(let i=1;i<arr.length;i++){
    if(arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i]
    }
    if(arr[i] < largest && arr[i] > secondLargest){
      secondLargest = arr[i]
    }
  }
  return secondLargest
}

console.log(findLargest(num))