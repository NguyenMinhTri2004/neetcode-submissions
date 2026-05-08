class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longest = 0;
        let set = new Set(nums);

        for(let i = 0; i < nums.length ; i++){
            if(!set.has(nums[i] - 1)){
                let length = 0;
                while(set.has(nums[i] + length)){
                    length++
                }

                longest = Math.max(longest, length)
            }
        }

        return longest;
    }
}
