// 通过 HTML DOM，可访问 JavaScript HTML 文档的所有元素。

// 1.通过 id/类名class 找到 HTML 元素
x=document.getElementById("intro");
document.write('id段落中的文本是：' + x.innerHTML + "<br>");

// 2.通过标签名找到 HTML 元素
var x=document.getElementsByTagName("p")[0];
document.write('p标签中的文本是：' + x.innerHTML);


// 改变 HTML 内容
// document.getElementById(id).innerHTML=new HTML
 document.getElementById("intro1").innerHTML="new";

// 改变 HTML 属性
// document.getElementById(id).attribute=new value
 document.getElementById("img").src=" "; //'./images/44.jpg'

// 改变 CSS
// document.getElementById(id).style.property=new style
document.getElementById("intro").style.color="pink"

 
// DOM 事件属性
function myDemo(){
    document.getElementsByTagName("p")[1].innerHTML=Date();

  }

 // js 分配事件
document.getElementById("myBtn").onclick=function(){myDemo1()};
function myDemo1() {
	document.getElementById("demo").innerHTML=Date();
}

// onload 和 onunload 事件
function checkCookies(){
    if (navigator.cookieEnabled==true){
        alert("Cookies 可用")
    }
    else{
        alert("Cookies 不可用")
    }
}

// onchange 事件
function myFunction() {
	var x=document.getElementById("fname");
	x.value=x.value.toUpperCase();
}


// onmouseover 和 onmouseout 事件
function myDemo2(obj) {
	document.getElementById("demo1").style.backgroundColor="pink";
}

function myDemo3(obj) {
	document.getElementById("demo1").style.backgroundColor="skyblue";
}

// onmousedown、onmouseup 以及 onclick 事件
function myDemo4(){
	document.getElementById("demo2").style.backgroundColor="pink";
	document.getElementById("demo2").innerHTML="请释放鼠标按钮"
}
function myDemo5(){
	document.getElementById("demo2").style.backgroundColor="skyblue";
	document.getElementById("demo2").innerHTML="请按下鼠标按钮"
}


 // DOM 元素（节点）
 // 创建新的 HTML 元素

var para=document.createElement("p"); //创建新的 <p> 元素
var node=document.createTextNode("new para");  //创建了一个文本节点
para.appendChild(node); //向 <p> 元素追加这个文本节点

var element=document.getElementById("div1"); //找到一个已有的元素
element.appendChild(para); //向一个已有的元素追加这个新元素


//删除已有的 HTML 元素
var parent=document.getElementById("div1");
var child=document.getElementById("p2");
parent.removeChild(child);
//不知父元素id
var child=document.getElementById("p1");
child.parentNode.removeChild(child);