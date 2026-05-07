class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
       let resNumber = 0;
       const store = new Set(nums);

       for(let i = 0 ; i <= nums.length - 1 ; i++){
            let curr = nums[i];
            let longgest = 0;
            while(store.has(curr)){
                longgest++;
                curr++;
            }

          resNumber = Math.max(resNumber, longgest);  
       }

       return resNumber;
    }
}
