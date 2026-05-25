class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {
        let current = 0;
        let fastest = 0;
        let res = 0;

        for(let i = 0 ; i < nums.length - 1; i++){
            for(let j = i ; j <= current ; j++){
                fastest = Math.max(fastest, j + nums[j])
            }


            if(current === i){
                res++;
                current = fastest;
            }
        }

        return res;
    }
}
