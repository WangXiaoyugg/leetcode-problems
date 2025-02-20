/**
 * @param {number} n
 * @return {number[]}
 */
var evenOddBit = function(n) {
    // 用 i = 0 表示当前奇数位， i = 1 表示当前位是偶数位， 并记录对应奇偶数的结果
    const ans = [0, 0];
    // 当 n > 0 时 如果当前位是1， 则增加对应的奇偶数数位的计数， 然后反转 i 并将 n 做右移运算
    let i = 0;
    while(n > 0) {
        ans[i] += (n & 1);
        // 右移一位
        n >>= 1;
        i ^= 1;
    }

    return ans;
};