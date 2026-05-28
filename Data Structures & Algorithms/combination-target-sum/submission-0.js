class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(candidates, target) {
         const result = [];
    candidates.sort((a, b) => a - b); // sắp xếp để tối ưu

    function backtrack(start, current, remaining) {
        if (remaining === 0) {
            result.push([...current]); // tìm được 1 tổ hợp hợp lệ
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            if (candidates[i] > remaining) break; // pruning: bỏ qua nếu vượt quá

            current.push(candidates[i]);
            backtrack(i, current, remaining - candidates[i]); // i (không phải i+1) vì dùng lại được
            current.pop(); // backtrack
        }
    }

    backtrack(0, [], target);
    return result;
    }
}
