class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        let res = [];
        candidates.sort((a,b) => a - b);

        function backTracking(start, current, remaining){
            if(remaining === 0){
                res.push([...current])
                return 
            }
            for(let i = start; i < candidates.length; i++){
                if(candidates[i] > remaining) break
                if(i > start && candidates[i] === candidates[i - 1]){
                    continue;
                }
                current.push(candidates[i]);
                backTracking(i + 1, current, remaining - candidates[i])
                current.pop()
            }
        }

        backTracking(0,[], target)
        return res;
    }
}
