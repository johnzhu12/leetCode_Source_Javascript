var a = {
  name: "muyiy",
  book: {
    title: "You Don't Know JS",
    price: "45"
  },
  a1: undefined,
  a2: null,
  a3: 123
}
function isObject(obj) {
  return typeof obj === 'object' && obj != null;
}

function cloneDeep3(source, hash = new Map()) {

  if (!isObject(source)) return source;
  if (hash.has(source)) return hash.get(source); // 新增代码，查哈希表

  var target = Array.isArray(source) ? [] : {};
  hash.set(source, target); // 新增代码，哈希表设值
  console.log(hash)
  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (isObject(source[key])) {
        console.log('key', key)
        target[key] = cloneDeep3(source[key], hash); // 新增代码，传入哈希表
      } else {
        target[key] = source[key];
      }
    }
  }
  return target;
}

a.circleRef = a;


var b = cloneDeep3(a)
// console.log(b.circleRef);