class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
      let res = [];
      let startNew = newInterval[0];
      let endNew = newInterval[1];
      for(let i = 0; i < intervals.length; i++){
        if(newInterval == null || startNew > intervals[i][1]){
            res.push(intervals[i])
        }else if(endNew < intervals[i][0]) {
            res.push([startNew, endNew]);
            res.push(intervals[i])
            newInterval = null
        }else{
            startNew = Math.min(startNew, intervals[i][0]);
            endNew = Math.max(endNew, intervals[i][1])
        }
      }

      if(newInterval !== null){
        res.push([startNew, endNew])
      }
        return res

      }
    }
