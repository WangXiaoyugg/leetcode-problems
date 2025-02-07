/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if (n <= 1) return n;
    // dp[i] 表示数字 i 的 Fib 数
    let dp = new Array(n+1);
    dp[0] = 0;
    dp[1] = 1;
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];
};