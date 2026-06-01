class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    reverse(x) {
         const INT_MAX =  2147483647;
         const INT_MIN = -2147483648;
         
         let result = 0;

         while(x !== 0){
            const digit = x % 10;
            x = Math.trunc(x / 10);
            result = result * 10 + digit;
         }

           if (result > INT_MAX || result < INT_MIN) return 0;
             return result;
    }
}
