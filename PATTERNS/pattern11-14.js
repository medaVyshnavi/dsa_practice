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
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      console.log();
    }
  }
}
