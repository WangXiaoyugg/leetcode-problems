
import UnionFind from "../data-structure/UnionFind.js";
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solve = function(board) {
    // 与 4个 角相连的 O 不会被替换，其余的O要被替换
    if (board.length == 0) return;
    let m = board.length, n = board[0].length;
    // 把第一行和最后一行关联的 O 变成 #
    for (let i = 0; i < m; i++) {
        dfs(board, i, 0);
        dfs(board, i, n-1);
    }
    // 把第一列和最后一列关联的 O 变成 #
    for (let j = 0; j < n; j++) {
        dfs(board, 0,  j);
        dfs(board, m-1, j)
    }

    // 剩下的 O 都会应该替换掉
    for (let i = 1; i < m - 1; i++) {
        for (let j = 1; j < n-1; j++) {
            if (board[i][j] == 'O') {
                board[i][j] = 'X';
            }
        }
    }

    // 把所有的 # 恢复成 O
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] == '#') {
                board[i][j] = 'O';
            }
        }
    }
    
    function dfs(board, i, j) {
        // M * N 矩阵
        let m = board.length, n = board[0].length;

        // 判断是否走到边界
        if (i < 0 || i >= m || j < 0 || j >= n) {
            return;
        }
        if (board[i][j] != 'O') {
            return;
        }

        // 把当前的 O 替换成 #
        board[i][j] = '#';
        // 向四个边探索
        dfs(board, i, j-1); // 左
        dfs(board, i, j+1); // 右
        dfs(board, i-1, j); // 上
        dfs(board, i+1, j); // 下
    }

};

// 使用union-find 解法
const solve2 = function(board) {
    if (board.length == 0) return;
    let m = board.length;
    let n = board[0].length;

    // 给 dummy 留一个额外的配置
    const uf = new UnionFind(m * n + 1);
    let dummy = m * n;
    // 将第一列 和 最后一列的 0 与 dummy 进行连通
    // 二维坐标[i,j] 映射到 一维的坐标 i * n  + j;
    for (let i = 0; i < m; i++) {
        if (board[i][0] == 'O') {
            uf.union(i * n, dummy);
        }
        if (board[i][n-1] == 'O') {
            uf.union(i * n + n - 1, dummy);
        }
    }

    // 将首行和末行的 O 与 dummy 连通
    for (let j = 0; j < n; j++) {
        if (board[0][j] == 'O') {
            uf.union(j, dummy);
        }
        if (board[m-1][j] == 'O') {
            uf.union( n * (m-1) + j, dummy);
        }
    }

    // 方向数组 d 是搜索上下左右四个方向的常用手法
    let d = [
        [1, 0],
        [0, 1],
        [0, -1],
        [-1, 0],
    ]
    
    for (let i = 1;  i < m - 1; i++) {
        for (let j = 1; j < n - 1; j++) {
            if (board[i][j] == 'O') {
                // 将与 O 上下左右相连的O 联通
                for (let k = 0; k < 4; k++) {
                    let x = i + d[k][0];
                    let y = j + d[k][1];
                    if (board[x][y] == 'O') {
                        uf.union(x * n + y, i * n  + j);
                    }
                }
            }
        }
    }

    // 现在 没有被 X 包围的 O 都和 dummy 连通
    // 所有不和 dummy 连通的 O 都要被替换
    for (let i = 1; i < m - 1; i++) {
        for (let j = 1; j < n-1; j++) {
            if (!uf.connected(dummy, i * n + j)) {
                board[i][j] = 'X';
            }
        }
    }


}

const board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]];
solve2(board);
console.log(board);
const board2 = [['X']];
solve2(board2);
console.log(board2);