var countBits = function(n) {
  let ans = []
  for (let i = 0; i <= n; i++) {
    let count = checkBits(i)
    ans.push(count)
  }
  return ans
}
function checkBits(num) {
  var c = 0
  while (num != 0) {
    if ((num & 1) == 1) {

      c++
    }
    num = num >> 1
  }

  return c
}

var res = countBits(2)
console.log(res)