class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
       let left = 0;
       let res = Infinity;
       let sum = 0;
       let right = 0

       while(right < nums.length){
          sum = sum + nums[right];

          while(sum >= target){
             res = Math.min(res, right - left + 1);
             sum = sum - nums[left]
             left++
          }

          right++
       }

       return res === Infinity ? 0 : res
    }
}
