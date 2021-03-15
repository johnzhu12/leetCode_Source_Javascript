function genArray(n) {
    // let a = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]; //生成的随机数的集合
    let arr = []
    for (var i = 1; i <= n; i++) {
        arr.push(i)
    }
    let res = [];
    for (let i = 0; i < n; i++) {
        let index = parseInt(Math.random() * arr.length);    //生成一个的随机索引，索引值的范围随数组a的长度而变化
        res.push(arr[index]);
        arr.splice(index, 1)  //已选用的数，从数组a中移除， 实现去重复
    }
    return res;
}

var res = genArray(22)

console.log('res', res)