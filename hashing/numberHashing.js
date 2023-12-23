function numberHashing(arr, n) {
  let map1 = new Map();

  for (let i = 0; i < arr.length; i++) {
    map1.set(arr[i], (map1.get(arr[i]) || 0) + 1);
  }
  if (!map1.has(n)) return 0;
  return map1.get(n);
}

let arr = [1, 2, 1, 1];
console.log(numberHashing(arr, 1));

// frequency of highest and lowest element
function frequency(arr) {
  let map2 = new Map();

  for (let i = 0; i < arr.length; i++) {
    map2.set(arr[i], (map2.get(arr[i]) || 0) + 1);
  }

  return new Map(
    [...map2].sort(function (a, b) {
      return a[1] - b[1];
    })
  );
}
let arr2 = [1, 2, 1, 1, 7, 8];
console.log(frequency(arr2));
console.log(frequency(arr2).keys().next().value);
const newArr = Array.from(frequency(arr2));
console.log(newArr[newArr.length - 1][0]); // 2- lowest frequency 1-highest frequency

// Time Complexity: O(N), where N = size of the array. The insertion and retrieval operation in the map takes O(1) time.
// Space Complexity:  O(N), where N = size of the array. It is for the map we are using.
