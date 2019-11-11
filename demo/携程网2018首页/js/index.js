var container=document.getElementById('swiper_container');
var wrap=document.getElementById('swiper_wrap');
var lis=document.getElementsByClassName('swiper_slide');
var dotsBar=document.getElementById('dots');

var dots=[];
var state={
    index:0,
    beginX:0,
    nowX:0,
    endX:0,
}

//导航点生成
var createDots=function(i){
    var dotLis=document.createElement('li');
    dotLis.classList.add('bullet');
    //给创建的第一项加active
    if(i===0){
        dotLis.classList.add('bullet_active');
    }
    //放到数组里，用来识别第一项
    dots.push(dotLis);
    dotsBar.appendChild(dotLis);
}

//导航条样式切换
var setDots=function(){
    for(var i=0;i<dots.length;i++){
        dots[i].classList.remove('bullet_active');
    }
    dots[state.index].classList.add('bullet_active');
}

//图片li自适应宽度,导航点自动生成
for(var i=0;i<lis.length;i++){
    lis[i].style.width=window.innerWidth+'px';
    createDots(i);
}

//滑动跟手
function slice(){
    var deltaX=state.nowX-state.beginX;
    wrap.style.marginLeft=(-window.innerWidth*state.index)+deltaX+'px';
}

//滑动距离不足时返回滑动前图片
function reset(){
    wrap.style.transition='.3s margin';
    wrap.style.marginLeft=(-state.index*window.innerWidth)+'px';
}

//判断往前滑动还是向后滑动
function judge(){
    var deltaX=state.endX-state.beginX;
    if(deltaX>=window.innerWidth*2/5){
        goPre()
    }else if(deltaX<=window.innerWidth*2/5){
        goNext()
    }else{
        reset()
    }
}

//上一张，index--
function goPre(){
    if(state.index>0){
        state.index--;
        wrap.style.transition='.3s margin';
        wrap.style.marginLeft=-state.index*window.innerWidth+'px'
        setDots();
    }else{
        state.index=0;
        reset();
    }
}

//下一张，index++
function goNext(){
    if(state.index<lis.length-1){
        state.index++;
        wrap.style.transition='.3s margin';
        wrap.style.marginLeft=-state.index*window.innerWidth+'px'
        setDots();
    }else{
        state.index=lis.length-1;
        reset();
    }
}


//记录触摸开始，移动中，结束的位置
container.addEventListener('touchstart',function(e){
    wrap.style.transition='none';
    state.beginX=e.targetTouches[0].clientX;
})
container.addEventListener('touchmove',function(e){
    state.nowX=e.changedTouches[0].clientX;
    slice();
})
container.addEventListener('touchend',function(e){
    state.endX=e.changedTouches[0].clientX;
    judge();
})