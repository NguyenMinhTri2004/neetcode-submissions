class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
      if(s.length !== t.length){
        return false;
      }

      let countArray = new Array(26).fill(0);
      for(let i = 0 ; i < s.length ; i++){
        countArray[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        countArray[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
      }

      return countArray.every((val) => val == 0);
    }

}
