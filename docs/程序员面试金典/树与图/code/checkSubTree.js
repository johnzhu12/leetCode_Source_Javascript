var checkSubTree = function (t1, t2) {

}

var t1 = {
    val: 2,
    left: {
        val: 1,
        left: {
            val: 4,
            left: null,
            right: null
        },
        right: null
    },
    right: {
        val: 3,
        left: null,
        right: null
    }
}
var t2 = {
    val: 4,
    left: null,
    right: null
}

var res = checkSubTree(t1, t2)
console.log('结果：', res)