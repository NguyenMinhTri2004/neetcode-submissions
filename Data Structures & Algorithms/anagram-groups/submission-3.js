class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
      let res = {}
      for(let i = 0 ; i < strs.length ; i++){
         const sorted = strs[i].split("").sort().join();
         if(!res[sorted]){
            res[sorted] = []
         }

         res[sorted].push(strs[i])
      }


      return Object.values(res)
    }
}
