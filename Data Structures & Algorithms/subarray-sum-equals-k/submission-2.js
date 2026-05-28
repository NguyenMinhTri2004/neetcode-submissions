class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
       const map = new Map();
       map.set(0, 1);

       let count = 0;
       let prefixSum = 0;

       for(let i = 0; i < nums.length; i++){
          prefixSum = prefixSum + nums[i];

          if(map.has(prefixSum - k)){
             count = count + map.get(prefixSum - k);
          }


          map.set(prefixSum, (map.get(prefixSum) || 0) + 1)
       }

       return count
    }
}
