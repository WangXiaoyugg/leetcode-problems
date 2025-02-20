/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * 递归
 * @param {_Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    
    const res = [];

    function _postorder(root) {
        if (root == null) {
            return;
        }

        root.children.forEach(child => {
            _postorder(child);
        })
        res.push(root.val);
    }

    _postorder(root);

    return res;
};

/**
 * 迭代
 * @param {_Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    const res = [];
    if (root == null) return res;
    
    let stack = [root];

    while(stack.length > 0) {
        let curr = stack.pop();
        res.unshift(curr.val);
        let children = curr.children;
        for (let child of children) {
            stack.push(child);
        }
    }

    return res;
};
