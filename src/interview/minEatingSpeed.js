/**
 * leetcode-875
 */

// 暴力超时 O(n^2);
var minEatingSpeed = function(piles, h) {
    // 吃香蕉的速度为 speed,  speed 最少为 1， 最大为 max(piles);
    let maxSpeed = Math.max(...piles);
    for (let speed = 1; speed < maxSpeed; speed++) {
        if (canFinish(piles, speed, h)) {
            return speed;
        }
    }

  

    function canFinish(piles, speed, h){
        let time = 0;
        for (let pile of piles) {
            time += countEatTime(pile, speed);
        }
        return time <= h;
    }



    // 以 speed 的 速度 吃 n 个香蕉的要多久
    function countEatTime(n, speed) {
        return Math.floor(n / speed) + ((n % speed > 0) ? 1 : 0);
    }

    return maxSpeed;
};

// 二分查找解法，O(n^logN);
var minEatingSpeed2 = function(piles, h) {
    // 吃香蕉的速度为 speed,  speed 最少为 1， 最大为 max(piles);
    let maxSpeed = 0;
    for (let n of piles) {
        maxSpeed = Math.max(maxSpeed, n);
    }
    
    let left = 1, right = maxSpeed + 1;
    while(left < right) {
        let mid = left + Math.floor((right - left) / 2);
        if (canFinish(piles, mid, h)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    
    function canFinish(piles, speed, h){
        let time = 0;
        for (let pile of piles) {
            time += countEatTime(pile, speed);
        }
        return time <= h;
    }



    // 以 speed 的 速度 吃 n 个香蕉的要多久
    function countEatTime(n, speed) {
        return Math.floor(n / speed) + ((n % speed > 0) ? 1 : 0);
    }

    return left;



};