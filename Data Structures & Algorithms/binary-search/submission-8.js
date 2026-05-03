class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    binary_search(left, right, nums, target){
        if(left > right) return -1;
        let mid = left + Math.floor((right - left)/2);
        if(nums[mid] > target){
           return this.binary_search(left, mid - 1, nums, target);
        }else if (nums[mid] < target){
            return this.binary_search(mid + 1, right, nums, target);
        }else {
            return mid;
        }
    }
    search(nums, target) {
      return this.binary_search(0, nums.length - 1, nums, target);
    }

}
