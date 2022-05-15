/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  var len = nums.length
  if (len == 0) return null
  if (len == 1) return nums[0]
  var map = {}
  for (var i = 0; i < len; i++) {
    if (map[nums[i]]) {
      map[nums[i]]++
    } else {
      map[nums[i]] = 1
    }
  }
  console.log(map)
  for (var key in map) {
    if (map[key] > Math.floor(len / 2)) return key
  }
  return null
};

var src = [3, 2, 3]
var res = majorityElement(src)
console.log(res)