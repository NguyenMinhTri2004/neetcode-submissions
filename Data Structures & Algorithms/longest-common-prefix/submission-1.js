class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
         if (strs.length === 0) return "";
        let prefix = strs[0]

        for(let sub of strs){
            while(!sub.startsWith(prefix)){
                prefix = prefix.slice(0,-1)
                if(prefix == "") return ""
            }
        }

        return prefix;
    }
}
