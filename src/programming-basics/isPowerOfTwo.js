/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    // 负数和 0 都不是 2 的幂
    if (n <= 0) return false;
    // 2 的幂的二进制表示中只有一个 1
    // n & (n - 1) 可以消除 n 二进制表示中最后一个 1
    // 如 n = 8， 二进制表示为 (1000)， n-1 = 7, 二进制表示为 (0111), n & (n - 1) = 0;  
    return (n & (n - 1)) == 0;   
};

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo2 = function(n) {
    // 在题目给定的32位有符号整数的范围内, 最大的2的幂为2^30;
    const BIG = 1 << 30;
    // n  是否为 BIG 的约数即可
    return n > 0 && BIG % n == 0;
};

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo3 = function(n) {
    // n & -n 得到最低位的 1, 即 n
    return n > 0 && (n & -n) == n;
};
