function smallestWindow(str) {
  let uniqueChar = new Set(str);
  let requiredLength = uniqueChar.size;

  let start = 0;
  let minLength = Infinity;
  let charCount = {};
  let matched = 0

  for (let end = 0; end < str.length; end++) {
    let pointedChar = str[end]
    charCount[pointedChar] = (charCount[pointedChar] || 0) + 1;

    if (charCount[pointedChar] === 1) {
      matched++;
    }

    while (matched === requiredLength) {
      minLength = Math.min(minLength, end - start + 1);

      let char = str[start];
      charCount[char]--;

      if (charCount[char] === 0) {
        matched--;
      }
      start++;
    }
  }
  return minLength;
}

const str = "aabcbcdbca"

console.log(smallestWindow(str))