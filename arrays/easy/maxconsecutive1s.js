// optimal soln 

function getOnes(arr) {
  let max =0
  let count = 0 

  for(let i=0;i<arr.length;i++){
    if(arr[i] == 1){
      count = count+1
      max = max < count && count
    }else{
      count =0
    }
  }
  return max
}

const arr = [1,1,0,0,0,1,1,1,1,0]
console.log(getOnes(arr))