/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // dp[i] 表示 nums[0...i]的子数组之和
    let n = nums.length;
    let dp = new Array(n).fill(-Infinity);
    dp[0] = nums[0];
    for (let i = 1; i < n; i++) {
        dp[i] = Math.max(dp[i-1] + nums[i], nums[i]);
    }
    let maxSubArraySum = Math.max(...dp);
    return maxSubArraySum;
};