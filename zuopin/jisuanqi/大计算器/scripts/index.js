window.onload=function(){
	for(var i=0;i<10000;i++){
		console.log(i,String.fromCharCode(i));
	}
	var x="x";
	var fuyi=document.getElementById("fuyi");
	var pingfang=document.getElementById("pingfang");
	var lifang=document.getElementById("lifang");
	// var yci=document.getElementById("yci");
	pingfang.innerHTML=x+String.fromCharCode(178);
	lifang.innerHTML=x+String.fromCharCode(179);
	// yci.innerHTML=x+String.fromCharCode(736);
	// fuyi.innerHTML=x+String.fromCharCode(185);
	
}