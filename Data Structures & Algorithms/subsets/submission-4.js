class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let res = [[]];

        for(let num of nums) {
            let size = res.length
            for(let i = 0; i < size ; i++){
                let sub = res[i].slice();
                sub.push(num);
                res.push(sub)
            }
        }

        return res
    }
}
