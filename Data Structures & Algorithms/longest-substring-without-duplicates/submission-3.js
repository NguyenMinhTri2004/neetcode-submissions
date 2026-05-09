class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
       let left = 0;
       let longgest = 0;
       let seen = new Set();

       for(let r = 0 ; r < s.length ; r++){
         while(seen.has(s[r])){
            seen.delete(s[left])
            left++;
         }

         seen.add(s[r])

         longgest = Math.max(longgest, r - left + 1);

       }

       return longgest;
    }
}
