// buy and sell stock to get max profit

const arr = [4, 1, 3, 5, 6, 9];
function getMaxProfit(arr) {
  buy = arr[0];
  profit = 0;

  for (let i = 1; i < arr.length; i++) {
    cost = arr[i] - buy;
    profit = Math.max(profit, cost);
    buy = Math.min(buy, arr[i]);
  }

  return profit;
}

console.log(getMaxProfit(arr));
