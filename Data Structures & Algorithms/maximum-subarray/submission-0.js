class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let res = nums[0]
        for(let i = 0; i < nums.length; i++){
            let curr = 0;
            for(let j = i; j < nums.length ; j++){
                curr = curr + nums[j]
                res = Math.max(res, curr);
            }
        }

        return res;
    }
}
