class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
       let Visit =  new Set();

       while(!Visit.has(n)){
            Visit.add(n)
            n = this.sumOfSquare(n)
            if(n === 1){
                return true
            }
       }

       return false
    }


    sumOfSquare(n){
        let res = 0

        while(n > 0){
            let digit = n % 10;
            digit = digit * digit;
            res = res + digit;
            n = Math.floor(n / 10)
        }

        return res
    }
}
