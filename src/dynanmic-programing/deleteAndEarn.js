/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
    // 统计相同数字之和，因为选择 x 点数，就不能所有选择 x + 1, x-1 的点数, 即前一个不能选，即状态转移，sums[i] = Math.max(sums[i-1], sums[i-2] + sums[i]);
    let maxVal = Math.max(...nums);
    let sums = new Array(maxVal + 1).fill(0);
    for (let val of nums) {
        sums[val] = sums[val] + val;
    }

    const sumsLength = sums.length;
    for (let i = 2; i < sumsLength; i++) {
        sums[i] = Math.max(sums[i-1], sums[i-2] + sums[i]);
    }
    return sums[sumsLength - 1];
};