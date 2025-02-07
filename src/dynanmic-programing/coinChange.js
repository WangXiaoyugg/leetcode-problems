/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    if (amount === 0) return 0;
    // dp[i] 表示凑齐总金额为 i 时候需要的最小硬币数
    let dp = new Array(amount + 1);
    // 因为是比较的最小值，使用Infinity 不可能复制为一个最大值
    dp.fill(Infinity);
    dp[0] = 0;
    // 计算金额[1...amount]的区间的每种金额的最少硬币数
    for (let target = 1; target <= amount; target++) {
        // 使用 coins 中的每种硬币尝试兑换
        for (let coin of coins) {
            // 当前的金额 target 大于等于 coin 硬币面额，说明可以兑换
            if (target >= coin) {
                // 计算当前 target 金额 的 最少硬币数, 状态转移方程
                dp[target] = Math.min(dp[target], dp[target - coin] + 1);
            }
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount];

};