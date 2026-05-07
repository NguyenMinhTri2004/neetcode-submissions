class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
      let resNumber = 0;
      const store = new Set(nums)
      
      for(let i = 0 ; i <= nums.length; i++){
         let longgest = 0;
         let current = nums[i];
            while(store.has(current)){
                longgest++;
                current++;
            }

          resNumber = Math.max(longgest, resNumber);
        }

      return resNumber;
    }
}
