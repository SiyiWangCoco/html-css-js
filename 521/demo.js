//函数调用方式

// 1. 当成函数来调用
// 2. 当成对象方法来调用
// 3. 当成对象构造器来调用：new
// 4. call() /apply()

// 1. 当成函数来调用
console.log(
	(function (name) { return 'welcome' + name; })("kate")
	);

//重点放在this对象的指向上
//每个函数内部都有一个this对象，是隐藏参数，默默传入
function func1(){
	return this; //window  ，函数内部申明
}
console.log(func1());

function func2(){
	'use strict'
	return this; //undefined   
}
console.log(window.func2()); 
console.log(this.func2()); 

//全局环境：在函数之外的环境
//全局中 this是用来联系上下文对象，对象
//在严格模式下，this成为undefine




// 2. 当成对象方法来调用
let obj = {
	name: "kate",
	study: function(course){
		return this.name + "is studying" + course;
	}
};
console.log(obj.study('js'));

//在函数内部可以直接访问该函数的主体 直接用this

const mobile = {
	brand:'华为',
	model: 'p20',
	price: 5533,
	getInfo: function(){
		console.log(this);
		return this.brand + this.model + ": " + this.price + "元";
	} 
}

console.log(mobile.getInfo());





// 3. 当成对象构造器来调用：new
function Stu(name, course, grade) {
	this.name = name;
	this.course = course;
	this.grade = grade;
}


let stu = new Stu('Perr','js', 44);
console.log(stu);
console.log(stu.name);


//构造函数
function Moblie1(brand, model, price){
	this.brand = brand;
	this.model = model;
	this.price = price;
	this.print = ()=> this.brand +': '+ this.model + ': ' + this.price + '元';

}


let mobile1 = new Moblie1('Apple', 'iphone', 6666);
let moblie2 = new Moblie1('Huawei', 'p20 pro', 5444);

console.log(mobile1.print());
console.log(moblie2.print());


// new 专用来调用构造函数

//模拟构造器

// function Constructor(name,age,this){
// 	this.name = name;
// 	this.age = age; 
// 	return this;
// }

//new: 全新对象，以this的方式，传入到构造函数中，作为上下文对象，初始化属性返回生成对象



//构造函数返回值不是this而是对象

let global1 = {
	name :'kate',
};

//构造函数 
function Demo(value){
	this.prop = value;
	//返回一个对象,不是this
	return global1;
}

//实例化
let obj2 = new Demo('JavaScript');
console.log(obj2.prop); //是undefined
console.log(obj2 instanceof Demo); // false, 不是Demo实例，也不是this
console.log(obj2 === global1); // true      
console.log(obj2.name); // kate 



//构造函数不反回一个对象而是原始值

function Demo1(value){
	this.prop = value;
	//返回一个对象,不是this
	return 1000;// 'sss' / true / undefined / null
}

let obj1 = new Demo('JavaScript'); 
console.log(obj1.prop); //JavaScript
console.log(obj1 instanceof Demo); // true
//this 仍可用 不受影响



//4. call() / apply()
let sum = (m, n) => m + n;
console.log(sum.call(this, 50, 30));
console.log(sum.apply(this, [50, 30]));


// 主要区别：this对象的指向不同
// 1.全局函数调用：window/undefinded(strict)
// 2.对象的方法来调用：this指向该方法所在的对象
// 3. 构造函数来调用：this指向新创建的对象

// 以上this是固定的,不允许被改变

// 动态改变this指向
 //全局函数
 function sum2() {
 	let result = 0;
 	for (var i = 0; i < arguments.length; i++) {
 		result += arguments[i];
 	}
 	this.result = result;
 	return this.result;
 }

 console.log(this); //window
 console.log(sum2(10,20,30));
 console.log(window.sum2(10,20,30));
 console.log(this.sum2(10,20,30));


//动态改变sum()的调用上下文对象 this/window， 改变obj3
//call(函数上下文对象， 参数列表)
 let obj3 = {};
 let obj4 = {};

console.log(sum2.call(obj3, 30,40,50));
console.log(sum2.apply(obj3, [30,40,50]));

//如果参数之间不想关用call()
//如果参数是一组相关的参数或者本身就是数组用apply()


































































