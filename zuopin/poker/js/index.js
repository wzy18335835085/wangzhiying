window.onload=function(){
	var $=function(a){
		return document.getElementById(a);
	};
	var sence=$('sence'),
		xiaLeft=$('xia_left'),
		xiaRight=$('xia_right'),
		midumTop=$('midum_top'),
		midumBottom=$('midum_bottom');
	var getPoker=function(){
		var dict={},poker=[],
		colors=['ab','cd','ef','gh'];
		while(poker.length!==52){
			var color=colors[Math.floor(Math.random()*4)];
			var number=Math.floor(Math.random()*13+1);
			var key=color+number;
			if(!dict[key]){
				poker.push({color:color,number:number});
				dict[key]=true;
			}
		}
		return poker;
	};
	var tmp=function(){
		var index=0,poker=getPoker(),el,
		guize={1:'A',11:'J',12:'Q',13:'K'};
		for(var i=0;i<7;i++){
			for(var k=0;k<i+1;k++){
				el=document.createElement('div');
				el.setAttribute('class','per shangmian');
				el.setAttribute('id',i+'_'+k);
				el.style.backgroundSize='cover';
				// console.log(poker[index].number);
				el.style.backgroundImage='url(./images/'+poker[index++].color+'.jpg)';
				// console.log(poker[index].number);
				el.setAttribute('data',poker[index].number);
				el.innerHTML=(guize[poker[index].number])?
				guize[poker[index].number]:poker[index].number;
				el.style.top=i*60+'px';
				el.style.left=(6-i)*60+k*120+'px';
				sence.appendChild(el);
			}
		}
		for(var i=0;i<24;i++){
			el=document.createElement('div');
			el.setAttribute('class','per');
			el.setAttribute('data',poker[index].number);
			el.style.backgroundSize='cover';
			el.innerHTML=(guize[poker[index].number])?
				guize[poker[index].number]:poker[index].number;
			el.style.backgroundImage='url(./images/'+poker[index++].color+'.jpg)';
			xiaLeft.appendChild(el);
		}
	};
	tmp();

	var previous;
	var iswin=function(){
		var shangmians=document.getElementsByClassName('shangmian');
		if(shangmians.length==0){
			return true;
		}
		return false;
	}

	var isFree=function(el){
		var x=Number(el.getAttribute('id').split('_')[0]);
		var y=Number(el.getAttribute('id').split('_')[1]);
		if($((x+1)+'_'+y)||$((x+1)+'_'+(y+1))){
			return false;
		}
		return true;
	}

	sence.onclick=function(e){
		var el=e.target;
		if((el==this||el==midumBottom||el==midumTop||el.hasAttribute('id'))&& !isFree(el) ){//???????????????????????
			// console.log(1);
			if(previous){
				previous.style.border='none';
				previous=null;
			}
			return;
		}
		// console.log(1);
		if(el.getAttribute('data')=='13'){
			el.parentElement.removeChild(el);
			return;
		}
		if(previous&&Number(previous.getAttribute('data'))+Number(el.getAttribute('data'))==13){
			// console.log(1)
			previous.parentElement.removeChild(previous);
			el.parentElement.removeChild(el);
			previous=null;
			return;
		}
		if(previous){
			previous.style.border='none';
		}
		el.style.border='2px solid red';
		previous=el;
	};


	sence.onmousedown=function(e){
		e.preventDefault();
	};
	
	midumTop.onclick=function(){
		if(!xiaLeft.children.length){return;}
		xiaRight.appendChild(xiaLeft.lastElementChild);
	}
	midumBottom.onclick=(function(){
		var count=0;
		return function(){
			if(count==3||xiaLeft.children.length!=0) return;
			while(xiaRight.children.length){
				xiaLeft.appendChild(xiaRight.lastElementChild);
			}
			count++;
		};
	})();
	



























};