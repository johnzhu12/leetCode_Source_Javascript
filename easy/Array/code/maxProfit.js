var maxProfit = function (prices) {
    let money = 0
    let buy = prices[0]
    for (let price of prices) {
        if (price > buy) {
            money += price - buy
        }
        buy = price
    }
    return money
};

var src = [1, 3, 2, 4, 5]
var res = maxProfit(src)
console.log(res)