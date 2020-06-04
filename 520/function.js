// 1. 对象用字面量来创建的
{}
// 2. 对象可以当作值，数组的元素,其他对象的属性

let stu = {name:"cc", course:"js", grade:"20"}; // 当作值

let arr = [];
arr.push({x:1, y:2}); // 当数组的元素
arr.push(stu);

console.log(arr);
console.log(arr[1].name);

let obj = {};
obj.prop = stu;  //对象属性上添加一个数据，数据类型就是对象(linklist)


// 3. 作为参数，传递给函数
function setGrade(obj, newGrade) {
	return obj.grade = newGrade; 
}

//调用函数设置成绩
stu.grade = setGrade(stu, 70);
console.log(stu.grade);

//4. 将对象作为函数的返回值来使用

function setStatus(userId, status) {
	//返回用户id与所对应的status状态
	return {
		userId: userId,
		status: status
	};
}

let userStatus = setStatus(1001,1);
console.log(userStatus);




//  用函数实现对象的所有功能

// 1. 创建函数
function sum(m,n) {
	return m + n;
}
console.log(sum(10,20));

// 2. 将函数管成一个表达式的值来使用，赋值给变量，数组的元素，其他对象的属性
let sub = function (m,n) {
	return m - n;
}
console.log(sub(10,20));

let arr1 = [];
arr1.push(function(a,b){
	return a * b;
}, 30, 40);
//当前arr数组只有一个参数 arr[0]就是一个函数
console.log(arr1[0](8,9));


//将函数作为其他对象的属性值，实际上就是给对象添加一个自定义的方法
let obj2 = {};
obj2.setData = function (data) {
	return data;
}


// 3.函数作为一个函数的参数传入,第一个biger()
function getMessage(bigger, var1, var2){
	return bigger(var1,var2);
}

//调用，返回第二个和第三个参数中的较大值
console.log(
	getMessage(function(var1,var2){
		return var1>var2 ? var1: var2;   //var2: var1; 较小
	},20, 80)
);

// 4. 函数作为其他函数的返回值来使用
function getBigger(){
	return function(var1,var2){
		return var1>var2 ? var1: var2;
	}
}

console.log(getBigger()(40,70));


//函数作为对象使用 给函数添加属性

let obj1 = {};
obj1.name = "kate";
console.log(obj1.name);

function funcl() {};

funcl.hello = 'hello world';
console.log(funcl.hello);



//定义函数
// 通过字面量(function literal) function 关联字来定义
// 1. 函数申明
// 2. 函数表达式
// 3. 构造函数
// 4. 箭头函数
// 5. 生成器函数

//1.函数申明
//function funcName(param1, param2) {
	//多条js语句		
//
//原则： 声明必须是独立的，独立是指不能把它当成一个值/表达式来用
//两个地方可以声明：1.全局中， 2.另一个函数中

//1.1 全局中进行函数申明
function funca(name) {
	return name;
}

console.log(funca("aaa"));

//1.2 将函数申明写道另一个函数中
function funcb(name) {
	function funcc(grade) {
		return grade;	
	}
	return name + "的成绩： " + funcc(80);
}
console.log(funcb("bbb"));


//2.函数表达式:匿名函数
//2.1 右值：该表达式运行出现在运算符右边作为值来使用
let sum1 = function (a,b){
	return a+b;
};
console.log(sum1(10, 30));

//2.2 参数
//function callback3(a, b) {return a + b};
function myFunc(callback3, a, b) {
	return callback3(a,b);
};
let res = myFunc(function (a,b){return a + b}, 10, 20);
console.log(res);

//2.3将函数作为京一个函数的返回值
function myFunc1(a,b) {
	return function (){
		return a + b;
	}
}
console.log(myFunc1(40,60)());

//3.立刻执行函数（自执行函数）
// let res1 = function($a, $b){return $a * $b;}(40,80);
// let res1 = (function($a, $b){return $a * $b;}(40,80));
let res1 = (function($a, $b){return $a * $b;})(40,80);
//console.log(res1(40,80));
console.log(res1);