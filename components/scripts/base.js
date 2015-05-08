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
    
    // Click Follow function: (find link within the area and make the whole area a link)
    
    $(".click-follow").click(function() {
	$link = $(this).find("a").attr("href"), 
	$linktarget = $(this).find("a").attr("target"), 
	"_blank" === $linktarget ? window.open($link) : window.location.href = $link;
    });
    
    // Page nav behaviour - incl. scrollTo:
  
    $('.pageNavLink').click(function(e) {
	//console.log('start');
	
	// when clicked scroll to relevant section
	var divId = '#' + $(this).attr("href");	
	$.scrollTo(divId, 1000,{offset: {top:-148, left:0}});
	e.preventDefault();
	
	// make relevant page nav element appear current/selected 
	$('.pageNavLink').parent().removeClass('current');
	$(this).parent().addClass('current');
	
	// remove 'current' class from 'back to top' element after some time:

	if(($(this).attr("href") === 'Hero') && ($(this).parent().hasClass('current'))) {
		
		$this = $(this);
		setTimeout(function(){ 
		    $this.parent().removeClass('current');
		}, 3000);
		
		//console.log('hello');
	    //}else{
		//console.log('goodbye');
	    } 
	    
	/*$(this).parent().addClass('current', 100, '', function(){
	    console.log('add class callback');
	    if(($(this).attr("href") === 'Hero') && ($(this).parent().hasClass('current'))) {
		//$(this).parent().delay(600).removeClass('current');
		//alert('Got it!');
		console.log('hello');
	    }else{
		console.log('goodbye');
	    } 
	});*/
   
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
		
	    } else {
		this.classList.add("active");
		$('#PageNav nav').slideDown(600);
	    }
	  });
	}

    })();

   // (function() {
	//if($('.cmn-toggle-switch').hasClass('active')) {
	   // $('#PageNav nav').addClass('open');
	   // alert('active!');
	//}
   // })();
});

