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

// size of
