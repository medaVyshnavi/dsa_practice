//time complexity O(n^2) or O(mn) => input size can be different

function cartesianProduct(arr1, arr2) {
  let result = [];
  for (i = 0; i < arr1.length; i++) {
    for (j = 0; j < arr2.length; j++) {
      result.push([arr1[i], arr2[j]]);
    }
  }
  return result;
}

const arr1 = [1, 2];
const arr2 = [3, 4, 5];

console.log(cartesianProduct(arr1, arr2)); // [[2,1],[2,4],[3,1],[3,4]]
