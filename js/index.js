window.onload=function(){
    var con=document.getElementsByName("container")[0];
    var top1=document.getElementsByClassName("backtop")[0];
    var SEC=5,TIME=20;
    top1.onclick=function(){
        var start=document.body.scrollTop;
        var off=start/TIME/SEC;
        clearInterval(timerId);
        var timerId=setInterval(function(){
            document.body.scrollTop=start;
            start=start-off;
            if(start<=0){
                clearInterval(timerId);
            }
        },SEC)
    }

    var dians=document.getElementsByClassName("ridus");
    var kuais=document.getElementsByClassName("bg");
    var tiao=document.getElementById("side");

    var cha=tiao.getBoundingClientRect().top;
    var timeId,start,end,xishu;
    for(var i=0;i<dians.length;i++){
        dians[i].index=i;
        dians[i].onclick=function(){
            start=document.body.scrollTop;
            end=kuais[this.index].offsetTop-cha;
            var off=Math.abs(start-end)/20;//20（总时间）最后求出的是mei次yidongde距离
            if(start<end){xishu=1;}else{xishu=-1};
            clearInterval(timeId);
            timeId=setInterval(function(){
                document.body.scrollTop=start;
                start+=xishu*off;
                if((xishu>0)?(start>end):(start<end)){
                    clearInterval(timeId);
                }
            },1);//1 代表间隔
        }
    }
    var xiaan=document.getElementsByClassName("as");
    for(var i=0;i<xiaan.length;i++){
        var index=i;
        xiaan[index].onclick=function(){
            document.body.scrollTop+=750;
        }
    }
//lunbo
        var chuangkou=document.getElementById("chuangkou");
        var tupian=document.getElementsByClassName("kapian");
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
            if(index==7){index=0};
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
            if(prev==null){prev=tupian[3];};
            prev.style.display="block";
            yuan=prev;

            lai.style.background="none";
            var qian=lai.previousElementSibling;
            if(qian==null){qian=radius[3];};
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

        //var yc=document.getElementsByClassName("yc")[0];
        //var zhans=document.getElementsByClassName("zhans")[0];
        //zhans.onmouseover=function(){
        //    yc.style.display="block";
        //    yc.style.height=260+"px";
        //}
        //zhans.onmouseout=function(){
        //    yc.style.display="none";
        //    yc.style.height=1+"px";
        //}
        $(".zhans").hover(function(){
            $(".yc").finish();
            $(this).find(".yc").slideDown();
            //$(this).click(function(){
            //    $(".fangda").show();
            //    var index=$(".zhans").index();
            //    var src=$(this).find(".ab").attr("src");
            //    $($(".fd")[0]).attr("src",src);
            //});
        },function(){
            $(".yc").finish();
            $(".yc").slideUp();
        });
//顶部链接跳转
        $(".daoh").click(function(){
            var inss = $(this).index(".daoh");
            $(window).scrollTop($(".bg")[inss].offsetTop-10);
        })

    //fangda
    //    $(".zhans").find(".yc").find(".liaoj").click(function(){
    //        $(".fangda").css({display:block});
    //    })




}



