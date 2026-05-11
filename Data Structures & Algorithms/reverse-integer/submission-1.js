class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    reverse(x) {
        const INT_MAX = 2 ** 31 - 1;
        const INT_MIN =  -(2 ** 31);

        const sign = x < 0 ? -1 : 1;

        const asbStr = Math.abs(x).toString();

        const revertString = parseInt(asbStr.split("").reverse().join(""), 10);

        const result = sign * revertString;


        if(result > INT_MAX || result < INT_MIN){
            return 0
        }


        return result
    }
}
