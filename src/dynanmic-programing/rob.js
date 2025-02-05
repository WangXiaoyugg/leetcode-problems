/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    // dp[i] 表示抢劫 nums[0...i] 的所能获得的最大收益
    // dp[i] = Math.max(dp[i-1], dp[i-2] + nums[i]);
    const n = nums.length;
    if (n == 1) {
        return nums[0];
    }
    if (n == 2) {
        return Math.max(nums[0], nums[1]);
    }
    const dp = new Array(n+1);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    
    for (let i = 2; i < n; i++) {
        dp[i] = Math.max(dp[i-1], dp[i-2] + nums[i]);
    }
    return dp[n-1];
};