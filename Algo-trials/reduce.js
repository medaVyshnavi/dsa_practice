function test(operations) {
  operations.reduce((acc, curr) => console.log(curr[1], curr), 0);
}

test(["--X", "X++", "X++"]);
