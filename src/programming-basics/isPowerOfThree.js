/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if (n <= 0) return false;
    
    while(n % 3 === 0) {
        n = n / 3;
    }
    return n == 1;
};

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree2 = function(n) {
    // 在32位有符号的整数范围内，最大的3的幂为 3 ^ 19 次方
    const BIG = Math.pow(3, 19);
    if (n <= 0) return false;
    // 判断 n 是否位 BIG 的约数即可
    return BIG % n == 0;
};