var express=require('express');
var app=express();
var http=require('http').Server(app);
app.use(express.static('public'));               //让public可以通过/直接访问


var fs=require('fs');
var datebase={};//用来保存图片的日期和地址
fs.readdir('./public/images/',function(err,files){
	// console.log(files);
	for(var i=0;i<files.length;i++){
		fs.stat('./public/images/'+files[i],(function(i){//stat()获取文件的具体信息；
			return function(err,info){//参数和信息 info相当于一张图片
				var mtime=info.mtime;//创建时间  ctime 是改变时间  atime是
				console.log(mtime);
				var key=mtime.getFullYear()+'-'+mtime.getMonth()+'-'+mtime.getDate();
				if(!datebase[key]){
					datebase[key]=[];
				}
				
				datebase[key].push(files[i]);
				console.log(datebase);
			}
		}) (i));
	}
});


// res.sendFile(__dirname+'/index.html');
app.get('/daypicture',function(req,res){//req指index.js中的url
	// console.log(req.query.d);
	if(datebase[req.query.d]){
			console.log(datebase[req.query.d]);
		res.json(datebase[req.query.d]);//取出来的是数组；json 以数组的形式发送
	}else{
		res.send('none');
	}
});



app.get('/index',function(req,res){//服务器监听
	res.sendFile(__dirname+'/index.html');
});

app.get('/rili',function(req,res){//服务器监听
	res.json(data[req.query.time]);//从服务器发的
});


// var http=require('http').Server(app);
http.listen(80,function(){
	console.log('listening on *:80');
});


















//3000为端口号，function（）浮点函数；
//-----web服务器软件，就是让电脑上的某个文件夹变成公开，任何人都可以通过ip地址
//     请求这个文件夹内的内容，前提是请求的时候要描述清楚双方交流的语言(采用http协议)

//C:\Windows\System32\drivers\etc\hosts.dz
//在cmd中找到文件的地址（C:\Users\Administrator\Desktop\新建文件夹 (2)\javascript\js处理网络请求），
//输入node app.js



//--------------------------------------------------------------------------
//计算机网络
//-------------------什么是服务器
//互联网的硬件基础：路由器 isp 猫

//-------------------怎么访问服务器上的数据
//tcp/ip协议 http协议 数据包 ip地址 域名
//从客户端出发到服务器去根据统一资源定位法去请求一个资源(信息);

//-------------------什么是url
//统一资源定位符，http://developer.mozilla.org(域名/ip)/zh-CN/docs

//网页：html页面  网站：多个html页面

//-------------------node.js是什么
//node.js--应用程序(使js在操作系统中运行)  
//功能：解析js代码(有且只有一个功能) ，可以构建服务器等
//解析方式 node app.js(node+文件名)，可以模拟服务器
//node.js 可以理解为系统级别的应用程序，它让我们的操作系统可以解析js代码
//node.js在自己的运行环境中添加了很多特定的api 比如对文件的操作 对网络请求的操作 对时间的操作等
//--------js：数据结构和逻辑操作
//浏览器   window setInterval setTimeout document
//node.js  http file--后台

//--------------------客户端 服务器这种模式的好处
// 网络的好处，服务范围是无限的

//浏览器根据url发起http请求
//服务器根据请求的内容作出回应

//---------------------js发起网络请求
//
//-------------------为什么需要服务器
//-------------------什么是http协议
//服务器和客户端交流的语言的标准
//-----当我们在浏览器中输入http：www.baidu.com的时候究竟发生了什么
//--------------------ajax是什么
//--------------------使用ajax的好处
//--------------------利用ajax和node.js可以做什么
//--------------------例子

//app.js作为服务器

// //我们的目标：把shenqi={}变成：
// //  var shenqi={
// //         1231:[{time:早上3点,src:'a.jpg'},{time:中午,src:'b.jpg'}]
// //   };



// var shenqi={};
// var fs=require('fs');
// fs.readdir('./public/images',function(err,files){
// 	for(var i=0;i<files.length;i++){
// 		fs.stat('./public/images/'+files[i],function(err,stats){
// 			console.log(stats.ctime);
// 		})
// 	};
// });

