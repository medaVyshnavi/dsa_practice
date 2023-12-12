//**********
//****  ****
//***    ***
//**      **
//*        *
//*        *
//**      **
//***    ***
//****  ****
//**********

function pattern19_1(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      console.log("*");
    }
    for (let j = 0; j < 2 * n - 2 * i - 2; j++) {
      console.log(" ");
    }
    for (let j = 0; j <= i; j++) {
      console.log("*");
    }
    console.log("\n");
  }
}

function pattern19_2(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      console.log("*");
    }
    for (let j = 0; j < 2 * i; j++) {
      console.log(" ");
    }
    for (let j = 0; j < n - i; j++) {
      console.log("*");
    }
    console.log("\n");
  }
}

function pattern19(n) {
  pattern19_2(n);
  pattern19_1(n);
}
pattern19(5);
