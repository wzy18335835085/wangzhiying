window.onload=function(){
	var nums=document.getElementsByClassName("shu");
	var top=document.getElementById("top");
	var midum=document.getElementById("midum");
	var bottom=document.getElementById("bottom");
	var denghao=document.getElementById("denghao");
	var a="",s="",d="";
	var fuhao=document.getElementsByClassName("fuhao");
	var qinling=document.getElementById("qinling");
	var xiaoshudian=document.getElementById("xiaoshudian");
	
	for(var i=0;i<nums.length;i++){
		nums[i].onclick=function(){
			if(d==""){
				if(this.innerHTML=="."&&a.indexOf(".")!=-1){return};
				a=a+this.innerHTML;top.innerHTML=a;
			}else{
				if(this.innerHTML=="."&&s.indexOf(".")!=-1){return};
				s=s+this.innerHTML;midum.innerHTML=s;
			}	
		}
	}

	for(var i=0;i<fuhao.length;i++){
		fuhao[i].onclick=function(){
			d=this.innerHTML.trim();
		}
	}
	
	
	denghao.onclick=function(){
		
		if(d=="+"){bottom.innerHTML=Number(a)+Number(s);} 
		if(d=="-"){bottom.innerHTML=Number(a)-Number(s);}
		if(d=="*"){bottom.innerHTML=Number(a)*Number(s);}
		if(d=="/"){bottom.innerHTML=Number(a)/Number(s);}
		a="";s="";d="";
	}

	qinling.onclick=function(){
		location.reload();
	}

	var biankuang =	document.getElementById('biankuang');
	biankuang.onmousedown=function(e){
		e.preventDefault();
	}
	var body=document.getElementById('body');
	body.onmousedown=function(e){
		e.preventDefault();
	}
	
}