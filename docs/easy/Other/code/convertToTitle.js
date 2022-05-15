var convertToTitle = function(n) {
  if (n <= 0) return "";

  let res = [];
  while (n) {
    n--; // 通过让 n - 1，使得余数 remain 减少 1 
    let remain = n % 26;
    res.unshift(String.fromCharCode(remain + 65));
    n = Math.floor(n / 26);
  }
  return res.join("");
};
var res = convertToTitle(701)