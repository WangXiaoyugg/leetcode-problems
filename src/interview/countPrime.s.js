/**
 * 高效寻找素数
 * 素数定义： 如果一个数只能被自身和1整除
 * leetcode-204 
 */

/**
 * 版本1 超时， O(n^2) 
 * @param {*} n 整数n
 * @returns 
 */
const countPrimes = (n) => {
    let count = 0;
    for (let i = 2; i < n; i++) {
        if (isPrime(i)) {
            count++;
        }
    }

    function isPrime(n) {
        for (let i = 2; i < n; i++) {
            if (n % i == 0) {
                return false;
            }
        }
        return true;
    }

    return count;
}


// 版本2 超时： 时间复杂度为 O(n * sqrt(n)), 
const countPrimes2 = (n) => {
    let count = 0;
    for (let i = 2; i < n; i++) {
        if (isPrime(i)) {
            count++;
        }
    }

    function isPrime(n) {
        //  反转临界点 sqrt(n); [0, sqrt(n)] 向下取整sqrt(n)
        for (let i = 2; i * i <= n; i++) {
            if (n % i == 0) {
                return false;
            }
        }
        return true;
    }

    return count;
}

// 埃氏筛法， 时间复杂度 O(n * logN), 最终答案
const countPrimes3 = (n) => {
    let count = 0;
    let isPrime = new Array(n).fill(true);
    for (let i = 2; i * i < n; i++) {
        if (isPrime[i]) {
            // 把当期 数字 i 的倍数全部设置为false;
            for (let j = i * i; j < n; j += i) {
                isPrime[j] = false;
            }
        }
    }

    for (let i = 2; i < n; i++) {
        if (isPrime[i]) {
            count++
        }
    }

    return count;
}