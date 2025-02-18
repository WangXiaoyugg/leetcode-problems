/**
 * 暴力统计
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let count = 0;
    const n = nums.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if (nums[i] == nums[j]) {
                count++;
            }
        }
    }
    return count;
};


/**
 * 组合统计
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs2 = function(nums) {
    // 组合计数，用哈希表统计每个数在序列中出现的次数 v
    // 从 v 个 位置 中 取 2 个数的组合 为  C(v, 2) = v * (v - 1) / 2;
    // 统计每个数字出现的次数 v 的 组合相加即可
    const map = new Map();
    for (let n of nums) {
        map.set(n, (map.get(n) || 0) + 1);
    }
    let ans = 0;
    
    for (let [k, v] of map) {
        ans += (v * (v - 1)) / 2;
    }

    return ans;

};
