// function canCompleteCircuit(gas, cost) {
//     var n = gas.length;
//     // 相当于图像中的坐标点和最低点
//     var sum = 0, minSum = Infinity;
//     var start = 0;
//     for (var i = 0; i < n; i++) {
//         sum += gas[i] - cost[i];
//         if (sum < minSum) {
//             // 经过第 i 个站点后，使 sum 到达新低
//             // 所以站点 i + 1 就是最低点（起点）
//             start = i + 1;
//             minSum = sum;
//         }
//     }
//     if (sum < 0) {
//         // 总油量小于总的消耗，无解
//         return -1;
//     }
//     // 环形数组特性
//     return start == n ? 0 : start;
// }
var canCompleteCircuit = function (gas, cost) {
    var curSum = 0;
    var totalSum = 0;
    var start = 0;
    for (var i = 0; i < gas.length; i++) {
        curSum += gas[i] - cost[i];
        totalSum += gas[i] - cost[i];
        if (curSum < 0) {   // 当前累加rest[i]和 curSum一旦小于0
            start = i + 1;  // 起始位置更新为i+1
            curSum = 0;     // curSum从0开始
        }
    }
    if (totalSum < 0) return -1; // 说明怎么走都不可能跑一圈了
    return start;
}

var gas = [1, 2, 3, 4, 5]
var cost = [3, 4, 5, 1, 2]
var res = canCompleteCircuit(gas, cost)
console.log(res)