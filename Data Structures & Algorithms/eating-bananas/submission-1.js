class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
      let capacity = 1;
      while(true){
        let totalTime = 0;
        for(let i = 0 ; i < piles.length ; i++){
            totalTime = totalTime + Math.ceil(piles[i]/capacity);
        }

        if(totalTime <= h){
            return capacity
        }

        capacity++;
      }
    }
}
