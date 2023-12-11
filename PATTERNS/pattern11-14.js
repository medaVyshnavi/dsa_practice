//1
//0 1
//1 0 1
//0 1 0 1
//1 0 1 0 1

function pattern11(n) {
  for (let i = 0; i < n; i++) {
    let start = i % 2 == 0 ? 1 : 0;
    for (let j = 0; j <= i; j++) {
      console.log(start);
      start = 1 - start;
    }
    console.log("\n");
  }
}

pattern11(5);

//1      1
//12    21
//123  321
//12344321

function pattern12(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      console.log(j);
    }
    for (let j = 1; j <= 2 * n - 2 * i; j++) {
      console.log(" ");
    }
    for (let j = i; j > 0; j--) {
      console.log(j);
    }
    console.log("\n");
  }
}

pattern12(4);

//1
//2 3
//4 5 6
//7 8 9 10
//11 12 13 14 15

function pattern13(n) {
  let number = 1;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      console.log(number);
      number++;
    }
    console.log("\n");
  }
}

pattern13(5);

// A
// A B
// A B C
// A B C D
// A B C D E

function pattern14(n) {
  for (let i = 0; i < n; i++) {
    let char = 1;
    for (let j = 0; j <= i; j++) {
      console.log(String.fromCharCode(char + 64));
      char++;
    }
    console.log("\n");
  }
}
pattern14(5);
