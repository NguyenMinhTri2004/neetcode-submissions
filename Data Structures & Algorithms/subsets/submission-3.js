class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let res = [[]];
        for(let num of nums){
            let size = res.length
            for(let i = 0 ; i < size ; i++){
                let subArray = res[i].slice()
                subArray.push(num);
                res.push(subArray)
            }
        }


        return res;
    }
}
