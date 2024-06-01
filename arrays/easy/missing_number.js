//  find the missing number in the array
// brute force soln

function findMissing(arr){
  for(let i=1;i<= arr.length; i++){
    let flag =0
    for(let j=0;j<arr.length ; j++){
      if(arr[j] == i){
        flag=1
        break
      }
    }
    if(flag==0) return i
  }
}

const arr= [1,2,4,5,6]
console.log(findMissing(arr))


// better soln -> Hashing

// optimal soln -> summation of n natural number

function getMissingNumber(arr,N){
  let sum = (N*(N+1)) / 2
  let total = 0
  for(let i=0;i<arr.length;i++){
    total = total + arr[i]
  }

  return sum-total
}

const arr2 = [1,2,3,5,6]
console.log(getMissingNumber(arr2,arr2.length-1))

// optimal soln using xor

function getNumber(a,N){
  let xor1=0, xor2=0
  for(let i =0;i<N-1;i++){
    xor1 = xor1 ^ a[i]; // xor of array elements
    xor2 = xor2 ^ (i+1) // xor of numbers to n-1
  } 
  xor2 = xor2 ^ N
  return xor1^xor2
}

const arr3 = [1,3,4,5]
getNumber(arr3, 5 )
