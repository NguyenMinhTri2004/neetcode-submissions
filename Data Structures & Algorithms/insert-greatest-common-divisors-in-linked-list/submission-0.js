/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    insertGreatestCommonDivisors(head) {
        if(!head) return null

        const gcd = (a,b) => {
            return b == 0 ? a : gcd(b, a % b);
        }

        let curr = head

        while(curr.next){
            const n1 = curr.val
            const n2 = curr.next.val;
            const gcdValue = gcd(n1, n2)
            const newNode = new ListNode(gcdValue, curr.next)
            curr.next = newNode
            curr = newNode.next
        }

        return head
    }
}
