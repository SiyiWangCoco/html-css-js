//基础用法
window.alert("outside js"); //弹窗
var x = "a1";
document.write("<p>"+x+"</p> <br>"); //写入html文档

var y = document.getElementById("demo");
y.innerHTML = "change innerHTML";
document.getElementById("demo2").innerHTML = "one line";  // 写入HTML元素

//语法
document.getElementById("demo").innerHTML = 'John W'; //字符串string
document.getElementById("demo").innerHTML = 5 + "vddd"; // 输出： 5vddd
var z = [40, 100, 1, 5, 25, 10]; //数组array

var cars=new Array();
cars[0]="Saab";
cars[1]="Volvo";
cars[2]="BMW";

var cars=new Array("Saab","Volvo","BMW");

var z= {firstName:"John", lastName:"W", age:23, eyeColor:"black"} //对象object

var person={
	firstname  : "John",
	lastname  : "W",
	id       :22
	};

document.write(person.firstname + "<br>");
document.write(person["firstname"] + "<br>");  // 对象寻址




person=new Object();
person.name="zac";
person.age=2;
person.sex="boy";
document.write(person.name + " is a " + person.age + "-yea-old "+ person.sex);



function myFunction(a, b) {  

	document.write(a +"是一个"+ b); //重写页面
	
	}; // 函数function


function myFunction2()
{
    var x=5;
    return x;
};
var myVar=myFunction2();

document.getElementById("demo").innerHTML=myFunction2();

//极大极小数
var y=123e5;      // 12300000
var z=123e-5;     // 0.00123



//if()... else if ... else ...
//for(  ;  ;  ){}

//switch
// switch(n)
// {
// case 1:
//   break;
// case 2:
//   break;
// default:
//  //not  case 1 or case 2 
// }
function myFunction3(){
  var x;
  var d=new Date().getDay();
  switch (d){ //true
      case 0: //case d==0:
        x="今天是星期日";
        break;
      case 1: //case d==1:
        x="今天是星期一";
        break;
      case 2: //case d==2:
        x="今天是星期二";
        break;
      case 3: //case d==3:
        x="今天是星期三";
        break;
      case 4: //case d==4:
        x="今天是星期四";
        break;
      case 5: //case d==5:
        x="今天是星期五";
        break;
      case 6: //case d==6:
        x="今天是星期六";
        break;
      default:
        x="期待周末";
  };
  document.getElementById("demo").innerHTML=x;
};


// do/while 循环
//先执行在检测
function myFunction4(){
	var x="",i=0;
	do {
	  x=x + "The number is " + i + "<br>";
	  i++;
	 }
	while (i<5)  
	document.getElementById("demo").innerHTML=x;
};

//Throw,try,catch
var txt="";
function message(){
  try {
	adddlert("Welcome guest!");
  }
  catch(err){
	txt="这个页面上有一个错误.\n\n";
	txt+="错误描述: " + err.message + "\n\n";
    txt+="点击继续.\n\n";
	alert(txt);
  }
};

function message2(){
  try {
    var x=document.getElementById("demo").value;
    if(x=="")    throw "输入为空";
    if(isNaN(x)) throw "输入的不是一个数字";
    if(x>10)     throw "超过10";
    if(x<5)      throw "低于5";
  }
  catch(err){
    var y=document.getElementById("mess");
    y.innerHTML="错误: " + err + ".";
  }
 };


 //email
 function validate_email(field,alerttxt) {
  with (field) {
	apos=value.indexOf("@")
	dotpos=value.lastIndexOf(".")
	if (apos<1||dotpos-apos<2) {
	  alert(alerttxt);
	  return false;
	}
	else {
	  return true;
	}
  }
};

//必填
function validate_required(field,alerttxt){
  with (field) {
	if (value==null||value==""){
	  alert(alerttxt);
	  return false
	} else {
	  return true
	}
  }
};