$lis=$('#swiper_wrap li');
$dotLis=$('#dots li');

var index=0;

$('#arrow_right').click(function () { 
    if($lis.is('anitmated')){
        return
    }
   if(index<$lis.length-1){
        index++
   }else{
       index=0
   }
   goChange()
});

$('#arrow_left').click(function () { 
    if($lis.is('anitmated')){
        return
    }
   if(index>0){
        index--
   }else{
       index=$lis.length-1
   }
   goChange()
});

$dotLis.mouseenter(function(){
    if($lis.is('anitmated')){
        return
    }
    index=$(this).index();
   goChange()
})

function goChange(){

    $lis.eq(index).addClass('swiper_slide_active')
    .siblings().removeClass('swiper_slide_active');
    $dotLis.eq(index).addClass('bullet_active')
    .siblings().removeClass('bullet_active');
}