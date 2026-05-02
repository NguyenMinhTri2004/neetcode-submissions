class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
      let mapToCheck = new Map();
      for(let i = 0 ; i < nums.length ; i++){
        const diff = target - nums[i];
        if(mapToCheck.has(diff)){
            return [mapToCheck.get(diff), i];
        }
        
        mapToCheck.set(nums[i], i);
      }
    }
}
