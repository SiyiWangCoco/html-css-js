//箭头函数
//箭头函数是匿名函数的简化版
let sum1 = function (a, b) {return a + b;};
//let sum2 = (a,b) =>{return a + b;};
let sum2 = (a,b) => a+b; //箭头函数
console.log(sum2(20,30));

let arr1= [11, 2, 33, 4, 222, 13, 32, 33,1 ];
arr1.sort(function(value1,value2){
	return value1 - value2;
});
console.log(arr1);

//用箭头函数进行简化
let arr2= [11, 2, 33, 4, 222, 13, 32, 33,1 ];
arr2.sort((value1, value2) => value1 - value2);
console.log(arr2);

//只有一个参数，参数括号可以省略
let greet = name => "weclome" + name;

console.log(greet("aa"));

//没有参数不可省略
let greet1 = () => "weclome" ;
console.log(greet());

//箭头的函数体不是一个表达式而是一个代码块，大括号不能省略
let greet2 =  (name, grade) => {
	let res = '';
	if (grade>=60) {
		res += name + ':合格';
	} else {
		res+= name + ":补考";
	}
	return res;
};

console.log(greet2("peter", 59));



//4.箭头函数中调用另一个函数
//先声明一个箭头函数

let func1 = grade => grade >= 60 ? "合格" :"补考";

//在另一个函数中掉用刚才的箭头函数
let func2 = name => name + ':' + func1(80);

console.log(func2("ddd"));