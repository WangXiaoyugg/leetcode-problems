/**
 * leetcode - 319
 */

// 暴力，超时
var bulbSwitch = function(n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    let bubbleStatus = new Array(n + 1).fill(false);
    // 灯泡状态
    // n 个灯泡
    for (let i = 1; i <= n; i++) {
        // 有 n 轮操作
        let j = i;
        while (j <= n) {            
            bubbleStatus[j] = !bubbleStatus[j];
            j += i;
        }
        
    }

    let count = 0;
    for (let status of bubbleStatus) {
        if (status) {
            count++;
        }
    }
    return count;
};


/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch2 = function(n) {
    // 转换为 n 的平方根
    if (n == 0) return 0;
    if (n == 1) return 1;

    return  Math.floor(Math.sqrt(n));
};