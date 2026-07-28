class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
      let res = 0;
      let maxFre = 0;
      let left = 0;
      let right = 0
      let count = {}

      while(right < s.length){
         count[s[right]] = (count[s[right]] || 0) + 1
         maxFre = Math.max(maxFre, count[s[right]])

         if(right - left + 1 - k> maxFre){
            count[s[left]]--
            left++
         }

         res = Math.max(res, right - left + 1)
         right++;
      }

      return res;
    }
}
