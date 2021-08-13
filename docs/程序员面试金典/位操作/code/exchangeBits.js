var exchangeBits = function (num) {
    var hex_odd = 0xaaaaaaaa
    var hex_even = 0x55555555
    var odd = num & hex_odd
    var even = num & hex_even
    var ans = (odd >> 1) + (even << 1)
    return ans
}
var res = exchangeBits(4)
console.log(res)