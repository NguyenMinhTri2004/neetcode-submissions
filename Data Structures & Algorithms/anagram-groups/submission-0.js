class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let result = {};
        for(let i = 0 ; i < strs.length ; i++){
          let sortedStr = strs[i].split("").sort().join("");
          if(result[sortedStr] == null){
            result[sortedStr] = [];
          }
          
          result[sortedStr].push(strs[i]);
        }
        return Object.values(result);
    }
}
