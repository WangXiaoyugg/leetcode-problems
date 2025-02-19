/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function(words, left, right) {
    let ans = 0;
    let vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    for(let i = left; i <= right; i++) {
        const word = words[i];
        if (vowels.has(word[0]) && vowels.has(word[word.length-1])) {
            ans++;
        }
    }
    return ans;
};