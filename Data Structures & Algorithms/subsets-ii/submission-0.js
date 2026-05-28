class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
          const result = [];
    nums.sort((a, b) => a - b); // bắt buộc sort để skip duplicate hoạt động

    function backtrack(start, current) {
        result.push([...current]); // push trước — mọi node đều là kết quả hợp lệ

        for (let i = start; i < nums.length; i++) {
            // y hệt Combination Sum II
            if (i > start && nums[i] === nums[i - 1]) continue;

            current.push(nums[i]);
            backtrack(i + 1, current);
            current.pop();
        }
    }

    backtrack(0, []);
    return result;
    }
}
