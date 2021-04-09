/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.arr = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.arr.push(x)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.arr.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    if (this.arr.length >= 1) {
        return this.arr[this.arr.length - 1]
    } else {
        return null
    }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    let min = this.arr[0]
    this.arr.forEach(item => {
        if (item < min) {
            min = item
        }
    })
    return min;

};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

var obj = new MinStack()
obj.push(-1)

var param_3 = obj.top()
console.log(param_3)
var param_4 = obj.getMin()
console.log(param_4)