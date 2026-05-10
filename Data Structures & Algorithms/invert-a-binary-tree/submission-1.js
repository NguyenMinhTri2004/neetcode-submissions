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
     * @return {TreeNode}
     */
    invertTree(root) {
        if(!root){
            return null;
        }

        let stackTree = [root];

        while(stackTree.length > 0){
            const node = stackTree.pop();
            [node.left, node.right] = [node.right, node.left];
            if(node.left){
                stackTree.push(node.left);
            }

            if(node.right){
                stackTree.push(node.right);
            }
        }

        return root;
    }
}
