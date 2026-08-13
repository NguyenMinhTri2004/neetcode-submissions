class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
       let resIndex = 0;
       let resLength = 0;
       const n = s.length

       const dp = Array.from({length: n}, () => Array(n).fill(false))

       for(let i = n - 1; i >=0; i--){
          for(let j = i; j < n; j++){
            if(s[i] === s[j] && (j - i <= 2 || dp[i + 1][j - 1])){
                dp[i][j] = true;
                if(resLength < j - i + 1){
                    resIndex = i;
                    resLength = j - i + 1
                }
            }
          }
       }

       return s.slice(resIndex, resIndex + resLength)
    }
}
