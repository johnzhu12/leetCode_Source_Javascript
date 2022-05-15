var getPermutation = function(n, k) {
  var res = []
  var track = []
  var used = []
  function dfs() {
    // console.log(row,n)
    if (track.length == n) {
      res.push(track.join(""))
      return
    }
    for (var i = 1; i <= n; i++) {
      if (used[i]) continue
      track.push(i)
      used[i] = true
      dfs()
      track.pop()
      used[i] = false
    }
  }
  dfs()
  // res.reverse()
  // res = res.sort((a, b) => Number(a) - Number(b))
  console.log(res[k - 1])
  return res[k - 1]

};

var res = getPermutation(3)