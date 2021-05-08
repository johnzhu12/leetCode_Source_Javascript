// n = 1000
// for c from 1 to n:
//     for d from 1 to n:
//        result = c^3 + d^3
//        append(c, d) to list at value map[result]
// for each result, list in map:
//    for each pair1 in list:
//        for each pair2 in list:
//            print pair1, pair2

function quadruples(n) {
    var map = new Map()

    for (var c = 0; c <= n; c++) {
        for (var d = 0; d <= n; d++) {
            var result = Math.pow(c, 3) + Math.pow(d, 3)
            map.has(result) ? map.get(result).push({ c, d }) : map.set(result, [{ c, d }])
        }
    }
    console.log(map)
}

var res = quadruples(5)
