class Queen {
    constructor(num) {
        this.num = num;
        this.arr = [];
        this.result = [];
        this.initList();
        this.buildList(this.arr, 0);
    }

    initList() {
        let num = this.num;
        for (let i = 0; i < num; i++) {
            this.arr[i] = [];
            for (let j = 0; j < num; j++) {
                this.arr[i][j] = 0;
            }
        }
        // console.log(this.arr);
    }

    buildList(list, row) {
        // 递归中止条件,找到一个解缓存起来
        if (row === list.length) {
            this.result.push(JSON.parse(JSON.stringify(list)));
            return;
        }
        for (let col = 0, len = list.length; col < len; col++) {
            if (this.isSafe(list, row, col)) {
                list[row][col] = 1;
                this.buildList(list, row + 1);
                // 走到这里，说明该次递归已经结束，不管找没找到，都需要重置
                list[row][col] = 0;
            }
        }
    }

    isSafe(list, row, col) {
        const len = list.length;
        // 同一列
        for (let i = 0; i < len; i++) {
            if (list[i][col] === 1) return false;
        }
        // 斜右上方
        for (let i = row - 1, j = col + 1; i >= 0 && j < len; i--, j++) {
            if (list[i][j] === 1) return false;
        }
        // 斜左上方
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (list[i][j] === 1) return false;
        }
        return true;
    }
}
const queen = new Queen(8);
console.log(queen.result.length);