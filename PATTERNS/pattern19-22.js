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

function pattern_1(n) {
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

function pattern_2(n) {
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

function pattern_3(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      console.log("*");
    }
    for (let j = 0; j < 2 * i + 2; j++) {
      console.log(" ");
    }
    for (let j = 0; j < n - i - 1; j++) {
      console.log("*");
    }
    console.log("\n");
  }
}

function pattern19(n) {
  pattern_2(n);
  pattern_1(n);
}
pattern19(5);

//*        *
//**      **
//***    ***
//****  ****
//**********
//****  ****
//***    ***
//**      **
//*        *
function pattern20(n) {
  pattern_1(n);
  pattern_3(n);
}

pattern20(5);

// 0123
//0****
//1*  *
//2*  *
//3****

// filling only boundaries.
// i==0 , i==n-1, j==0,j==n-1

function pattern21(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i == 0 || i == n - 1 || j == 0 || j == n - 1) {
        console.log("*");
      } else {
        console.log(" ");
      }
    }
    console.log("\n");
  }
}
pattern21(4);

// 4444444
// 4333334
// 4322234
// 4321234
// 4322234
// 4333334
// 4444444

function pattern22(n) {
  for (let i = 0; i < 2 * n - 1; i++) {
    for (let j = 0; j < 2 * n - 1; j++) {
      let top = i;
      let left = j;
      let right = 2 * n - 1 - 1 - j;
      let bottom = 2 * n - 1 - 1 - i;
      console.log(n - Math.min(Math.min(left, right), Math.min(top, bottom)));
    }
    console.log("\n");
  }
}
pattern22(4);
