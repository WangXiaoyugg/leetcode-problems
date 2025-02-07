/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    // 暴力解
    let len = s.length;
    if (len == 0) return 0;

    // 穷举所有的子串
    let count = 0;
    
    // dp[i][j] 表示子数组区间 [i, j] 对应的子串是否是回文
    let dp = new Array(len).fill(0).map(() => new Array(len).fill(false));
    // dp[i][i] 表示单个字符一定是回文的
    for (let i = 0; i < len; i++) {
        dp[i][i] = true;
        count++;
    }

    // 从列遍历计算 [i, j] 区间是否是回文子串
    for (let j = 1; j < len; j++) {
        for (let i = 0; i < j; i++) {
            let isCharEqual = s[i] === s[j];
            // 如果 [i, j] 区间只有两个字符，s[i] == s[j] 就是回文
            if ((j - i) == 1) {
                dp[i][j] = isCharEqual;
            } else {
                // [i, j] 区间大于两个字符
                if (!isCharEqual) {
                    // 如果 左右两边不相等，一定不是回文
                    dp[i][j] = false;
                } else {
                    // 如果 左右两边不相等，是否回文取决于 [i+1, j-1] 这个区间的子串是否回文
                    dp[i][j] = dp[i+1][j-1];
                }
            }

            if(dp[i][j]) {
                count++;
            }
        }
    }

    return count;
};

