/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    // dp[i] 表示nums[0..i]的结尾的最长递增子序列的长度
    let n = nums.length;
    if (n == 1) {
        return n;
    }
    let dp = new Array(n).fill(1);
    let maxLength = 1;
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                // 说明能构成一个递增的子序列
                dp[i] = Math.max(dp[j] + 1, dp[i]);
                // 更新maxLength;
                maxLength = Math.max(maxLength, dp[i]);
            }
        }
    }
    return maxLength;
};