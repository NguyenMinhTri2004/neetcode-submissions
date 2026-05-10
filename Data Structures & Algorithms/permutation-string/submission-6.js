class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
       let count1 = {}
       for(let i = 0 ; i < s1.length ; i++){
          count1[s1[i]] = (count1[s1[i]] || 0) + 1;
       }

       let need = Object.keys(count1).length;
       for(let i = 0 ; i < s2.length ; i++){
         let curr = 0;
         let count2 = {}
          for(let j = i ; j < s2.length ; j++){
            count2[s2[j]] = (count2[s2[j]] || 0) + 1;

            if((count1[s2[j]] || 0) < count2[s2[j]]){
                break;
            }

            if((count1[s2[j]] || 0) === count2[s2[j]]){
                curr++;
            }

            if(curr === need){
                return true;
            }

          }
       }

       return false
    }
}
