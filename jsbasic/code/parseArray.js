var array_parse = function (str) {
  var at = 0
  var ch = str[0]
  var next = function () {
    at++;
    ch = str.charAt(at)
  }
  var array = function () {
    var array = []
    if (ch == '[') {
      next()
      if (ch === ']') {
        next();
        return array; // 空数组
      }
      while (ch) {
        array.push(value());
        if (ch === ']') {
          next();
          return array;
        }
        next();
      }
    }
  }
  var number = function () {
    var number, string = '';
    while (ch >= '0' && ch <= '9') {
      string += ch;
      next();
    }
    number = +string;
    if (isNaN(number)) {
      console.error("Bad number");
    } else {
      return number;
    }
  }
  var value = function () {
    switch (ch) {
      case '[':
        return array()
      default:
        return number();
    }
  }
  var result = value()
  return result
}

console.log(array_parse("[23,4,[7,56,[8]],6]"))