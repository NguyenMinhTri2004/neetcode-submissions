class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0;
        let right = nums.length;
        while(left < right) {
            let mid = left + Math.floor((right - left) / 2 );
            if(nums[mid] > target){
                right = mid
            }else if (nums[mid] < target){
                left = mid + 1
            }else{
                return mid;
            }
        }

        return -1;
    }
}
