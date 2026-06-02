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
        let startList = intervals.map(item => item.start).sort((a,b) => a - b);
        let endList = intervals.map(item => item.end).sort((a,b) => a - b);
        let room = 0;
        let res = 0
        let start = 0;
        let end = 0

        while(start < intervals.length){
            if(startList[start] < endList[end]){
                start++
                room++
            }else{
                end++
                room--
            }   

            res = Math.max(res, room);
        }


        return res;


    }
}
