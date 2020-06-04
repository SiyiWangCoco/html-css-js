//函数的实参argument与形参parameter
//实参：调用函数时， 给函数的值可为（字面量）
//形参：定义函数时，列举可能用到的参数列表
//注：形参非必须只是一个占位符

//1.形参是可选的
let sum = function (param1, param2) {
	return param1+param2;
};
console.log(sum(100,200));

let sum1 = function (){
	//arguments:用户调用函数进行的实物对象，类数组
	console.log(arguments.length)
	return arguments[0] + arguments[1];
};
console.log(sum(300,400))

//arguments 对象允许使用不定数量的参数，为函数的功能重载提供技术支持

let sum2 = function(){
	let total = 0 ;
	for (let i=0; i < arguments.length; i++) {
		total += arguments[i];
	}
	return total;
}

console.log(sum2(30,40));
console.log(sum2(34,24,50));



//2. 实参顺序必须与形参一致，但是数量可以不一致
//多余忽略，不足undefined

function f1(a,b){} 
//f1(2) //b = undefined
//f1(1,2,3,4) 3,4 忽略


//剩余参数：有一个特殊的前缀 ‘...’，而且是形参
//类型：数组，与之类似arguments是类数组还是对象

//任务：查看某个学生的年龄，是否在学生中最大
//函数：第一个参数是要比较的年龄，剩下的全部被比较的年龄

function compareAge(first, age1, age2, age3, age4, age5) {
	// 计算出比较年龄最大的数
	let arrAge = [];
	for (let i = 1; i < arguments.length; i++) {
		arrAge.push(arguments[i]);
	}
	arrAge.sort(function(var1,var2){
		return var1-var2;
	})
	console.log(arrAge);
	console.log(arrAge.length);
	console.log(arrAge[arrAge.length-1])

	let maxAge = arrAge[arrAge.length-1];
	let diff = first - maxAge;
	let result = '';
	if(diff >= 0) {
		result = first + ":最大";
	} else {
		result = first + ":不是最大， "+ maxAge + ": 最大";
	} 
	return result;
}

console.log(compareAge(50,39,23,11,59,33));



//剩余
let diffAge = (first,...arrAge) => {
	let maxAge = arrAge.sort((var1,var2) => var2-var1)[0];
	let result = '';
	if(first - maxAge >= 0) {
		result = first + ":最大";
	} else {
		result = first + ":不是最大， "+ maxAge + ": 最大";
	} 
	return result;
}

console.log(diffAge(50,39,23,11,59,33));

//默认传参
function funcl(param1, param2){
	param1 = param1 || 90;
	param2 = param2 || 20;
	return param1 + param2;
}
//es6支持
function funcl1(param1=50, param2=80){
	return param1 + param2;
}

console.log(funcl());
console.log(funcl1());
console.log(funcl(10,120));
console.log(funcl1(20,30));


//查找指定的用户名，剩余参数
let fun1 = function(...params){
	console.log(typeof params); //undefined
	console.log(Array.isArray(params)); //true 数组

	let result = '';
	params.forEach(val => {
		result = (val === 'admin'|| result === '找到了') ? '找到了': '没';
		
	});
	return result;
};

console.log(fun1('zaw', 'www', 'cdv'))


		
//arguments来实现
let fun2 = function(){
	let result = '';
	for (var i = 0; i < arguments.length; i++) {
		result = arguments[i] === 'admin' ? '找到了': '没';
		if (arguments[i] === 'admin') {break}
	}
	console.log(arguments instanceof Object ); //true
	console.log(arguments instanceof Array ); //false
	return result;
};

console.log(fun1('zaw', 'www','admin', 'cdv'))




