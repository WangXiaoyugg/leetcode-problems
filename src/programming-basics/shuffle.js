/**
 * 辅助空间
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    const xArr = nums.slice(0, n);
    const yArr = nums.slice(n);
    const res = [];
    for (let i = 0; i < n; i++) {
        res.push(xArr[i], yArr[i]);
    } 
    return res;
};


/**
 * 一次遍历
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle2 = function(nums, n) {
    // 一次遍历
    const ans = new Array(2 * n).fill(0);
    // nums[i] 填充到 ans[2 * i]
    // nums[i+n] 填充到 ans[2*i + 1];
    for (let i = 0; i < n; i++) {
        ans[2 * i] = nums[i]
        ans[2 * i + 1] = nums[i+n];
    }

    return ans;
};
