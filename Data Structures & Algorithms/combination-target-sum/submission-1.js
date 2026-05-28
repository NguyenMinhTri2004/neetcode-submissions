class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const res = [];
        nums.sort((a,b) => a - b);



        function backTracking(start, current, remaining) {
            if(remaining == 0){
                res.push([...current]);
                return
            }

            for(let i = start; i < nums.length; i++){
                if(nums[i] > remaining) break;

                current.push(nums[i]);
                backTracking(i, current, remaining - nums[i])
                current.pop()
            }
        }

        backTracking(0, [] , target)
        return res
    }
}
