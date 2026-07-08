class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let res  = 0;
        let max = nums[0]

        for(let num of nums){
            if(res < 0){
                res = 0
            }

            res = res + num;
            max = Math.max(max, res)
        }


        return max;

    }
}
