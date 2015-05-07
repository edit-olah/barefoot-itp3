# Barefoot in the park portfolio website project

This is the portfolio website of Edit Olah and Peter Whyte.
Here we gather information on what we are working on and what piques our interest.

This website, in itself, is a portfolio project.

_______________________________________________________


# Here are some learning points and credits to the wonderful material available online:

## 1. workflow setup
Web Project Workflows with Gulp.js, Git, and Browserify
http://www.lynda.com/Web-Web-Design-tutorials/Web-Project-Workflows-Gulpjs-Git-Browserify/154416-2.html

- - - - - - - - - - - - - -

## 2. SASS and Compass
> Responsive CSS with Sass and Compass with Ray Villalobos
http://www.lynda.com/CSS-tutorials/Responsive-CSS-Sass-Compass/140777-2.html

> SASS documentation
http://sass-lang.com/documentation/file.SASS_REFERENCE.html

> SASS basics
http://sass-lang.com/guide

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

## 6. Zero-width Web Font
'Zero-width web fonts allow us to clear the whitespace between inline-block elements without having to declare font-size: 0; on the parent element.'
https://github.com/patrickkunka/zero-width

'Various IE versions do not like font-size: 0; so font-size: 0.1px; is often suggested as an alternative. However, FireFox does not like font-size: 0.1px and rounds it up, negating its use. Using a "zero-width" font on our element provides us with whitespace clearing accross all font-face compatible browsers.'

'Once the files and CSS have been correctly included in your project, you may apply the font to whichever element you which to clear whitespace on. This is typically the parent element that contains inline-block elements.'



## 7. fluid, dynamic element height with padding-top trick
Creating Intrinsic Ratios for Video - by THIERRY KOBLENTZ May 26, 2009
http://alistapart.com/article/creating-intrinsic-ratios-for-video
> 'set padding in a percentage, based on the width of the containing block' - 'a container that proportionally resizes itself depending on the width of its parent'

- - - - - - - - - - - - - -

## 8. text-size-adjust CSS property
https://developer.mozilla.org/en-US/docs/Web/CSS/text-size-adjust

> browser compatibility:
https://developer.mozilla.org/en-US/docs/Web/CSS/text-size-adjust#Browser_compatibility

> vendor prefixes
https://wiki.mozilla.org/CSS/text-size-adjust

- - - - - - - - - - - - - -

## 9. viewport meta tag
Creating a Mobile-First Responsive Web Design
http://www.html5rocks.com/en/mobile/responsivedesign/#toc-style-mobilefirst
<meta name="viewport" content="width=device-width, initial-scale=1" />


> Configuring the Viewport
https://developer.apple.com/library/ios/documentation/AppleApplications/Reference/SafariWebContent/UsingtheViewport/UsingtheViewport.html

>Responsive Web Design: Layouts and Media Queries - 23rd Apr 2012, Stéphanie Walter
http://www.onextrapixel.com/2012/04/23/responsive-web-design-layouts-and-media-queries/
'You’ll need a viewport meta tag to make the media queries work. The viewport meta tag enables you to take control of the viewport of the device. Basically, if no viewport is set, mobile device will try to fit the whole page on the screen, resulting in very small websites.'



## 10. Media Queries
http://www.w3.org/TR/css3-mediaqueries/

> 'HTML5 [HTML5] (at the moment of writing still work in progress) references the Media Queries specification directly and thus updates the rules for HTML.' (http://www.w3.org/TR/css3-mediaqueries/#HTML5)

- - - - - - - - - - - - - -

## 11. horizontal menu  with justify
http://stackoverflow.com/questions/49536/how-do-i-really-justify-a-horizontal-menu-in-htmlcss

- - - - - - - - - - - - - -

## 12.  Scalable and Modular Architecture for CSS - Jonathan Snook
(SMACSS)
'Categorizing CSS
rules, we begin to see patterns and can define better practices
around each of these patterns.
There are five types of categories:
1. Base
2. Layout
3. Module
4. State
5. Theme'

- - - - - - - - - - - - - -


## 13. 	Ariel Flesler’s jQuery scrollTo

https://plugins.jquery.com/scrollTo/
https://github.com/flesler/jquery.scrollTo
http://stackoverflow.com/questions/6677035/jquery-scroll-to-element

http://stackoverflow.com/questions/12492471/scrollto-doctype

- - - - - - - - - - - - - -


## 14. CSS-only version of the hamburger menu icon

http://callmenick.com/post/animating-css-only-hamburger-menu-icons
https://github.com/callmenick/Animating-Hamburger-Icons

- - - - - - - - - - - - - -