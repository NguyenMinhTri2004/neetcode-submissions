class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let res = []

        function backTracking(current, nums, pick) {
            if(current.length === nums.length){
                res.push([...current]);
                return;
            }

            for(let i = 0; i < nums.length; i++){
                if(!pick[i]){
                    current.push(nums[i]);
                    pick[i] = true;
                    backTracking(current, nums, pick);
                    current.pop();
                    pick[i] = false
                }
            }
        }

        backTracking([], nums, new Array(nums.length).fill(false))

        return res
    }
}
