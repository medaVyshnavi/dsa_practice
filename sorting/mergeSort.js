/** --------------------------------- Merge Sort ------------------------ */
// Time Complexity O(nlogn)
// Space Complexity O(n)
function mergeSort(arr, low, high) {
  if (low >= high) return;
  let mid = Math.floor((low + high) / 2);
  mergeSort(arr, low, mid);
  mergeSort(arr, mid + 1, high);
  mergeElements(arr, low, mid, high);
}

function mergeElements(arr, low, mid, high) {
  let temp = [];
  let left = low;
  let right = mid + 1;

  while (left <= mid && right <= high) {
    if (arr[left] < arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      right++;
    }
  }

  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }
  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }

  for (let i = low; i <= high; i++) {
    arr[i] = temp[i - low];
  }
}

const arr = [5, 2, 1, 4, 6];
const n = arr.length - 1;
mergeSort(arr, 0, n);
console.log(arr);
