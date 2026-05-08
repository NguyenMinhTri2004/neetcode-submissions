class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
      let res = {};
      for(let i = 0 ; i < strs.length; i++){
         let sortedItem = strs[i].split("").sort().join("")
         if(!res[sortedItem]){
               res[sortedItem] = [];
         }

            res[sortedItem].push(strs[i])
      }

      return Object.values(res);
    }
}
