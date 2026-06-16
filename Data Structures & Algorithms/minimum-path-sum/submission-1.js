class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    minPathSum(grid) {
        const ROWS = grid.length,
            COLS = grid[0].length;
        const dp = Array.from({ length: ROWS + 1 }, () =>
            Array(COLS + 1).fill(Infinity),
        );
        dp[ROWS - 1][COLS] = 0;

        for (let r = ROWS - 1; r >= 0; r--) {
            for (let c = COLS - 1; c >= 0; c--) {
                dp[r][c] = grid[r][c] + Math.min(dp[r + 1][c], dp[r][c + 1]);
            }
        }

        return dp[0][0];
    }
}