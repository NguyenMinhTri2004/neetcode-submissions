class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let res = []
        for(let i = 0; i <= nums.length - 1; i++){
            let product = 1;
            for(let j = 0 ; j <= nums.length - 1; j++){
                if(i !== j){
                    product = product * nums[j];
                }
            }

            res.push(product);
        }

        return res;
    }
}
