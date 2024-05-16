// brute force method (by looping the values)

// let arr1 = [2,3,5,6,7];
// let arr2 = [1,2,3,4]

// function getUnionofArray(arr1,arr2) {
//   let s = new Set()
//   let union = []

//   for(let i =0;i<arr1.length;i++){
//     s.add(arr1[i])
//   }

//   for(let i =0;i<arr2.length;i++){
//     s.add(arr2[i])
//   }
//   for(const val of s){
//     union.push(val)
//   }
//   return union.sort()
// }

// console.log(getUnionofArray(arr1,arr2))


//  optimal solution (two pointers)

function getUnions(val1,val2){
  let i =0
  let j =0
  let union = []

  while(i < val1.length)
    if(val1[i] == val2[j]){
      union.push(val1[i])
      i = i+1;
      j = j+1;
    }
    else if(val1[i] < val2[j]){
      union.push(val1[i])
      i = i+1
    } else if (val1[i] > val2[i]){
      union.push(val2[j])
      j = j+1
    }
  
  if(j < val2.length){
    union.push(val2[j])
  }

  return union
}

let arr1 = [2,3,5,6,7];
let arr2 = [1,2,3,4]
console.log(getUnions(arr1,arr2))