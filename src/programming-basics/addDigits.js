/**
 * 模拟
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    while(num >= 10) {
        let sum = 0;
        while(num > 0) {
            // 计算一个整数的各位相加的做法是，每次计算当前整数除以10的余数得到最低位数，
            sum += (num % 10);
            // 将当前整数除以10
            num = Math.floor(num / 10);
        }
        num = sum;
    }

    return num;
};


/**
 * @param {number} num
 * @return {number}
 */
var addDigits2 = function(num) {
    if (num < 10) return num;
    if (num % 9 == 0) {
        return 9;
    }
    return num % 9;
};
/**
 * @param {number} num
 * @return {number}
 */
var addDigits3 = function(num) {
    return (num - 1) % 9 + 1;
 };