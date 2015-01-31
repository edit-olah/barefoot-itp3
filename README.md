# Barefoot in the park portfolio website project

This is the portfolio website of Edit Olah and Peter Whyte.
Here we gather information on what we are working on and what strikes our interest.

This website, in itself, is a portfolio project.

_______________________________________________________


# Here are some learning points and credits to the wonderful material available online:

## 1. workflow setup
Web Project Workflows with Gulp.js, Git, and Browserify
http://www.lynda.com/Web-Web-Design-tutorials/Web-Project-Workflows-Gulpjs-Git-Browserify/154416-2.html

- - - - - - - - - - - - - -

## 2. SASS and Compass
Responsive CSS with Sass and Compass with Ray Villalobos
http://www.lynda.com/CSS-tutorials/Responsive-CSS-Sass-Compass/140777-2.html

- - - - - - - - - - - - - -

## 3. Font sizing with rem - Jonathan Snook
http://snook.ca/archives/html_and_css/font-size-with-rem

> rem = "root em"
> 'The em unit is relative to the font-size of the parent'
> 'The rem unit is relative to the root—or the html—element.'
> html { font-size: 62.5%; } //if browser default is 16px (font-size on <html> level), this equals 10px -> 10px = 0.625rem
> For IE8, specify a px fall-back:
	body { font-size: 14px; font-size: 1.4rem; } /* =14px */

- - - - - - - - - - - - - -
	
## 4. Font Size Idea: px at the Root, rem for Components, em for Text Elements - Published April 8, 2014 by Chris Coyier
http://css-tricks.com/rems-ems/

comment from 'Olivvv':
> borders, margins									: px
> widths - for layout elements						: rem
> fonts and everything that is relative to fonts	: em

- - - - - - - - - - - - - -

## 5. inline-block grid and justify
Text-align: Justify and RWD - March 12, 2013 by Patrick Kunka
http://www.barrelny.com/blog/text-align-justify-and-rwd/

> justified horizontal nav menu and grid structure (no floats, no clearfixes, no columns)

> explanation: 'by default, HTML flows inline and horizontally across the page, left to right, line by line. By using text-align: justify, we are harnessing this characteristic instead of fighting against it with floats and absolute positioning.'

> the technique:

 -- can be used 'on IE7 and up (with a few small IE7 hacks!)'
 -- demo: http://codepen.io/patrickkunka/pen/GECBF -- 'fluid, dynamic element height via the old padding-top trick'
 -- with filtering functionality: MIXITUP :: https://mixitup.kunkalabs.com/
 
	>> 'apply ‘text-align: justify’ to the container'

	>> inline-block elements with widths in percentage 

	>> '‘text-align: justify’ will not work unless the contents of the line are long enough to cause a line-break. Otherwise, the text remains left aligned.'
	'solve this problem by giving 100% width to an invisible inline element at the end of the line'

	>> 'setting ‘font-size: 0.1px;’ to the container' and '‘vertical-align: top’ to the child elements'
	(when using inline-block, you might need to adjust or remove 'various typographic CSS properties, including font-size, line-height, vertical-align and word-spacing' as they affect 'your layout’s whitespace' :: 'In 99% of cases, setting ‘font-size: 0.1px;’ to the container and ‘vertical-align: top’ to the child elements should do the trick.')

>> Caveat 1:

	>>> 'forcing each row to “break” before it will justify':
	
		>>>> 'Applying an ::after pseudo-element to the container:
		
			#Grid:after{
				content: '';
				display: inline-block;
				width: 100%;
			}'
			
>> Caveat 2:

	>>> when 'we don’t have control over the number of elements in our grid':
	
		>>>> 'add invisible “placeholder” elements' 'at the end of your grid' to complete the row of the required number of elements:
		
			>>>>> 'To account for any and all possible numbers of elements on the last row, the number of “placeholder” elements you will need to add is equal to -!!!- the maximum number of elements per row, minus 2 -!!!- .'
			
			>>>>> 'These elements should be inserted at the end of your grid (before the “break” element if you are not using a pseudo-element to break the row) and then left alone. Since they do not occupy any vertical space, the “placeholder” elements won’t affect the layout if the last row is full or if your site is responsive and the number of elements per row changes. As long as you have enough placeholders for the widest view, you’ll be fine.'
			
			>>>>> 'semantic implications' :: 'as there is no way to create any of these placeholders using pseudo-elements. On a grid where the last row will always have the maximum number of elements, we don’t need to use placeholders at all (just a break), but in most CMS situations they are necessary, and should be hard-coded into your HTML.'

- - - - - - - - - - - - - -

