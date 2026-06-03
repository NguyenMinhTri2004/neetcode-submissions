class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubarraySumCircular(nums) {
        let totalSum = 0;
        let curSumMax = 0;
        let maxSum = -Infinity;

        let curSumMin = 0;
        let minSum = Infinity;

        for(let num of nums){
           curSumMax = Math.max(num, curSumMax + num);
           maxSum = Math.max(maxSum, curSumMax);


           curSumMin = Math.min(num, curSumMin + num);
           minSum = Math.min(minSum, curSumMin)


           totalSum = totalSum + num
        }


        if(maxSum < 0) return maxSum;

        return Math.max(maxSum, totalSum - minSum)
    }
}
