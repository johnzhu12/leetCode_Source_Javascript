var hammingWeight = function(n) {
  var c = 0
  var i = 32
  while (i > 0) {
    if (n && 1 == 1) {
      c++
    }
    n = n >> 1
    i--
  }
  return c
};
var res = hammingWeight(11)
console.log(res)