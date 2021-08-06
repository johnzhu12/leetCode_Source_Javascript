var getMinimumDifference = function (root) {
    let minDif = Number.MAX_SAFE_INTEGER,
        pre = -1

    const update = (x) => {
        if (pre == -1) {
            pre = x.val;
        } else {
            minDif = Math.min(minDif, x.val - pre);
            pre = x.val;
        }


    }

    const dfs = (o) => {
        if (!o) {
            return
        }
        dfs(o.left)
        update(o.val)
        dfs(o.right)
    }

    dfs(root)
    return minDif
}
// var getMinimumDifference = function (root) {
//     let ans = Number.MAX_SAFE_INTEGER, pre = -1;
//     const dfs = (root) => {
//         if (root === null) {
//             return;
//         }
//         dfs(root.left);
//         if (pre == -1) {
//             pre = root.val;
//         } else {
//             ans = Math.min(ans, root.val - pre);
//             pre = root.val;
//         }
//         dfs(root.right);
//     }
//     dfs(root);
//     return ans;
// };



//   [1,0,48,null,null,12,49]

// var tree = {
//     val: 1,
//     left: {
//         val: 0,
//         left: null,
//         right: null
//     },
//     right: {
//         val: 48,
//         left: {
//             val: 12,
//             left: null,
//             right: null
//         },
//         right: {
//             val: 49,
//             left: null,
//             right: null
//         }
//     }
// }

var tree = {
    val: 1,
    left: null,
    right: null
}

var res = getMinimumDifference(tree)
console.log(res)