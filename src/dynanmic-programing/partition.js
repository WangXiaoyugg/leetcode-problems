/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    if (s.length == 0) return s; 
    let len = s.length;
    let dp = new Array(len).fill(0).map(() => new Array(len).fill(false));
    // dp[i][i] 表示单个字符一定是回文的
    for (let i = 0; i < len; i++) {
        dp[i][i] = true;
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
        }
    }

    let res = [];
    
    function dfs(s, start, path) {
        // 回溯的条件
        if (start === s.length) {
            res.push(path.slice());
            return;
        }
        for (let i = start; i < s.length; i++) {
            // 表示每一个区间 [start, i];
            // 不是回文剪支
            if (!dp[start][i]) continue;
            path.push(s.slice(start, i+1));
            dfs(s, i+1, path, res);
            path.pop();
        }
    }

    dfs(s, 0, []);
    
    return res;
};