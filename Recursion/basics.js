function recursion() {
  let count = 0;
  if (count == 3) {
    return;
  }
  count++;
  recursion();
}

recursion();
