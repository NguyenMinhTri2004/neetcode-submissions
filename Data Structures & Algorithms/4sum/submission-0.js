class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    fourSum(nums, target) {
        nums.sort((a, b) => a - b);
        const count = new Map();
        for (const num of nums) {
            count.set(num, (count.get(num) || 0) + 1);
        }
        const res = [];

        for (let i = 0; i < nums.length; i++) {
            count.set(nums[i], count.get(nums[i]) - 1);
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            for (let j = i + 1; j < nums.length; j++) {
                count.set(nums[j], count.get(nums[j]) - 1);
                if (j > i + 1 && nums[j] === nums[j - 1]) continue;

                for (let k = j + 1; k < nums.length; k++) {
                    count.set(nums[k], count.get(nums[k]) - 1);
                    if (k > j + 1 && nums[k] === nums[k - 1]) continue;

                    const fourth = target - (nums[i] + nums[j] + nums[k]);
                    if ((count.get(fourth) || 0) > 0) {
                        res.push([nums[i], nums[j], nums[k], fourth]);
                    }
                }

                for (let k = j + 1; k < nums.length; k++) {
                    count.set(nums[k], count.get(nums[k]) + 1);
                }
            }

            for (let j = i + 1; j < nums.length; j++) {
                count.set(nums[j], count.get(nums[j]) + 1);
            }
        }

        return res;
    }
}