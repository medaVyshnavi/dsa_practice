//   *
//  ***
// *****
//*******

function pattern7(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      console.log(" ");
    }
    for (let j = 0; j < 2 * i + 1; j++) {
      console.log("*");
    }
    for (let j = 0; j < n - i; j++) {
      console.log(" ");
    }
    console.log("\n");
  }
}
pattern7(4);

//*********
// *******
//  *****
//   ***
//    *

function pattern8(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      console.log(" ");
    }
    for (let j = 0; j < 2 * n - (2 * i + 1); j++) {
      console.log("*");
    }
    for (let j = 0; j < i; j++) {
      console.log(" ");
    }
    console.log("\n");
  }
}

pattern8(4);

//    *
//   ***
//  *****
// *******
//*********
//*********
// *******
//  *****
//   ***
//    *
function pattern9() {
  pattern7(4);
  pattern8(4);
}

pattern9();

//*
//**
//***
//****
//*****
//****
//***
//**
//*

function pattern10(n) {
  for (i = 0; i <= 2 * n - 1; i++) {}
}

pattern10(3);
