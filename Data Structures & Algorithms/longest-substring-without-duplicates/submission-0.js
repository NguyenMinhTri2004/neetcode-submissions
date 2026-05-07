class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
       let left = 0;
       let res = 0;
       let set = new Set();

       for(let r = 0 ; r < s.length ; r++){
          while(set.has(s[r])) {
             set.delete(s[left])
             left++;
          }

          set.add(s[r]);

          res = Math.max(res, r - left + 1);

       }

       return res;
       
    }
}
