class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        return matrix.find(item => item.includes(target)) ? true : false
    }
}
