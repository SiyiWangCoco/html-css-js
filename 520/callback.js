//回调函数 回头掉用 第三方触发
//将函数当作参数进行传递，当作参数的函数，会在未来的某个时刻才会执行
//回头掉用这个函数

function callback0() {
	function fuc0(callback0){
		return callback0();
	}
}

//最基本的使用场景
function callback(){
 
}

function func(callback) {
	return callback(); //函数的参数化调用
}
//调用

func(callback); // callback 直接对应function callback（）{}

// func( function callback(){
 
// });  //in one line 

//该函数反应了函数的一种功能
//如果某个函数成为另一个函数的参数后，那么我们以后就可以使用这个参数来引用这个函数

//回调函数：出现在另一个函数参数位上的函数，在函数体内可以直接调用


function getMessage(text) {
	return text;		
}

function funci(getMessage,text){
	return getMessage(text);
}

console.log(
	funci(getMessage,"hello")
	) ;


console.log(
	funci(function (text) {
		return text;		
	},"hello inside")
) ;

//排序
let arr = [3, 4, 23, 44, 1, 23, 99, 4];
arr.sort(function(var1,var2){
	return var1 - var2; 
	// return var2 - var1;  //倒序
})

console.log(arr)


//管理回调函数集合
//将多个回调函数宝船到一个数组中， 易于管理相关联的回调函数的集合
//所有函数保存到一个数组中
//不允许重复函数

let store = {
	nextId: 1, // 标识该回调函数是否已经被添加
	cache:{},  //缓存已存在的函数
	add: function (fn) {
		// 将这个fn(要被添加的这个函数)添加到cashe对象中
		// 假定要被添加到集合中的函数，如果存在id属性表示该函数已被添加过
		if(!fn.id){ //如果这个函数没有id属性表示是新函数需添加
			fn.id = this.nextId++; //给新函数添加id
			this.cache[fn.id] = fn; // 给新函数存在缓存区
		 	return true; //返回成功标志
		}
	}
};

function func1() {
	//
}

if(store.add(func1)){
	console.log("true");
}







//自动记忆上次计算结果
//奇偶判断
function isOdd(number){
	if (!isOdd.result) {
		isOdd.result = {}; //对象字面量类似于关联数组
	}

	//检测该数据是否已经计算过了，如股在缓存中，则直接输出
	if (isOdd.result[number] !== undefined) {
		return isOdd.result[number];
	}

	if (number % 2 !== 0) {
		return isOdd.result[number] = number;
	}


}

console.log(isOdd(3) ? "odd" : "even");
console.log(isOdd.result);