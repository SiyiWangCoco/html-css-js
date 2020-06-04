// RegExp 修饰符

// 修饰符用于执行不区分大小写和全文的搜索。

// i ： 修饰符是用来执行不区分大小写的匹配。
// g ： 修饰符是用于执行全文的搜索（而不是在找到第一个就停止查找,而是找到所有的匹配）。

// var patt=new RegExp(pattern,modifiers);
// var patt=/pattern/modifiers;
var str = "hTmLsssssss";
var patt1 = /html/i;
document.write(str.match(patt1)+'<br>'); // hTmL

var str1="Is this all there is?";
var patt2=/is/g;
document.write(str1.match(patt2)+'<br>'); // is, is

var str="Is this all there is?"; 
var patt1=/is/gi;
document.write(str.match(patt1)+'<br>');// Is, is, is


var strr = 'runoob';
var pattt1 = new RegExp('\\w', 'g'); // 有转义作为正则表达式处理
var pattt2 = new RegExp('\w', 'g');  // 无转义作为字符串处理
var pattt3 =/\w+/g;  // 与 patt1 效果相同
document.write(pattt1.test(strr)) //输出 true
document.write("<br>") 
document.write(pattt2.test(strr)) //输出 false
document.write("<br>") 
document.write(pattt3.test(strr)) //输出 true

//闭包 closure

// 1.要有两个函数 ，嵌套关系
// function outer(){
// 	function inner(){

// 	}
// }

// 2. 子函数访问了父函数中的变量
// function outer(){
// 	let name = 'qq';
// 	function inner(){
// 		return name;
// 	}
// }


function demo1(){
	let name = 'kate';
	function demo2(){
		return name;
	}
	return demo2;
}

let fn = demo1();
fn(); // closure:demo1


//直接在函数内部调用
function demo3(){
	let name = 'kate';
	function demo4(){
		return name;
	}
	return demo4(); // closure: demo3
}

demo3();


//子函数声明使用一个全局变量返回
let outer = null;
function demo5(){
	let name = 'kate';
	function demo6(){
		return name;
	}
	outer = demo6;
}


demo5();
outer(); //执行demo() closure:demo5
