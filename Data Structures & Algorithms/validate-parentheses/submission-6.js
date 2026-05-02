class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
       let stack = [];
       const check = {
         ")": "(",
         "]": "[",
         "}":"{",
       };

        for(let sub of s ){
            if(check[sub]){
                if(check[sub] == stack[stack.length - 1]){
                    stack.pop();
                }else{
                    return false;
                }
            }else{
                stack.push(sub)
            }
        }

        return stack.length == 0;
       
    }
}
