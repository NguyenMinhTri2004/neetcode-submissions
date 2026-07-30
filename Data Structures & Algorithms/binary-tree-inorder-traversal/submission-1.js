/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    inorderTraversal(root) {
        const res = [];

        const travel = (node) => {
            if(!node) return
            travel(node.left)
            res.push(node.val)
            travel(node.right)
        }

        travel(root)
        return res
    }
}
