/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  let len = nums.length
  let res = []
  let track = []
  let map = {}
  let used = []
  function backtrace(nums, row) {
    if (row == len && track.length == len) {
      let key = track.join("")
      console.log('我是key', key)
      //没有的话
      if (!map[key]) {
        map[key] = true
        res.push([...track])
      }

      return
    }
    for (var i = 0; i < len; i++) {
      if (used[i]) continue
      var a = nums[i] //当前元素
      used[i] = true
      track.push(a)
      backtrace(nums, row + 1)
      track.pop()
      used[i] = false
    }
  }
  backtrace(nums, 0)
  return res
};


var src = [1, 1, 2]
var res = permuteUnique(src)
console.log(res)