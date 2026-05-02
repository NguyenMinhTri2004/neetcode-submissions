class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
       let tmpMap = {};
       for(let i = 0 ; i < nums.length; i++){
         tmpMap[nums[i]] = i;
       }

       for(let i = 0; i < nums.length ; i++){
         const diff = target - nums[i];
         if(tmpMap[diff] != undefined && i != tmpMap[diff]){
            return [i, tmpMap[diff]];
         }
       }

       return [];
    }
}
