$aplc_slider_li=$('#aplc_slider li');
$computer_slider_li=$('#computer_slider li');
$phone_slider_li=$('#phone_slider li');

$aplc_pots=$('#aplc_slide_pots i');
$computer_pots=$('#computer_slide_pots i');
$phone_pots=$('#phone_slide_pots i');

slideshow($aplc_slider_li,$aplc_pots);
slideshow($computer_slider_li,$computer_pots);
slideshow($phone_slider_li,$phone_pots);

function slideshow(slider,pots){
	pots.hover(function(){
		$(this).addClass('active').siblings().removeClass();
		slider.eq($(this).index()).show().siblings().hide();
	})
}

