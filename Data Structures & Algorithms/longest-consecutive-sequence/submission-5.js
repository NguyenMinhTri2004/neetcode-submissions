class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums);
        let res = 0;
        for(let i = 0; i < nums.length; i++){
            if(!set.has(nums[i] - 1)){
                let length = 1
                while(set.has(nums[i] + length)){
                    length++;
                }

                res = Math.max(res, length);
            }
        }

        return res

    }
}
