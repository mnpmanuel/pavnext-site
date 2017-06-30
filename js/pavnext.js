//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });
});

$(document).ready(function(){
	// Initialize WOW.js Scrolling Animations
    new WOW().init();
});

$(document).ready(function(){
    $('.awesome-tooltip').tooltip({
        placement: 'left'
    });
});

$(document).ready(function(){
	$('#dot-nav li').click(function(){
      
        var id = $(this).find('a').attr("href"),
          posi,
          ele,
          padding = 0;
      
        ele = $(id);
        posi = ($(ele).offset()||0).top - padding;
      
        $('html, body').animate({scrollTop:posi}, 'slow');
      
        return false;
    });
});