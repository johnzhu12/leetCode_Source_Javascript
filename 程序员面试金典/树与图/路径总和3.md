# [路径总和 III](https://leetcode-cn.com/problems/path-sum-iii/)

## 思路

前缀和，这个知识点,dfs 回溯理解下

https://leetcode-cn.com/problems/path-sum-iii/solution/tong-su-yi-dong-de-qian-zhui-he-jie-fa-b-t8hl/

```js
var pathSum = function (root, targetSum) {
  let map = new Map()
  let ans = 0
  dfs(root, 0)
  return ans
  /**
   *
   * @param {*} root
   * @param {*} presum 前缀和
   * @returns
   */
  function dfs(root, presum) {
    if (!root) {
      return 0
    }
    map.set(presum, (map.get(presum) || 0) + 1)
    let target = presum + root.val
    //   console.log(target-targetSum)
    ans += map.get(target - targetSum) || 0
    //   console.log(map)
    // 继续找
    dfs(root.left, target)
    dfs(root.right, target)
    // 回溯 撤销
    map.set(presum, map.get(presum) - 1)
  }
}
```
