/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    // dp[i][j] 表示从[i, j]点 到右下角 [m-1, n-1] 点最短路径
    let dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
    // 从右下角 往 [0, 0]走, 初始的 dp[m-1][n-1] 的 值就是自己
    dp[m-1][n-1] = grid[m-1][n-1];

    for (let i = m-1; i >= 0; i--) {
        for (let j= n-1; j >= 0; j--) {
            // 跳过右下角
            if (i == (m-1) && j == (n-1)) {
                continue;
            } 
            // 最后一行，只能往左走
            else if (i == (m-1)) {
                dp[i][j] = grid[i][j] + dp[i][j+1];
            }
            // 最后一列, 只能往上走
            else if (j == (n-1)) {
                dp[i][j] = grid[i][j] + dp[i+1][j];
            } else {
                dp[i][j] = grid[i][j] + Math.min(dp[i+1][j], dp[i][j+1]);
            }
        }
    }

    return dp[0][0];
};

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum2 = function(grid) {
    let m = grid.length;
    let n = grid[0].length;

    for (let i = m-1; i >= 0; i--) {
        for (let j= n-1; j >= 0; j--) {
            // 跳过右下角
            if (i == (m-1) && j == (n-1)) {
                continue;
            } 
            // 最后一行，只能往左走
            else if (i == (m-1)) {
                grid[i][j] = grid[i][j] + grid[i][j+1];
            }
            // 最后一列, 只能往上走
            else if (j == (n-1)) {
                grid[i][j] = grid[i][j] + grid[i+1][j];
            } else {
                grid[i][j] = grid[i][j] + Math.min(grid[i+1][j], grid[i][j+1]);
            }
        }
    }

    return grid[0][0];
};