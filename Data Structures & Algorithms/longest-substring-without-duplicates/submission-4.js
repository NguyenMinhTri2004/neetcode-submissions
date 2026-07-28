class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
       let res = 0
       let left = 0
       let right = 0
       let set = new Set()

       while(right < s.length){
          while(set.has(s[right])){
            set.delete(s[left])
            left++
          }

          set.add(s[right])
          res = Math.max(res, right - left + 1)
          right++
       }

       return res
    }
}
