/**
 * leetcode-292
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
    // 如果是 4 的 倍数，一定会输
    // 否则，可以把对方控制在 4的倍数，必胜
    return n  % 4 != 0;
};