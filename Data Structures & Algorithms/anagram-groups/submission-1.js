class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
       let res = {};
       for(let item of strs){
          let sortItem = item.split("").sort().join("");
          if(res[sortItem] == null){
             res[sortItem] = [];
          }

          res[sortItem].push(item);
        
       }

       return Object.values(res);
    }
}
