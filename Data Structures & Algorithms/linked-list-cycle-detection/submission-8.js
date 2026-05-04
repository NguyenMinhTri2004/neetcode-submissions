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
     * @return {boolean}
     */
    hasCycle(head) {
       let pP = head;
       let sP = head;
       while(pP != null && pP.next != null){
         pP = pP.next.next
         sP = sP.next;

         if(pP == sP){
            return true;
         }
       }

       return false;
    }
}
