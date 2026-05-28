class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const result = [];

    function backtrack(current, open, close) {
        if (current.length === 2 * n) {
            result.push(current);
            return;
        }

        // Thêm '(' nếu chưa dùng hết open
        if (open < n) {
            backtrack(current + '(', open + 1, close);
        }

        // Thêm ')' nếu số close < open (còn ngoặc chưa đóng)
        if (close < open) {
            backtrack(current + ')', open, close + 1);
        }
    }

    backtrack('', 0, 0);
    return result;
    }
}
