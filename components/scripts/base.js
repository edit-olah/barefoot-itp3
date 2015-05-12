
// defining bftip_timeout function for page nav and hamburger menu icon behaviour, and put it into a global variable:

var timeoutId = function bfitp_timeout ($time){
    setTimeout(function(){ 
	console.log('TIMEOUT - from bfitp_timeout function');
	// slide up/close page nav:
	$('#PageNav nav').slideUp(600);
	// make hamburger menu icon inactive:
	$('.cmn-toggle-switch').removeClass('active');
	console.log('hamburger menu is now inactive - from bfitp_timeout function');
	
	// remove recorded data string against page nav link:
	$('.pageNavLink').removeData('clicked');
	console.log('pageNavLink data is removed: - from bfitp_timeout function');
	console.log($('.pageNavLink').data());
	
	console.log('TIMEOUT completed - from bfitp_timeout function');
    }, $time);
};


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
    
    // Click Follow function: (find link within the area and make the whole area a link):
    
    $(".click-follow").click(function() {
	$link = $(this).find("a").attr("href"), 
	$linktarget = $(this).find("a").attr("target"), 
	"_blank" === $linktarget ? window.open($link) : window.location.href = $link;
    });
    
    // Page nav behaviour - incl. scrollTo:
  
    $('.pageNavLink').click(function(e) {
	e.stopPropagation();
	
	// when clicked scroll to relevant section:
	var divId = '#' + $(this).attr("href");	
	$.scrollTo(divId, 1000,{offset: {top:-160, left:0}});
	e.preventDefault();
	
	// make relevant page nav element appear current/selected: 
	$('.pageNavLink').parent().removeClass('current');
	$(this).parent().addClass('current');
	
	// record data (clicked string) against .pageNavLink:
	$('.pageNavLink').data('clicked', true);
	console.log('pageNavLink data is recorded: - from pageNavLink click event');
	console.log($('.pageNavLink').data());
	
	
	
	// if Hamburger Menu is active and therefore pageNav is visible (when this pageNavLink li is clicked): 
		
	if(($('.cmn-toggle-switch').hasClass('active')) && ($('.pageNavLink').data('clicked') === true)){
	    
	    console.log('start conditional behaviour when pageNavLink is clicked and ham icon is active');
	    timeoutId(2000);
	    console.log('TIMEOUT called - from conditional statement');

	    
	}
	

	// remove 'current' class from 'back to top' element after some time:
	if(($(this).attr("href") === 'Hero') && ($(this).parent().hasClass('current'))) {
		
		$this = $(this);
		setTimeout(function(){ 
		    $this.parent().removeClass('current');
		}, 3000);
	    } 
	    
	
   
    });
    
    // Hamburger menu behaviour: - Source/Author: Call Me Nick
    
    (function() {

	"use strict";

	var toggles = document.querySelectorAll(".cmn-toggle-switch");

	for (var i = toggles.length - 1; i >= 0; i--) {
	  var toggle = toggles[i];
	  toggleHandler(toggle);
	};

	function toggleHandler(toggle) {
	  toggle.addEventListener( "click", function(e) {
	    e.preventDefault();
	    
	    //original line of code: (this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
	    // amended line of code:
	    
	    if(this.classList.contains("active") === true) {
		this.classList.remove("active");
		$('#PageNav nav').slideUp(600);
		console.log('HAMburger menu is now INACTIVE');
		$('.pageNavLink').removeData('clicked');
		console.log('pageNavLink data is removed: - from HAM INACTIVE');
		console.log($('.pageNavLink').data());
		clearTimeout(timeoutId);
		console.log('timeout CLEARED - from HAM INACTIVE');
		
		
	    } else {
		this.classList.add("active");
		$('#PageNav nav').slideDown(600);
		console.log('HAMburger menu is now ACTIVE');

	    }
	  });
	}

    })();

});



