window.onload=function(){

//---------------------------下拉----------
  $('.hov').hover(function(){
  	$(this).find('.xla').show();
  },function(){
  	$(this).find('.xla').hide();
  })
  //--------------左隐藏
  var array=['#AB77FF','#607DFF','#B90AF9','#69D2B4','#F8F3D6','#AB77FF','#607DFF','#B90AF9','#69D2B4','#F8F3D6','#AB77FF','#607DFF','#B90AF9','#69D2B4','#F8F3D6'];
  var previous;
  $('.lefthide').hover(function(){
  	$(this).find('.yinyi').show();
    var index=$('.lefthide').index(this);
    $($('.beijing')[index]).show();
    $($('.bian')[index]).show();
    $('.header-2')[0].style.background=array[index-1];
    setInterval(timerId);
    if(previous){
      previous.hide();
    }
  },function(){
    var index=$('.lefthide').index(this);
  	$(this).find('.yinyi').hide();
    $($('.bian')[index]).hide();
    previous=$($('.beijing')[index]);
  })

  $('.lefthide').hover(function(){
  	$(this).find('.cang').show();
    clearInterval(timerId);
  },function(){
  	$(this).find('.cang').hide();
     clearInterval(timerId);
  })
   $("#jing").mouseover(function(){
        timerId = setInterval(lunbo,1000);
    })
  //---------------lunbo--------
    var colors=['#FF002A','#E8E8E8','#DBDBDB','#DBDBDB','#E3174C','#EC284C'];
    var index = 0;
    var radius=document.getElementsByClassName('radius');
    var lunbo  =  function(){
      index += 1;
      if( index === $('.banana').length ){
        index = 0;
      }
      $('.banana').hide();
      var el = $('.banana')[index];
       $('.header-2')[0].style.background=colors[index];
      $(el).show();

      $('.radius').removeClass('red');
      $($('.radius')[index]).addClass('red');
    }
    $('.radius').each(function(i){
      $(this).data('index',i)
    });

    $('.radius').hover(function(){
      clearInterval(timerId);
      $('.radius').removeClass('red');
      $(this).addClass('red');
      var i = $(this).data('index');
      $('.banana').hide();
      $( $('.banana')[i] ).show();
      index = i;
    },function(){
      clearInterval(timerId);
      timerId = setInterval(lunbo,1000);
    });
    var timerId = setInterval(lunbo,1000);

   
  //----------------------楼层-----------
  $('.leftyi').each(function(i){
    $(this).data('index',i);
  });
  $('.leftyi').click(function(){
    var i=$(this).data('index');
    var newtop=$($('.dak')[i]).offset().top-50;
    $({top:$(window).scrollTop()}).animate(
      {top:newtop},
      {duration:700,
        step:function(){
          $(window).scrollTop(this.top);
        }});
  });
//---------------totop---------------------
  $(".totop").click(function(){
    $({top: $(window).scrollTop()}).animate(
      {top: 0},
      {duration: 700,
       step: function() {
           $(window).scrollTop(this.top);
        }
      }
    );
  });
//----------------fixtop-----------
  var ti;
  $(window).scroll(function(){
    if($(window).scrollTop() > 300){
      clearTimeout(ti);
      ti = setTimeout(function(){
        $('.fixtop').show();
      },500);
      if($(window).scrollTop()>800){
        clearTimeout(ti);
        ti=setTimeout(function(){
          $('.piao').show();
          $('.totop').show();
        })
      }
    }else{
      clearTimeout(ti);
      $('.fixtop').hide();
       $('.piao').hide();
       $('.totop').hide();
    };
  });

//-----------------dong---------------
   $('.da').hover(function(){
    $(this).css({position:'relative'});
    $(this).stop();
    $(this).animate({left:-10},200);
  },function(){
    $(this).stop();
    $(this).animate({left:0},200);
  });

   $('.small').hover(function(){
    $(this).css({position:'relative'});
    $(this).stop();
    $(this).animate({left:-10},200);
  },function(){
    $(this).stop();
    $(this).animate({left:0},200);
  });
//-------------youpiao----------------
   $('.right').hover(function(){
       $(this).find('.ypy').show(0,function(){
        $(this).animate({left:-80},200);
      });
     },function(){
    $(this).find('.ypy').css({left:-80}).hide();
  });

   $('.lis-9').hover(function(){
       $(this).find('.ypy').show(0,function(){
        $(this).animate({left:-160},200);
      });
     },function(){
    $(this).find('.ypy').css({left:-180}).hide();
  });
//--------------------------选项卡----------------
  var xxk=document.getElementsByClassName("xuanxiangka");
  var xia=document.getElementsByClassName("ersan");
  xxk[0].style.background="red";
  var shangcinage=xxk[0];
  for(var i=0;i<xxk.length;i++){
    xxk[i].index=i;
    xxk[i].onclick=function(){
      for(var i=0;i<xia.length;i++){
        xia[i].style.display="none";
        shangcinage=xxk[index];
      }
      this.style.background="red";
      this.style.cursor="pointer";
      xia[this.index].style.display="block";
    }
  }
  xxk.onmousedown=function(e){
     e.preventDefault();
  }

//---------------------------zuolunbo--------------

 $(function(){
   var imgs= $('.xiaolie .xiaokuan'),
       index=0,next=0;
       $(imgs[index]).attr('style',function(){return 'left:0'});
       var move=function(){
        index++;
        if(index==3){
          index=0;
        }
        $(imgs[next]).animate({left:-90},300);
        $(imgs[index]).animate({left:0},300);
        $(imgs[next]).animate({left:90},1);
        
        next=index;
       };
       var time=setInterval(move,1000);
});

  $(function(){
   var imgs= $('.xiaolie2 .xiaokuan'),
       index=0,next=0;
       $(imgs[index]).attr('style',function(){return 'left:0'});
       var move=function(){
        index++;
        if(index==3){
          index=0;
        }
        $(imgs[next]).animate({left:-90},300);
        $(imgs[index]).animate({left:0},300);
        $(imgs[next]).animate({left:90},1);
        
        next=index;
       };
       var time=setInterval(move,1000);
  });

   $(function(){
   var imgs= $('.xiaolie3 .xiaokuan'),
       index=0,next=0;
       $(imgs[index]).attr('style',function(){return 'left:0'});
       var move=function(){
        index++;
        if(index==3){
          index=0;
        }
        $(imgs[next]).animate({left:-90},300);
        $(imgs[index]).animate({left:0},300);
        $(imgs[next]).animate({left:90},1);
        
        next=index;
       };
       var time=setInterval(move,1000);
  });

    $(function(){
   var imgs= $('.xiaolie4 .xiaokuan'),
       index=0,next=0;
       $(imgs[index]).attr('style',function(){return 'left:0'});
       var move=function(){
        index++;
        if(index==3){
          index=0;
        }
        $(imgs[next]).animate({left:-90},300);
        $(imgs[index]).animate({left:0},300);
        $(imgs[next]).animate({left:90},1);
        
        next=index;
       };
       var time=setInterval(move,1000);
  });

     $(function(){
   var imgs= $('.xiaolie5 .xiaokuan'),
       index=0,next=0;
       $(imgs[index]).attr('style',function(){return 'left:0'});
       var move=function(){
        index++;
        if(index==3){
          index=0;
        }
        $(imgs[next]).animate({left:-90},300);
        $(imgs[index]).animate({left:0},300);
        $(imgs[next]).animate({left:90},1);
        
        next=index;
       };
       var time=setInterval(move,1000);
  });

      $(function(){
   var imgs= $('.xiaolie6 .xiaokuan'),
       index=0,next=0;
       $(imgs[index]).attr('style',function(){return 'left:0'});
       var move=function(){
        index++;
        if(index==3){
          index=0;
        }
        $(imgs[next]).animate({left:-90},300);
        $(imgs[index]).animate({left:0},300);
        $(imgs[next]).animate({left:90},1);
        
        next=index;
       };
       var time=setInterval(move,1000);
  });

  $(function(){
   var imgs= $('.xiaolie7 .xiaokuan'),
       index=0,next=0;
       $(imgs[index]).attr('style',function(){return 'left:0'});
       var move=function(){
        index++;
        if(index==3){
          index=0;
        }
        $(imgs[next]).animate({left:-90},300);
        $(imgs[index]).animate({left:0},300);
        $(imgs[next]).animate({left:90},1);
        
        next=index;
       };
       var time=setInterval(move,1000);
  });

   $(function(){
   var imgs= $('.xiaolie8 .xiaokuan'),
       index=0,next=0;
       $(imgs[index]).attr('style',function(){return 'left:0'});
       var move=function(){
        index++;
        if(index==3){
          index=0;
        }
        $(imgs[next]).animate({left:-90},300);
        $(imgs[index]).animate({left:0},300);
        $(imgs[next]).animate({left:90},1);
        
        next=index;
       };
       var time=setInterval(move,1000);
  });


 $(function(){
   var imgs= $('.xiaolie9 .xiaokuan'),
       index=0,next=0;
       $(imgs[index]).attr('style',function(){return 'left:0'});
       var move=function(){
        index++;
        if(index==3){
          index=0;
        }
        $(imgs[next]).animate({left:-90},300);
        $(imgs[index]).animate({left:0},300);
        $(imgs[next]).animate({left:90},1);
        
        next=index;
       };
       var time=setInterval(move,1000);
  });


 $(function(){
   var imgs= $('.xiaolie10 .xiaokuan'),
       index=0,next=0;
       $(imgs[index]).attr('style',function(){return 'left:0'});
       var move=function(){
        index++;
        if(index==3){
          index=0;
        }
        $(imgs[next]).animate({left:-90},300);
        $(imgs[index]).animate({left:0},300);
        $(imgs[next]).animate({left:90},1);
        
        next=index;
       };
       var time=setInterval(move,1000);
  });


 $(function(){
   var imgs= $('.xiaolie11 .xiaokuan'),
       index=0,next=0;
       $(imgs[index]).attr('style',function(){return 'left:0'});
       var move=function(){
        index++;
        if(index==3){
          index=0;
        }
        $(imgs[next]).animate({left:-90},300);
        $(imgs[index]).animate({left:0},300);
        $(imgs[next]).animate({left:90},1);
        
        next=index;
       };
       var time=setInterval(move,1000);
  });


 $(function(){
   var imgs= $('.xiaolie12 .xiaokuan'),
       index=0,next=0;
       $(imgs[index]).attr('style',function(){return 'left:0'});
       var move=function(){
        index++;
        if(index==3){
          index=0;
        }
        $(imgs[next]).animate({left:-90},300);
        $(imgs[index]).animate({left:0},300);
        $(imgs[next]).animate({left:90},1);
        
        next=index;
       };
       var time=setInterval(move,1000);
  });

//---------------che======

// $("#gog").mouseenter(function(){
//   $("#go").animate({ 
//     width: "100%",
//     height: "100%", 
//     marginLeft:"0px"
//   }, 5000 );
// });
$('#go').hover(function(){
    $(this).css({position:'relative'});
    $(this).stop();
    $(this).animate({left:-40},200);
  },function(){
    $(this).stop();
    $(this).animate({left:0},200);
  });










  
};