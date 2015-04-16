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
    
    $(".click-follow").click(function() {
	$link = $(this).find("a").attr("href"), 
	$linktarget = $(this).find("a").attr("target"), 
	"_blank" === $linktarget ? window.open($link) : window.location.href = $link;
    });
    

});