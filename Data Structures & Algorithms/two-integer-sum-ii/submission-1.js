class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let mapCheck = new Map();

        for(let i = 0 ; i <= numbers.length - 1 ; i++){
            let diff = target - numbers[i];

            if(mapCheck.has(diff)){
                return [mapCheck.get(diff) + 1, i + 1]
            }

            mapCheck.set(numbers[i], i);
        }
    }

}
