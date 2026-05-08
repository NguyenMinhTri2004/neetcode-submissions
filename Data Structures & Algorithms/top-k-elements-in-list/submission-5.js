class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
       let count = {}
       for(let i = 0; i < nums.length ; i++){
         count[nums[i]] = (count[nums[i]] || 0) + 1;
       }

       const arr = Object.entries(count).map(([num, freq]) => [
         parseInt(num),
         freq
       ]);

       arr.sort((a,b) => b[1] - a[1])

       return arr.slice(0,k).map((pair) => pair[0]);
    }
}
