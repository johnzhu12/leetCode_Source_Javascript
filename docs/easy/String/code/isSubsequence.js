var isSubsequence = function(s, t) {
  var p1 = 0, p2 = 0
  if (s.length > t.length) return false

  while (p1 < s.length && p2 < t.length) {
    if (s[p1] == t[p2]) {
      p1++
      p2++
      continue
    } else {
      p2++
    }
  }

  return p1 == s.length
};
// "aaaaaa"
// "bbaaaa"
var res = isSubsequence("aaaaaa", "bbaaaa")
console.log(res)