class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        for(let i = 0; i < prices.length ; i++){
            for(let j = i + 1 ; j < prices.length; j++){
                let tmpProfit = prices[j] - prices[i];
                if(tmpProfit > maxProfit) {
                    maxProfit = tmpProfit
                }
            }
        }

        return maxProfit;
    }
}
