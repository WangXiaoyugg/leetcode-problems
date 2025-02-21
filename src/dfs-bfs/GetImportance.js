/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * BFS
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function(employees, id) {
    const map = new Map();
    for (let employee of employees) {
        map.set(employee.id, employee);
    }
    let res = 0;    
    const queue = [];
    queue.push(id);
    while(queue.length > 0) {
        const employee = map.get(queue.shift());
        if (employee) {
            res += employee.importance;
            for (let subordinateId of employee.subordinates) {
                queue.push(subordinateId)
            }
        }
      
    }
    
    return res;
};



/**
 * dfs 后序
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function(employees, id) {
    const map = new Map();
    for (let employee of employees) {
        map.set(employee.id, employee);
    }
    
    // 后序遍历
    function dfs(id) {
        let employee = map.get(id);
        if (!employee) return 0;
        let total = 0;

        for (let subordinateId of employee.subordinates) {
            total += dfs(subordinateId);
        }

        return total + employee.importance
    }
    
    
    return dfs(id);
};



/**
 * dfs 前序
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function(employees, id) {
    const map = new Map();
    for (let employee of employees) {
        map.set(employee.id, employee);
    }
    let res = 0;
    
    function dfs(id) {
        let employee = map.get(id);
        if (!employee) return;
        res += employee.importance;
        for (let subordinateId of employee.subordinates) {
            dfs(subordinateId);
        }
    }
    dfs(id);

    return res;
};