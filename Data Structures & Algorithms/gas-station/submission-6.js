class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) {
        let left = 0;
        let right = gas.length - 1;
        let tank = gas[right] - cost[right];
        
        while(left < right) {
            if(tank < 0){
                right--
                tank = tank + gas[right] - cost[right]
            }else{
                tank = tank + gas[left] - cost[left]
                left++
            }
            
        } 

        return tank >=0 ? left : -1;
    }
}
