class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
      let seen = new Set()
      while(!seen.has(n)){
         seen.add(n);
         n = this.sumOfSquares(n);

         if(n === 1){
            return true
         }
      }


      return false
    }



    sumOfSquares(n) {
       let output = 0
       while(n > 0){
         let digit = n % 10;
         digit = digit * digit;
         output = output + digit;
         n = Math.floor(n/10)
       }

       return output;
    }
}
