class Solution {
    /**
     * @param {number[]} bills
     * @return {boolean}
     */
    lemonadeChange(bills) {
            let five = 0;   // Số tờ $5 đang có
    let ten = 0;    // Số tờ $10 đang có

    for (let bill of bills) {
        if (bill === 5) {
            // Khách trả đúng $5 → không cần thối, cất tờ $5
            five++;

        } else if (bill === 10) {
            // Khách trả $10 → phải thối $5
            if (five === 0) return false; // Không có $5 để thối → thất bại
            five--;  // Dùng 1 tờ $5 để thối
            ten++;   // Cất tờ $10 vừa nhận

        } else {
            // Khách trả $20 → phải thối $15
            // Ưu tiên 1: thối $10 + $5 (tiết kiệm tờ $5 hơn)
            if (ten > 0 && five > 0) {
                ten--;
                five--;
            }
            // Ưu tiên 2: thối 3 tờ $5 (nếu không có $10)
            else if (five >= 3) {
                five -= 3;
            }
            // Không thể thối → thất bại
            else {
                return false;
            }
        }
    }

    return true; // Phục vụ hết khách thành công

    }
}
