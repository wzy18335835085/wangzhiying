window.onload=function(){
	var chuangkou=document.getElementById("you");
	var tupian=document.getElementsByClassName("tupian");
	var radius=document.getElementsByClassName("radius");
	var zuojian=document.getElementById("zuojian");
	var youjian=document.getElementById("youjian");

	tupian[0].style.display="block";
	var yuan=tupian[0];//yuan代表上一张
	radius[0].style.background="white";
	var lai=radius[0];

	var index=0;
	var lun=function(){
			yuan.style.display="none";
			lai.style.background="none";
			tupian[index].style.display="block";
			yuan=tupian[index];
			radius[index].style.background="white";
			lai=radius[index];
			index++;
			if(index==5){index=0};
	};
	var timerId = setInterval(lun,1000);

	for(var i=0;i<radius.length;i++){
		radius[i].w=i;
		radius[i].onmouseover=function(){
			clearInterval(timerId);
			yuan.style.display="none";
			lai.style.background="none";
			index=(this.w==radius.length)?0:this.w;

			tupian[this.w].style.display="block";
			yuan=tupian[this.w];
			radius[this.w].style.background="white";
			lai=radius[index];
			if(this.w>radius.length){i=0;};
		}
		radius[i].onmouseout=function(){
			clearInterval(timerId);
			// timerId=setInterval(lun,1000);
			// radius[this.w].style.background="none";		
		}
	}


	zuojian.onclick=function(){
		clearInterval(timerId);
		yuan.style.display="none";
		var prev=yuan.previousElementSibling;
		if(prev==null){prev=tupian[4];};
		prev.style.display="block";
		yuan=prev;

		lai.style.background="none";
		var qian=lai.previousElementSibling;
		if(qian==null){qian=radius[4];};
		qian.style.background="white";
		lai=qian;
	};
	youjian.onclick=function(e){
		// e.stopPropagation();
		clearInterval(timerId);
		yuan.style.display="none";
		var next=yuan.nextElementSibling;
		if(next==null){next=tupian[0];};
		next.style.display="block";
		yuan=next;

		lai.style.background="none";
		var nextr=lai.nextElementSibling;
		if(nextr==null){nextr=radius[0];};
		nextr.style.background="white";
		lai=nextr;
	};

}