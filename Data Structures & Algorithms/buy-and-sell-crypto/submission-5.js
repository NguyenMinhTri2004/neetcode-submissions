class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
      let maxP = 0;
      let minB = prices[0];
      for(let i = 0; i < prices.length ; i++){
        maxP = Math.max(maxP, prices[i] - minB);
        minB = Math.min(minB, prices[i]);
      }
      return maxP;
    }
}
