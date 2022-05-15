// 带延时功能的链式调用
class Task {
  queue = Promise.resolve();
  log(num) {
    this.queue = this.queue.then(() => {
      console.log(num);
    })
    return this;
  }

  sleep(delay) {
    this.queue = this.queue.then(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, delay * 1000);
      })
    })
    return this;
  }
}

const t = new Task()
t.log(1).sleep(2).log(2).sleep(3).log(3)