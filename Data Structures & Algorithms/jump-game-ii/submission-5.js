class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {
       let left = 0;
       let right = 0;
       let res = 0

       while(right < nums.length - 1){
          let longest = 0

          for(let i = left; i <= right; i++){
             longest = Math.max(longest, nums[i] + i)
          }

          left = right + 1
          right = longest
          res++
       }

       return res;
    }
}
