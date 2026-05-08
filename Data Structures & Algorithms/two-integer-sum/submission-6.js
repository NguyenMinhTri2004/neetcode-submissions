class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
       let map = {};
       for(let i = 0; i < nums.length; i++){
          map[nums[i]] = i
       }
       for(let i = 0 ; i <= nums.length - 1 ; i++){
         const diff = target - nums[i];
         if(map[diff] !== undefined && map[diff] !== i) {
            return [i, map[diff]]
         }

         map[diff] = i
       }

       return [];
    }
}
