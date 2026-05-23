class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
       if(intervals.length === 1){
        return intervals
       }
       let res = [];
       intervals.sort((a,b) => a[0] - b[0]);
       let startLast = intervals[0][0];
       let endLast = intervals[0][1];


       for(let i = 1 ; i < intervals.length ; i++){
         if(intervals[i][0] <= endLast){
            endLast = Math.max(endLast, intervals[i][1])
         }else{
            res.push([startLast, endLast]); 
            startLast = intervals[i][0]; 
            endLast = intervals[i][1];
         }
       }
          res.push([startLast, endLast]);
          return res;
     }

}
