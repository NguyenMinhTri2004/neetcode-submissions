class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) {
       for(let i = 0; i < gas.length ; i++){
          let capacity = gas[i] - cost[i]
          if(capacity < 0){
            continue
          }

          let j = (i + 1) % gas.length

          while(j !== i){
             capacity = capacity + (gas[j] - cost[j])
             if(capacity < 0){
                break
             }

             j = (j+1) % gas.length

          }

          if(j === i) return i;

       }

       return -1
    }
}
