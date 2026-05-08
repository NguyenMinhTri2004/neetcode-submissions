class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
       let left = 0;
       let right = s.length - 1;

       while(left < right){
            while(!this.alPhaNum(s[left]) && left < right){
                    left++
            }

            while(!this.alPhaNum(s[right]) && right > left){
                    right--
            }


            if(s[left].toLowerCase() !== s[right].toLowerCase()){
                return false;
            }

            left++;
            right--;

       }

       return true;

    }



   alPhaNum(c){
     return(
        (c >= 'a' && c <= 'z') ||
        (c >= 'A' && c <= 'Z') ||
        (c >= '0' && c <= '9')
     )
   }
}
