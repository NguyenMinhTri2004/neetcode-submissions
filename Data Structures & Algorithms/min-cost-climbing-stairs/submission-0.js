class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        const n = cost.length;

        let prev2 = 0;  // dp[i-2]
        let prev1 = 0;  // dp[i-1]

        for (let i = 2; i <= n; i++) {
            let curr = Math.min(prev1 + cost[i - 1], prev2 + cost[i - 2]);
            prev2 = prev1;
            prev1 = curr;
        }

        return prev1;
    }
}
