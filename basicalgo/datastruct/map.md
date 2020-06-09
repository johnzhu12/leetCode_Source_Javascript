
# ES6Map数据结构底层原理模拟

ES6 的Map数据结构 用邻接链表的底层原理来简单模拟实现，不是用遍历去查找 这样体现不出查找快速的特点。就是给我们的数据分好类 然后再从同类中查找，这里我们用hash值来分类。

```js
	//定义一个自己的myMap，执行初始化函数，在其原型链上写
	function myMap(){
		this.init();
	};
	
	//这里定义了存放的桶的个数，
	myMap.prototype.len = 8;
	//用来存放我们的kv
	myMap.prototype.bucket = [];
	//初始化函数 让每个桶里的初始next等于null
	myMap.prototype.init = function (key){
		for(let i = 0; i < this.len ; i++){
			this.bucket[i] = {next:null};
		}
	}
	//将传入的key值转换成hash值
	myMap.prototype.makeHash = function (key){
		let newHash = 0;
		if(typeof key == 'string'){
			let strLen = (key.length > 3) ? key.length : 3;
			for(let i = strLen - 3; i < strLen ; i++){
				newHash += (key[i] !== undefined) ? key[i].charCodeAt() : 0; 
			}
		}else {
			newHash = (Object.is(key,NaN)) ? 0 : +key;
		}
		return newHash;
	}

	
	//set方法 有key值就覆盖value 没有就设置上
	myMap.prototype.set = function (key,value){
		//不用遍历
		let hash = this.makeHash(key);
		//转换成hash值
		let list = this.bucket[hash % this.len];
		//摸8放入桶里
		let nodeNext = list;
		// console.log(hash+','+list+','+nodeNext)
		
		while (nodeNext.next) {
			//next的key等于传入的key的话 value赋值 没有的话接着找下一个next
			if (nodeNext.key === key){
				nodeNext.value = value;
				return;
			}else{
				nodeNext = nodeNext.next;
			}
		}
		//如果没有next，则重新设置key，value；
		if (nodeNext.key === key) {
			nodeNext.value = value;
			return nodeNext;
		} else {
			nodeNext.next = {key,value,next:null};
		}
		
		//返回这个对象
		return nodeNext.next;
	}
	//get方法 有key则返回value没有则返回undefined
	myMap.prototype.get = function (key){
		let hash = this.makeHash(key);
		let list = this.bucket[hash % this.len];
		let nodeNext = list ;
		//从每个桶的第一个开始查看
		while (nodeNext) {
			if (nodeNext.key === key) {
				// console.log(nodeNext.value)
				return nodeNext.value;
			}else {
				nodeNext = nodeNext.next;

			}
		}
		return

	}
	//has 方法 有key则返回true 无则false
	myMap.prototype.has = function (key){
		let hash = this.makeHash(key);
		let list = this.bucket[hash % this.len];
		let nodeNext = list ;
		//从每个桶的第一个开始查看
		while (nodeNext) {
			if (nodeNext.key === key) {
				return true;
			}else {
				nodeNext = nodeNext.next;
			}
		}
		return false;
	}
	//has 方法 删除key成功则返回true 无则false
	myMap.prototype.delete = function (key){
		let hash = this.makeHash(key);
		let list = this.bucket[hash % this.len];
		let nodeNext = list ;
		while (nodeNext) {
			if (nodeNext.next.key === key) {
				nodeNext.next = nodeNext.next.next;
				return true;
			}else {
				nodeNext = nodeNext.next;
			}
		}
		return false;
	}
	//清空方法  直接执行初始化函数
	
	myMap.prototype.clear = function (){
		this.init();
	}
	
```