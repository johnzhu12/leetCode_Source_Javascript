var subsets = function (nums) {
    const res = [];

    const dfs = (path, index) => {
        res.push([...path]);
        for (let i = index; i < nums.length; i++) {
            path.push(nums[i]);
            dfs(path, i + 1);
            path.pop();
        }
    };

    dfs([], 0);
    return res;
};


var src = [1, 2, 3]

var res = subsets(src)

console.log(res)