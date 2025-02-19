/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    // 两次遍历，分割点 i ，从左往右移动，每次减少右边的子串，
    // 如果右边的子串的字符是 0， 左子串结果 + 1, 右子串结果不变，总结果 + 1;
    // 如果右边的子串的子串是 1， 左子串结果不变, 右子串结果-1，总结果 - 1;
    let score = 0;
    let n = s.length;
    if (s[0] == '0') {
        score++;
    }
    // 最左侧的分割点是1， 先计算分割点 1的 得分
    for (let i = 1; i < n; i++) {
        if (s[i] == '1') {
            score++;
        }
    }
    // 再从左到右依次遍历计算每个分个点的得分
    let ans = score;
    for (let i = 1; i < n - 1; i++) {
        if (s[i] == '0') {
            score++;
        } else {
            score--;
        }
        ans = Math.max(ans, score);
    }
    return ans;
};
