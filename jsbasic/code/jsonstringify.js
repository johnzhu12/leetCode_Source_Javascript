/** 
 * JSON stringify的实现 
 * @author norkts<norkts@gmail.com> 
 * @version 1.0 2015-11-24 15:11 实现了基本功能 
 * @version 1.1 2015-11-24 15:19 norkts 增加了JSON.stringify的兼用代码实现 
 * @version 1.2 2015-11-24 15:49 norkts 修改数组indexOf在IE下不兼容的写法,修改了undefined值的特殊处理 
 */
(function (NS) {

  //简单类型 
  var simpleTypes = ["number", "boolean", "undefined", "string", "function"];

  //JSON.stringify的主函数 
  function stringify(object) {
    var type = typeof object;

    //如果是简单类型，则直接返回简单类型的结果 
    if (indexOf(simpleTypes, type) > -1) {
      return parseSimpleObject(object);
    }

    //数组对象的 
    if (object instanceof Array) {
      var len = object.length;
      var resArr = [];
      for (var i = 0; i < len; i++) {
        var itemType = typeof object[i];
        if (indexOf(simpleTypes, itemType) > -1) {

          //undefined特殊处理，数组中变成null 
          if (itemType != "undefined") {
            resArr.push(parseSimpleObject(object[i]));
          } else {
            resArr.push("null");
          }

        } else {
          //递归处理JS数组中的复杂元素 
          resArr.push(stringify(object[i]));
        }
      }

      return "[" + resArr.join(",") + "]";
    }

    //普通object对象 
    if (object instanceof Object) {
      if (object == null) {
        return "null";
      }

      var resArr = [];

      for (var name in object) {
        var itemType = typeof object[name];
        if (indexOf(simpleTypes, itemType) > -1) {
          //undefined特殊处理，object中不编码 
          if (itemType != "undefined") {
            resArr.push("\"" + name + "\":" + parseSimpleObject(object[name]));
          }
        } else {
          resArr.push("\"" + name + "\":" + stringify(object[name]));
        }
      }

      return "{" + resArr.join(",") + "}";
    }
  }

  function parseSimpleObject(object) {
    var type = typeof object;
    if (type == "string" || type == "function") {
      return "\"" + object.toString().replace("\"", "\\\"") + "\"";
    }

    if (type == "number" || type == "boolean") {
      return object.toString();
    }

    if (type == "undefined") {
      return "undefined";
    }

    return "\"" + object.toString().replace("\"", "\\\"") + "\"";
  }

  function indexOf(arr, val) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === val) {
        return i;
      }
    }

    return -1;
  }

  /** 
   * 将stringify做二次封装 
   * @param object 要处理的对象 
   * 
   */
  NS.stringify = function (object, isEncodeZh) {
    var res = stringify(object);
    if (isEncodeZh) {
      var encodeRes = "";
      for (var i = 0; i < res.length; i++) {
        if (res.charCodeAt(i) < 0xff) {
          encodeRes += res[i];
        } else {
          encodeRes += "\\u" + res.charCodeAt(i).toString(16);
        }
      }
      res = encodeRes;
    }

    return res;
  };
})(global);

var jsonObj = {
  'hello': "\"world",
  "array": [1, 2, 3, undefined],
  "obj": {
    "1": 2,
    "2": 4
  },
  func: () => {
    return 'hello'
  }
}

var res = global.stringify(jsonObj)
console.log('结果', res)