// brute force method (by looping the values)

let arr1 = [1,2,3,5,6,7];
let arr2 = [1,2,3,4]

function getUnionofArray(arr1,arr2) {
  let s = new Set()
  let union = []

  for(let i =0;i<arr1.length;i++){
    s.add(arr1[i])
  }

  for(let i =0;i<arr2.length;i++){
    s.add(arr2[i])
  }
  for(const val of s){
    union.push(val)
  }
  return union.sort()
}

console.log(getUnionofArray(arr1,arr2))


//  optimal solution (two pointers)

function getUnionofArrayOptimal (arr1,arr2) {
   let i= 0
   let j =0
   let n1 = arr1.length
   let n2 = arr2.length

   let union =[]

   while(i<n1 && j<n2){
    if(arr1[i] < arr2[j]){
      if(union[union.length-1] != arr1[i] || union.length == 0){
        union.push(arr1[i])
      }
      i++
    }else{
      if(union[union.length-1] != arr2[j] || union.length == 0){
        union.push(arr2[j])
      }
      j++
    }
   }
   while(i < n1){
    if(union[union.length-1] != arr1[i] || union.length == 0){
      union.push(arr1[i])
    }
    i++
   }
   while( j <n2){
    if(union[union.length-1] != arr2[j] || union.length == 0){
      union.push(arr2[j])
    }
    j++
   }

   return union
}

console.log(getUnionofArrayOptimal(arr1,arr2))