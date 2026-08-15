class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        const n = nums.length
        const memo = Array.from({length: n}, () => Array(n + 2).fill(-1))
        return this.dfs(nums, 0 , -1, memo)
    }

    dfs(nums, i , j, memo){
        if(i === nums.length){
            return 0;
        }

        if(memo[i][j + 1] !== -1) return memo[i][j+1]

        let res = this.dfs(nums, i + 1, j, memo)

        if(j === -1 || nums[j] < nums[i]){
            res = Math.max(res, 1 + this.dfs(nums, i + 1, i, memo))
        }


        memo[i][j+1] = res;

        return res

    }
}
