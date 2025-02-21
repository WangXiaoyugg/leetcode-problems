/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * 递归版本
 * @param {_Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const res = [];
    dfs(root, 0, res);

    function dfs(node, level, res) {
        if (node == null) return;

        // 处理当前遍历的节点
        if (res.length === level) {
            let temp = [];
            temp.push(node.val);
            res.push(temp);
        } else {
            res[level].push(node.val);
        }

        for (let child of node.children) {
            dfs(child, level + 1, res);
        }
    }

    return res;
};



/**
 * 迭代版本
 * @param {_Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const res = [];
    if (root === null) return res;
    const queue = [root];
    while(queue.length > 0) {
        const temp = [];
        let size = queue.length;
        while(size > 0) {
            let curr = queue.shift();
            temp.push(curr.val);
            for (let child of curr.children) {
                queue.push(child);
            }
            size--;
        }
        res.push(temp);
    }

    return res;
};