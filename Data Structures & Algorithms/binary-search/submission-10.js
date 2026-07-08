class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        return this.binarySearch(0, nums.length - 1, nums, target)
    }

    binarySearch(l, r, nums, target){
        if(l > r) return -1

        let mid = l + Math.floor((r - l) /2 )

        if(nums[mid] === target) return mid;

        return nums[mid] < target ?
        this.binarySearch(mid + 1, r, nums, target)
        : this.binarySearch(l, mid - 1, nums, target); 
    }

}
