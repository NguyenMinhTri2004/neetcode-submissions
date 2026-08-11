class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
      const cache = new Int32Array(n).fill(-1)
      const dequy = (i) => {
        if(i >= n) return i == n
        if(cache[i] != -1) return cache[i]
        return (cache[i] = dequy(i+1) + dequy(i+2))
      }

      return dequy(0)
    }
}
