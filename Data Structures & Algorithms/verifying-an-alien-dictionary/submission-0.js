class Solution {
    /**
     * @param {string[]} words
     * @param {string} order
     * @return {boolean}
     */
    isAlienSorted(words, order) {
        let orderIndex = new Array(26).fill(0);
        for (let i = 0; i < order.length; i++) {
            orderIndex[order.charCodeAt(i) - 97] = i;
        }

        const compare = (w1, w2) => {
            for (let i = 0; i < Math.min(w1.length, w2.length); i++) {
                if (w1[i] !== w2[i]) {
                    return (
                        orderIndex[w1.charCodeAt(i) - 97] -
                        orderIndex[w2.charCodeAt(i) - 97]
                    );
                }
            }
            return w1.length - w2.length;
        };

        let sortedWords = [...words].sort(compare);
        return words.join() === sortedWords.join();
    }
}