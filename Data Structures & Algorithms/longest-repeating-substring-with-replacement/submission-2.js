class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
   characterReplacement(s, k) {
        let count = {};
        let maxF = 0;
        let res = 0;
        let i = 0;

        for(let j = 0 ; j < s.length ; j++){
            count[s[j]] = (count[s[j]] || 0) + 1;
            maxF = Math.max(maxF, count[s[j]])

            if(j - i + 1 - maxF > k){
                count[s[i]] = count[s[i]] - 1;
                i++
            }

            res = Math.max(res, j - i + 1);
        }

        return res
    }
}
