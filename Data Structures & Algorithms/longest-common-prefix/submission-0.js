class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
       if (strs.length === 0) return "";

    let prefix = strs[0]; // lấy từ đầu tiên làm prefix ban đầu

    for (let i = 1; i < strs.length; i++) {
        // Thu hẹp prefix cho đến khi strs[i] bắt đầu bằng prefix
        while (!strs[i].startsWith(prefix)) {
            prefix = prefix.slice(0, -1); // bỏ ký tự cuối
            if (prefix === "") return "";
        }
    }

    return prefix;
    }
}
