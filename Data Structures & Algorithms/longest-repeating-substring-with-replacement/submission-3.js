class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
   characterReplacement(s, k) {
      let count = {}
      let left = 0
      let maxF = 0
      let res = 0

      for(let right = 0 ; right < s.length; right++){
         count[s[right]] = (count[s[right]] || 0) + 1;
         maxF = Math.max(maxF, count[s[right]])

         if(right - left + 1 - maxF > k){
            count[s[left]] =  count[s[left]] - 1 
            left++
         }

         res = Math.max(res, right - left + 1);
      }

      return res
    }
}
