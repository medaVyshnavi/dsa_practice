// brute force approach (linear approach)

function getNumber(arr){
  for(let i=0;i<arr.length;i++){
    let count = 0
    let num = arr[i]

    for(let j=0;j<arr.length;j++){
      if(num == arr[j]){
        count++
      }
    }
    if(count == 1) return num
  }
}

const arr = [1,1,2,3,4,4,5,6,6,3,2]
getNumber(arr)

// better approach (hashing)

// optimal soln => xor

function getNumberOnce(arr){
  let xor = 0
  for(let i=0;i<arr.length;i++){
    xor = xor^arr[i]
  }
  return xor
}

const arr1 = [1,1,2,3,4,4,5,6,6,3,2]
getNumber(arr1)