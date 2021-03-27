

function decare(nums) {
    let len = nums.length
    let res = []
    let track = []
    function backtrace(nums, row) {
        if (row == len && track.length == len) {
            res.push([...track])
            return
        }
        let n = nums[row].length //当前列的长度
        for (var i = 0; i < n; i++) { //遍历列
            var a = nums[row][i] //当前元素
            track.push(a)
            backtrace(nums, row + 1)
            track.pop()
        }
        return
    }
    backtrace(nums, 0)
    return res;
}

// function decare(nums) {
//     let res = nums.reduce((last, el) => {
//         const arr = [];
//         // last：上次运算结果
//         // el：数组中的当前元素
//         last.forEach(e1 => {
//             el.forEach(e2 => {
//                 // arr.push(e1 + "_" + e2)
//                 var t = [].concat(Array.isArray(e1) ? e1 : [e1]);
//                 t.push(e2);
//                 arr.push(t);
//             })
//         })
//         return arr
//     });
//     // res = res.map(item => item.split("_"))
//     return res
// }

var src = [[0, 1], [2, 3, 4], [5, 6], [8, 9, 14]]

var res = decare(src)
console.log(res)