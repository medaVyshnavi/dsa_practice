//pusedo code
// 1. shift n-1 disks from A to B using C;
// 2. move the last disk from A to C;     =====> base condition
// 3. move n-1 disks from B to C using A;

function towerOfHanoi(n, fromRod, toRod, usingRod) {
  if (n === 1) {
    return console.log(`Move 1 disk from ${fromRod} to ${toRod}`);
  }
  towerOfHanoi(n - 1, fromRod, usingRod, toRod);
  console.log(`move disk ${n - 1}  from ${fromRod} to ${toRod}`);
  towerOfHanoi(n - 1, usingRod, toRod, fromRod);
}

towerOfHanoi(1, "A", "C", "B");
