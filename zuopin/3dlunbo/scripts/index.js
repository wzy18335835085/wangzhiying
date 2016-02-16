window.onload=function(){
//基础部分的数据存储  逻辑操作
//------------------------------------------------------------------
//JavaScript特定用途部分  必须能做到的事

// 能表达页面中的任何元素
// (所有的页面元素对象都定义在window这个对象中)
// 选取页面中的元素 
var el=document.getElementById('test');
var els=document.getElementsByClassName('mian');
//els是一个类数组
// console.log(els);
// cant't read property 
// 获取元素的信息 
// 对元素进行操作
//和浏览器配合通过对元素的属性进行操作改变元素的样式
// var ccc={	
	// style:{		border:null,width:100;	}
// }

// el.style.border='5px solid red';
var arr=['red','green','blue','#E780E7','black'];
// // var xx=[[0,0],[-230,-200],[230,-200],[-500,-400],[500,-400]];
for(var i=0;i<els.length;i++){
	els[i].style.backgroundColor=arr[i];
}
// var aaa=function(){
// for(var i=0;i<els.length;i++){
// 	els[i].style.webkitTransform='translate3d('+xx[i][0]+'px,0,'+xx[i][1]+'px)';
// 	els[i].style.transition='all 2s ease';
// }
// xx.push(xx.shift());
// };
// aaa();

// var data=[
// 	{translateX:'-500px',translateZ:'-400px'},
// 	{translateX:'-230px',translateZ:'-200px'},
// 	{translateX:'0',translateZ:'0'},
// 	{translateX:'230px',translateZ:'-200px'},
// 	{translateX:'500px',translateZ:'-400px'}
// ];
var data=[
	{translateX:'-500px',translateZ:'-400px'},
	{translateX:'-230px',translateZ:'-200px'},
	{translateX:'0',translateZ:'0'},
	{translateX:'230px',translateZ:'-200px'},
	{translateX:'500px',translateZ:'-400px'}
];
var index=[1,2,3,2,1];
var draw=function(){
 	
for(var i=0;i<els.length;i++){
	els[i].style.webkitTransform='translate3d('+data[i].translateX+',0,'+data[i].translateZ+')';
	els[i].style.zIndex=index[i];
	els[i].style.transition='all 2s ease';
}
data.unshift(data.pop());
index.unshift(index.pop());
};
draw();
//el.style.marginLeft:'';
//el.innerHTML='xx';

setInterval(draw,2000);
//这个函数接受两个参数, 第一个参数是一个回调函数, 第二个参数是时间
//这个函数的功能是每个s就自动帮我们调用一次传入的回调函数

//el.onclick=function(){ console.log(this.innerHTML);}


var cc=document.getElementsByClassName('mian');
cc[0].style.width='400px';
cc[0].innerHTML='aaa';
cc[0].onclick=function(){
	alert(this.innerHTML);
}



//并不是所有的对象都有style属性
// 和浏览器配合检测用户行为(事件)




//选取元素的api
//document.getElementById('') 会得到单个元素
//document.genElementsByClassName('')会得到一个元素的集合,类似数组
//给元素添加样式的api
//xx.style.webkitTransform='translate3d(0,0,0)';
// var data=[{x:-300,z:-400},{x:-200,z:-200},{x:0,z:0},
// 		{x:200,z:200},{x:300,x:300}];
//利用document.getElementsByClassName 得到所有的面
//写一个函数给所有的面 ,按照顺序 分别添加数组中的样式
//面有5个 数组中正好也有5个数据
//函数每调用一次,就把数组中最后一个元素放到数组开头
//再次调用函数  就会看到面的样式发生变化
//设置成每隔两秒调用该函数,就会自动轮播起来



///////////////////////计算器///////////////////////////
/////1.id='screen'
/////2.var sc=document.getElementById('screen');

/////3.给所有的数字加上class  num
/////4.var nums=document.getElementsByClassName('num')
/////5.给所有的代表数字的div 加上一个onclick方法
///// nums[0].onclick=function(){};
///// for(var i=0;i<nums.length;i++){
	// nums[i].onclick=function(){
		// alert(this.innerHTML);
	// };
// }

/////6.把上一步函数中的alert(this.innerHTML)
/////=========>  sc.innerHTML=this.innerHTML;

/////给运算符加上class oprator
///// var ops=document.getElementByClassName('oprator');
///// 给等号加上ID var equl=document.getElementById('denghao')
/////定义两个变量  firstNumber=''   secondNumber=6;
///// 给等号添加onclick


///// 把nums[i].onclick 的那个function改成
///// nums[i].onclick=function(){
// 	firstNumber=Number(this.innerHTML);
// };
// equl.onclick=function(){
// 	sc.innerHTML=firstNumber+secondNumber;
// }












};