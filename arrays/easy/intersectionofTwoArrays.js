// intersection of two sorted Arrays 
// brute force method

function intersectionOfArrays(a,b) {

  let visitedArray = Array.from({length:b.length}).map(len => 0)
  let res = []

  for(let i=0;i<a.length;i++){
    for(let j=0;j<b.length;j++){
      if(a[i] === b[j] && visitedArray[j] == 0){
        res.push(a[i])
        visitedArray[j] = 1
        break
      }
      if(b[j]>a[i]){
        break
      }
    }
  }
  return res
}

const arr1 = [1,2,3,4,4,5,5,6,7]
const arr2 = [2,3,3,4,7,8,9]
console.log(intersectionOfArrays(arr1,arr2)) //[2,3,4,7]

// optimal solution ( two pointer approach)

function arrayIntersection(a,b) {
  let res = []
  let i = 0;
  let j=0;

  while(i < a.length && j < b.length){
      if(a[i]<b[j]){
         i++
      } else if (b[j]<a[i]) {
         j++
      } else {
         res.push(a[i])
         i++
         j++
    }
  }
  return res
}

const arr3 = [1,2,3,4,4,5,5,6,7]
const arr4 = [2,3,3,4,7,8,9]
const res = arrayIntersection(arr3,arr4) //[2,3,4,7]