$( document ).ready(function() {
    
    // Instantiate MixItUp:
    
    $('#Container').mixItUp({

    });
    
    $('#PortfolioContainer').mixItUp({
	selectors: {
	    target: '.portfoMix',
	    filter: '.filter-portfo',
	    sort: '.sort-portfo'
	}
    });
});