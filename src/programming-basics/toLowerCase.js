/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    return s.toLowerCase();
};


/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase2 = function(s) {
    const ans = [];
    for (let c of s) {
        // [A...Z] 的 对应的 ASCII 码是 [65, 90] 的区间 
        // [a...z] 的 对应的 ASCII 码是 [97, 122]的区间
        if (c.charCodeAt() >= 65 && c.charCodeAt() <= 90) {
            c = String.fromCharCode(c.charCodeAt() + 32);
        }
        ans.push(c);
    }
    return ans.join('');
};

/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase3 = function(s) {
    const ans = [];
    for (let c of s) {
        // [A...Z] 的 对应的 ASCII 码是 [65, 90] 的区间 
        if (c.charCodeAt() >= 65 && c.charCodeAt() <= 90) {
            // 用按位或运算做替代加法
            c = String.fromCharCode(c.charCodeAt() | 32);
        }
        ans.push(c);
    }
    return ans.join('');
};