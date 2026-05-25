class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {
       let current = 0;
       let res = 0;
       let capacity = 0;

       for(let i = 0; i < nums.length - 1; i++){
         for(let j = i ; j <= current; j++){
            capacity = Math.max(capacity, j + nums[j])
         }

         if(i === current){
            current = capacity;
            res++
         }
       }


       return res;
    }
}
