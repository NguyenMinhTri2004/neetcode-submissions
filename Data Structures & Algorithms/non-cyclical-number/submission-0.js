class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        const seen = new Set();

        while(n !== 1){
            if(seen.has(n)) return false

            seen.add(n);

            let sum = 0;
            while(n/10){
                const digit = n % 10;
                sum = sum + digit * digit;
                n = Math.floor(n / 10);
            }

            n = sum;
        }

        return true
    }
}
