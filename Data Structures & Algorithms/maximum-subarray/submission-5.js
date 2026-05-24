class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
      let res = nums[0];
      let sum = 0
      for(let i = 0 ; i < nums.length; i++){
        if(sum < 0){
            sum = 0 
        }
        sum = sum + nums[i];
        res = Math.max(res, sum);
      }

      return res;
    }
}
