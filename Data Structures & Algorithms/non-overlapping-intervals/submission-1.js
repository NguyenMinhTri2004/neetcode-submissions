class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
      let res = 0;
      intervals.sort((a,b) => a[0] - b[0])
      let endInit = intervals[0][1];
      for(let i = 1 ; i < intervals.length; i++){
         if(endInit > intervals[i][0]){
            endInit = Math.min(endInit, intervals[i][1])
            res++
         }else{
            endInit = intervals[i][1]
         }
      }

      return res;
    }
}
