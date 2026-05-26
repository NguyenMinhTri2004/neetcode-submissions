class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) {
        if (hand.length % groupSize !== 0) {
            return false;
        }


        let frequencyMap = {};
        for(let i = 0 ; i < hand.length ; i++){
            frequencyMap[hand[i]] = (frequencyMap[hand[i]] || 0) + 1;
        }


        hand.sort((a,b) => a - b);

        for(let i = 0 ; i < hand.length; i++){
            if(frequencyMap[hand[i]] > 0){
                for(let j = hand[i] ; j < hand[i] + groupSize; j++){
                    if(!frequencyMap[j]){
                        return false
                    }

                    frequencyMap[j]--
                }
            }
        }

        return true;
    }
}
