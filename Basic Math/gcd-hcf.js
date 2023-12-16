//brute force
function gcd(n1, n2) {
  let gcd = 1;
  for (let i = 0; i <= Math.min(n1, n2); i++) {
    if (n1 % i == 0 && n2 % i == 0) {
      gcd = i;
    }
  }
  console.log(gcd);
}
gcd(10, 20);
gcd(15, 2);
gcd(5, 11);

// optimised solution
// euclidean algo
/// gcd of 2 numbers n1,n2  ~ gcd(n1-n2,n2) where n1>n2

function euclidean(n1, n2) {
  while (n1 > 0 && n2 > 0) {
    if (n1 > n2) {
      n1 = n1 % n2;
    } else {
      n2 = n2 % n1;
    }
  }
  console.log(n1 == 0 ? n2 : n1);
}
euclidean(50, 12);

// recursion
// function euclidean(n1, n2) {
//   while (n1 > 0 && n2 > 0) {
//     if (n1 > n2) {
//       euclidean(n1 % n2, n2);
//     } else {
//       euclidean(n2 % n1, n1);
//     }
//   }
//   console.log(n1 == 0 ? n2 : n1);
// }
// euclidean(5, 10);
