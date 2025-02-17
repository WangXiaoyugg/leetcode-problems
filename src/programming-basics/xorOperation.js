/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    let res = 0;
    for (let i = 0; i < n; i++) {
        num = start + 2 * i;
        res ^= num;
    }
    return res;
};


/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation2 = function(n, start) {
    // 利用异或性质
    const a = Math.floor( start / 2);
    // 最低位
    const b = n & start & 1; // 都为奇数才为 1;
 
    return (xorN(a + n - 1) ^ xorN(a - 1)) * 2 + b;
 };
 
 function xorN(n) {
     switch (n % 4) {
         case 0 : return n;
         case 1 : return 1;
         case 2 : return n + 1;
         case 3 : return 0;
     }
 }