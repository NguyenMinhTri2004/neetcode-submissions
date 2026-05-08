class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
   characterReplacement(s, k) {
    let count = new Map();
    let maxf = 0;
    let res = 0;
    let i = 0;

    for (let j = 0; j < s.length; j++) {
        // Mở rộng window về bên phải
        count.set(s[j], (count.get(s[j]) || 0) + 1);
        maxf = Math.max(maxf, count.get(s[j]));

        // Window không hợp lệ → dịch i sang phải 1 bước
        if (j - i + 1 - maxf > k) {
            count.set(s[i], count.get(s[i]) - 1);
            i++;
        }

        // Window luôn hợp lệ ở đây
        res = Math.max(res, j - i + 1);
    }

    return res;
}
}
