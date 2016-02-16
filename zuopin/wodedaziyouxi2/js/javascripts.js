window.onload=function(){
	var da=document.getElementById("da");
	var xiao=document.getElementsByClassName("xiao");
	// var red=Math.floor(Math.random()*255);
	// var green=Math.floor(Math.random()*255);
	// var blue=Math.floor(Math.random()*255);
	// var yellow=Math.floor(Math.random()*255);
	// da.style.background="rgba("+red+","+green+","+blue+",0.8)";
	
	for(var i=0;i<50;i++){
		// xiao[i].style.background="rgba("+red+","+green+","+yellow+",0.8)";		
		var aa=65+Math.floor(Math.random()*57);
		if(65<=aa&&aa<=90||97<=aa&&aa<=122){
			xiao[i].innerHTML=String.fromCharCode(aa);
		}
		
		while(90<aa&&aa<97){
		aa=65+Math.floor(Math.random()*57);
		xiao[i].innerHTML=String.fromCharCode(aa);
		}

		var cc=document.createElement("div");
		cc.setAttribute("class","jishi");
		var time=0;
		cc.innerHTML=time;
		da.appendChild(cc);

		var input=document.getElementById("input");

		input.onclick=function(){
			document.onkeydown=function(e){//onkeydown是小写
			var top=da.firstElementChild;
			if(e.shiftKey){
				if(e.keyCode!==top.innerHTML.charCodeAt(0))  return;
			}else{
				if(e.keyCode+32!==top.innerHTML.charCodeAt(0)) return;
			}
			da.removeChild(top);
			if(da.children.length==0){location.reload();}	
		}

			
			var timeId=setInterval(function(){
				time++
				cc.innerHTML=time;
				if(time==60){
					alert("再来一次");
					clearInterval(timeId);
					location.reload();	
					}
				if(xiao.length==0){
					alert("你真棒！");
					clearInterval(timeId);
				}					 
			},1000)
			
		}

		
	}

	   var clock=document.getElementsByClassName("clock")[0];
         createMark();
         var time=new Date();
         var h=time.getHours();
         var m=time.getMinutes();
         var s=time.getSeconds();
         var hp=createPointer(30,6,"#000",30*h-90+(6*m)/12);
         var mp=createPointer(50,4,"green",6*m-90);
         var sp=createPointer(70,2,"red",6*s-90);

        setInterval(function(){
            var time=new Date();
            var h=time.getHours();
            var m=time.getMinutes();
            var s=time.getSeconds();
            hp.style.transform="translate(100px,"+hp.t+"px) rotate("+(30*h-90+(6*m)/12)+"deg)";
            mp.style.transform="translate(100px,"+mp.t+"px) rotate("+(6*m-90)+"deg)";
            sp.style.transform="translate(100px,"+sp.t+"px) rotate("+(6*s-90)+"deg)";
        },1000)
         //刻度
         function createMark(){
             for(var i=0;i<60;i++){
                 var w, h,l;
                 if(i%5==0){
                    w=4;
                     h=10;
                 }else{
                     w=2;
                     h=6;
                 }
                 l=(200-w)/2;
                 var div=document.createElement("div");
                 div.style.cssText="width:"+w+"px;height:"+h+"px;background:#000;position:absolute;left:0;top:0";
                 div.style.transform="translate("+l+"px,0px) rotate("+i*6+"deg)";
                 div.style.transformOrigin="center 100px";
                 clock.appendChild(div);
             }
         }
         //指针
         function createPointer(w,h,c,a){
            var div=document.createElement("div");
            var t=(200-h)/2;
             div.t=t;
            div.style.cssText="width:"+w+"px;height:"+h+"px;background:"+c+";position:absolute;left:0;top:0;transform:translate(100px,"+t+"px) rotate("+a+"deg);transform-origin:left center";
            clock.appendChild(div);
             return div;
        }

}