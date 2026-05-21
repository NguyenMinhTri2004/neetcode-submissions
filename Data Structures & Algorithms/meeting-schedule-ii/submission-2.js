/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
       let startMeeting = intervals.map((item) => item.start).sort((a,b) => a - b);
       let endMeeting = intervals.map((item) => item.end).sort((a,b) => a - b);

       let res = 0;
       let end = 0;
       let start = 0;
       let count = 0;



       while(start < intervals.length) {
         if(startMeeting[start] < endMeeting[end]){
            count++;
            start++
         }else{
            count--;
            end++
         }

         res = Math.max(res, count)
       }

       return res
    }
}
