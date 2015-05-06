// Pulling in scrollTo:

//require('jquery.scrollto');

$( document ).ready(function() {
    
    // Instantiate MixItUp:
    
    $('#Container').mixItUp({
	load: {
	    filter: '.webdev'
	}
    });
    
    $('#PortfolioContainer').mixItUp({
	selectors: {
	    target: '.portfoMix',
	    filter: '.filter-portfo'
	}
    });
    
    // Click Follow function:
    
    $(".click-follow").click(function() {
	$link = $(this).find("a").attr("href"), 
	$linktarget = $(this).find("a").attr("target"), 
	"_blank" === $linktarget ? window.open($link) : window.location.href = $link;
    });
    
    // ScrollTo:
    $('.pageNavLink').click(function(e) {
	
	var divId = '#' + $(this).attr("href");
	$.scrollTo(divId, 1000,{offset: {top:-148, left:0}});
	e.preventDefault();
	$('.pageNavLink').parent().removeClass('current');
	$(this).parent().addClass('current');
    });
   
});

