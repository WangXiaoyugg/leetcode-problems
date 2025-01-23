/**
 * leetcode-372
 * 你的任务是计算 ab 对 1337 取模，a 是一个正整数，b 是一个非常大的正整数且会以数组形式给出。
 */
const base = 1337;

// 时间复杂度是 O(n)
const superPow = (a, b) => {
    // 递归的 base case
    if (b.length == 0) {
        return 1;
    }

    //  取出最后一个数
    let last = b.pop();
    //  将原问题化简，缩小规模递归求解
    let part1 = myPow(a, last);
    let part2 = myPow(superPow(a, b), 10);
    // 合并结果
    return (part1 * part2) % base;
}

// (a * b) % k = (a % k) * (b % k) % k
function myPow(a, k) {

    // 对因子求模
    a = a % base;
    let res = 1;
    for (let i = 0; i < k; i++) {
        res = res * a;
        // 对乘法结果求模
        res = res % base;
    }
    return res;
}

// 快速幂算法
// k 为奇数： a * a^(k-1)
// k 为偶数： (a^(k/2))^2
function myPow2(a, k) {
    
    if (k == 0) {
        return 1;
    }
    a %= base;

    if (k % 2 == 1) {
        return a * myPow2(a, k-1) % base;
    } else {
        const sub = myPow2(a, k / 2);
        return (sub * sub) % base;
    }

}