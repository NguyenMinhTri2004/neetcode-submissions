class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        const res = [];

        // Dùng arrow function để `this` kế thừa từ class
        const backTracking = (start, current) => {
            // Lỗi 1 đã sửa: so sánh `start` với s.length
            if (start === s.length) {
                res.push([...current]);
                return;
            }

            for (let i = start; i < s.length; i++) {
                // Lỗi 2 đã sửa: dùng arrow function nên this hoạt động đúng
                if (this.isPalin(s, start, i)) {
                    // Lỗi 3 đã sửa: dùng `i` thay vì `end`
                    current.push(s.slice(start, i + 1));
                    backTracking(i + 1, current);
                    current.pop();
                }
            }
        };

        backTracking(0, []);
        return res;
    }

    isPalin(s, left, right) {
        while (left < right) {
            if (s[left] !== s[right]) return false;
            left++;
            right--;
        }
        return true;
    }
}