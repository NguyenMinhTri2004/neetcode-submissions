class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {
      let left = 0;
      let right = 0;
      let max = 0
      let res = 0

      while(right < nums.length - 1){
        for(let i = left; i <= right; i++){
            max = Math.max(max, i + nums[i])
        }

        left = right + 1;
        right = max;
        res++
      }

      return res;
    }
}
