class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
       let left = 0;
       let right = 0;
       let res = 0
       let seen = new Set()

       while(right < s.length){
         while(seen.has(s[right])){
            seen.delete(s[left])
            left++
         }
         res = Math.max(res, right - left + 1);
         seen.add(s[right])
         right++
       }

       return res;
    }
}
