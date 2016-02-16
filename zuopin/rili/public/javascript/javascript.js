window.onload=function(){
	var ajax=function(o){
		var req=new XMLHttpRequest();
		req.open('get',o.url);
		req.send();
		
		req.onreadystatechange=function(){
			if(this.readyState==this.DONE&&this.status==200){
				o.onsuccess(this.response);//这个fn是下边ajax里面的第二个属性；this.response代表服务器返回来的东西；
			}
		}
	};
	var date2string=function(){
			return date.getFullYear()+'-'+date.getMonth()+'-'+date.getDate();
		}
	// var tu1=document.getElementById('fangtupian1');
	// var tu2=document.getElementById('fangtupian2');
	// var tu3=document.getElementById('fangtupian3');

	// var data={
	// 	21:['1.jpg'],22:['2.jpg'],23:['3.jpg']
	// }

	var line=document.getElementById("ere");
	line.style.overflow="scroll";
	var cc=0;
	var date=new Date();
	var nowyear=date.getFullYear();
	var nowmonth=date.getMonth();
	var nowdate=date.getDate();
	var dd=['日','一','二','三','四','五','六'];
	for(var i=0;i<52;i++){
		var index=i;
		if(i==0){
			var div=document.createElement("div");
			div.innerHTML="星期"+dd[date.getDay()];
			div.style.marginTop="20px";
			div.style.marginLeft="30px";
			line.appendChild(div);
		}
		if(i==1||i==3){
			var aa=document.createElement("div");
			aa.style.border="1px solid #E5E5E5";
			aa.style.background="black";
			aa.style.marginLeft="30px";
			line.appendChild(aa);	
		}
		if(i==2){
			var div=document.createElement("div");
			div.innerHTML="全天";
			div.style.fontSize="1px";
			div.style.lineHeight="20px";
			div.style.color="rgb(116, 116, 116)";
			div.style.marginLeft="0px";
			line.appendChild(div);
		};
		if(i==5||i==7||i==9||i==11||i==13||i==15||i==17||i==19||i==21||i==23||i==25||i==27||i==29||i==31||i==33||i==35||i==37||i==39||i==41||i==43||i==45||i==47||i==49||i==51){
			var aa=document.createElement("div");
			aa.style.border="1px solid #E5E5E5";
			aa.style.marginTop="20px";
			aa.style.marginLeft="30px";
			line.appendChild(aa);
		}	
		if(i==4||i==6||i==8||i==10||i==12||i==14||i==16||i==18||i==20||i==22||i==24||i==26||i==28||i==30||i==32||i==34||i==36||i==38||i==40||i==42||i==44||i==46||i==48||i==50||i==52){
			var aa=document.createElement("div");
			aa.setAttribute("class","aa");
			aa.style.border="1px #E5E5E5 dashed ";
			aa.style.marginTop="20px";
			aa.style.marginLeft="30px";
			aa.style.position="relative";
			line.appendChild(aa);
			var bb=document.createElement("div")
			
			bb.style.width="20px";
			bb.style.height="20px";
			bb.style.position="absolute";
			bb.style.left="-30px";
			bb.style.top="10px";
			// bb.style.border="1px solid red";
			cc=cc+1;
			bb.innerHTML=cc;
			aa.appendChild(bb);
		}			
	}


	var aa=new Date();	
	var hongx=document.getElementById('hongx');
	console.log((aa.getHours()*60+aa.getMinutes()));
	var bian=function(){hongx.style.top=((aa.getHours()*60+aa.getMinutes())/(24*60))*1121+'px';};
	bian();
	setInterval(bian,600000);
//----------------------------------------------------------------------------------------------------
	var date = new Date();	
	var  xiannian=date.getFullYear();
	var  xianyue=date.getMonth();
	var  xianri=date.getDate();
	var meiyuetianshu=[31,28,31,30,31,30,31,31,30,31,30,31];
	//给它一个div class='aaaa aaa aa'
addClass=function(el,s){//el 加给谁的，s 是要加的类名
		var tmp=el.getAttribute("class").split(" ");
		var dict={};
		for(var i=0;i<tmp.length;i++){
			dict[tmp[i]]=true;
		}
		if(!dict[s]){
			el.setAttribute('class',el.getAttribute('class')+' '+s);
		}
	}

 removeClass=function(el,s){//删除类
		var tmp=el.getAttribute("class").split(" ");
		var dict={};
		for(var i=0;i<tmp.length;i++){
			dict[tmp[i]]=true;
		}
		delete dict[s];
		var ns='';
		for(var name in dict){
			ns+=' '+name;
		}
		el.setAttribute('class',ns);
	}

	var isrunnian=function(year){
		if(year%4 == 0 && year%100 !=0|| year%400==0){
			return true;
		}
			return false;
	}

	var previousDay=function(){//上一天
		var currentyear=date.getFullYear();
		var currentmonth=date.getMonth();
		var currentdate=date.getDate();
		var targetyear,targetmonth,targetdate;//变化以后的年月日
		targetdate=currentdate-1;
		if(targetdate==0){
			targetyear=currentyear;
			targetmonth=currentmonth-1;
			if(targetmonth==-1){
				targetyear=currentyear-1;
				targetmonth=11;
			}
			if(targetmonth == 1 && isrunnian(targetyear)){
				meiyuetianshu[1]=29;
			}
			targetdate=meiyuetianshu[targetmonth];
		}else{
				targetmonth = currentmonth; targetyear  = currentyear;
		}
		date = new Date( targetyear,targetmonth,targetdate );
	}
	var nextDay=function(){
		var currentyear   =  date.getFullYear();
		var currentmonth  =  date.getMonth();
		var currentdate   =  date.getDate();
		var targetyear, targetmonth, targetdate;
		targetdate  = currentdate + 1;
		if(currentmonth == 1 && isrunnian(currentyear) ){
			meiyuetianshu[1] = 29;
		}
		if( targetdate  > meiyuetianshu[currentmonth] ){//跨月
				targetyear  = currentyear;
				targetmonth = currentmonth  + 1;
				if( targetmonth == 12 ){//夸年
					targetyear  = currentyear + 1;
					targetmonth = 0;
				}
				targetdate = 1;
		}else{
				targetmonth = currentmonth; targetyear  = currentyear;
		}
		date = new Date( targetyear,targetmonth,targetdate );
	}

	var cc=['日','一','二','三','四','五','六'];
	var shangyige;
	var ondatechange=function(){//比如点击了16,16就是上一个
		if(shangyige){//第一次执行时没有上一个
			shangyige.style.color='black';
		}
		var xx = date.getDate();
		var el = document.getElementById('d'+xx);
		el.style.color = 'blue';
		// el.style.background='white';
		shangyige = el;

		var shang=document.getElementById("shang");
		shang.innerHTML=date.getDate();
		var ss=date.getFullYear()+'年'+(date.getMonth()+1)+'月'+date.getDate()+'日'+'星期'+cc[date.getDay()];
		xia.innerHTML=ss;
		titledate.innerHTML=ss.slice(0,-3);
		
		var daytimeshow=document.getElementById('fangtupian1');
		var image=document.getElementById('image');
		var vv=document.getElementById('vv');
		var xxx=document.getElementById('xxx');
		ajax({
			url:'http://localhost/daypicture?d='+date2string(),//?后的就是发送给服务器的东西！
			onsuccess:function(database){//database现在就是从服务器接收回来的数组
				daytimeshow.innerHTML='';
				// console.log(database);
				if(database!=='none'){
					database=JSON.parse(database);//接收以后把这个东西转成数组
					for(var i=0;i<database.length;i++){
							var el=document.createElement('img');
							el.setAttribute('class','ing');
							el.src='images/'+database[i];
							// console.log('images/'+database[i]);
							daytimeshow.appendChild(el);
							el.onclick=function(){
								vv.style.display='block';
								console.log(this.src);
								image.src=this.src;
							}

					}
				}	
			}
		});
		if(date.getFullYear()==xiannian&&date.getMonth()==xianyue&&date.getDate()==xianri){
			hongx.style.display='block';
			el.style.background='red';
			el.style.color='white';
		}else{
			hongx.style.display='none';
			el.style.background='white';
			el.style.color='black';
		}
	}
	xxx.onclick=function(){
		vv.style.display='none';
	}
	//一个函数不要写超过80行；
	//一行代码不要让编辑器出现航向滚动条
	//一行代码的长度保证打印到纸上不换行；
	//高80 款80；
	//res.json---》{}，[],[{}],{[]}
	//res.send()---> 13 'w我是中国人'；
	
	//画日历
	var rilikuai=document.getElementsByClassName("ti");
	var huarili=function(){
		var i=0;
		//画前一个月的；
		var tmp=date.getDate();
			date.setDate(1);  //setDate()改变日期，看一下1号是星期几
			// console.log(date);
		var xingqi=date.getDay(); //把1号是星期几保存下来
			date.setDate(tmp);
		L=(xingqi==0)?6:xingqi-1;//上个月有几天
		if(date.getMonth()-1==-1){
			var shangyigeyuedetianshu=31;
		}else{
			var shangyigeyuedetianshu=meiyuetianshu[date.getMonth()-1];
		}
		for(;i<L;i++){
			rilikuai[i].innerHTML=shangyigeyuedetianshu-(L - i - 1);
			rilikuai[i].style.color = '#ccc';
			rilikuai[i].removeAttribute('id');
			rilikuai[i].setAttribute("pr",true);
		}//i现在不等于0，等于L
		//画当月的
		console.log(L);
		for(;i < meiyuetianshu[date.getMonth()] + L ;i++){
			// console.log(date.getFullYear(),date.getMonth(),date.getDate());
			rilikuai[i].style.color='black';
			rilikuai[i].setAttribute('id','d'+(i-L+1));//L是每一月1日前面的数
			rilikuai[i].innerHTML = i - L + 1;
			
			rilikuai[i].removeAttribute("pr");
			rilikuai[i].removeAttribute("nx");
		}
		
		//画下一个月的
		var D = i;console.log(D);
		for(;i < 42; i++ ){
			rilikuai[i].setAttribute("nx",true);
			rilikuai[i].removeAttribute('id');
			rilikuai[i].innerHTML = i - D + 1;
			rilikuai[i].style.color = '#ccc';
		}
	};
	huarili();
	ondatechange();
	var rili=document.getElementById('rili');
	rili.onmousedown=function(e){
		e.preventDefault();
	}
   for(var i=0;i<rilikuai.length;i++){
   	rilikuai[i].onclick=function(){
   		var a=date.getFullYear();
   		var b=date.getMonth();
   		var c=date.getDate();
   		var x,y,z;
   		if(this.hasAttribute('id')){
   			date.setDate(this.innerHTML);
   			ondatechange();
   		} else if(this.hasAttribute('pr')){
   			 z=this.innerHTML;
   			 y=b-1;
   			 if(y==-1){
   			 	y=11;
   			 	x=a-1;
   			 }else{
   			 	x=a;
   			 }
   			//根据a b c 得到逻辑正确的x, y,z
   			date=new Date(x,y,z);
   			huarili();
   			ondatechange();
   		}else if(this.hasAttribute('nx')){
   			z=this.innerHTML;
   			y=b+1;
   			if(y==12){
   				x=a+1
   				y=0;
   			}else{
   				x=a;
   			}
   			//根据a b c 得到逻辑正确的x, y,z
   			date=new Date(x,y,z);
   			huarili();
   			ondatechange();
   		}
   	}
   }
	zuojian.onclick = function(){
		previousDay();
		huarili();
		ondatechange();//这个函数专门用来根据日期更新页面显示
	};
	youjian.onclick = function(){
		nextDay();
		huarili();
		ondatechange();
	}
	youjian.onmousedown = function(e){e.preventDefault();};

 	
 	 var bottom=document.getElementById('bottom');
 	 var top=document.getElementById('top');
	 var midum=document.getElementById('midum');
	 midum.onmousedown=function(e){
	 	e.preventDefault();
	 }
	 top.onmousedown=function(e){
	 	e.preventDefault();
	 }
	 bottom.onmousedown=function(e){
	 	e.preventDefault();
	 }

//前往今天
  var  jintian=document.getElementById('front'); 
  jintian.onclick=function(){
  		date=new Date(xiannian,xianyue,xianri);
  		huarili();
  		ondatechange();
  }
}