// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

function pattern1(num) {
  let str = "*";
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      console.log("*");
    }
    console.log("\n");
  }
}
pattern1(5);
pattern1(4);
pattern1(2);

// *
// * *
// * * *
// * * * *
// * * * * *

function pattern2(num) {
  for (let i = 0; i < num; i++) {
    for (let j = 0; j <= i; j++) {
      console.log("* ");
    }
    console.log("\n");
  }
}
pattern2(4);

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

function pattern3(num) {
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
      console.log(j);
    }
    console.log("\n");
  }
}
pattern3(5);

// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

function pattern4(num) {
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
      console.log(i);
    }
    console.log("\n");
  }
}
pattern4(3);

// * * * * *
// * * * *
// * * *
// * *
// *

function pattern5(num) {
  for (let i = 0; i < num; i++) {
    for (let j = num - i; j > 0; j--) {
      console.log("* ");
    }
    console.log("\n");
  }
}
pattern5(3);

// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

function pattern6(num) {
  for (let i = num; i > 0; i--) {
    for (let j = 1; j <= i; j++) {
      console.log(j);
    }
    console.log("\n");
  }
}
pattern6(5);
