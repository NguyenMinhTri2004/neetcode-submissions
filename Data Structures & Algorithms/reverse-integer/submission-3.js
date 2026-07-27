class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    reverse(x) {
       const sign = Math.sign(x)

       let revertInt = parseInt(x.toString().split("").reverse().join(""))

       if (revertInt < -(2 ** 31) || revertInt > 2 ** 31 - 1) {
            return 0;
        }

       return revertInt * sign
    }
}
