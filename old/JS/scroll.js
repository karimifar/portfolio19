var worksTop = undefined;
var pageHeight = undefined;
var scrollTop = undefined;

function checkWorks()
{
	if(worksTop < scrollTop+pageHeight)
		jQuery(".project-description").addClass('fade');
	else
		jQuery(".project-description").removeClass('fade');
}


function windowOnScroll()
{
	scrollTop = jQuery(window).scrollTop();
	checkWorks();
    checkHeader();
    checkLogo();
    checkTitle();
    checkMenu();
}

function windowOnResize()
{
	pageHeight = jQuery(window).height();
	worksTop = jQuery("#works").offset().top;

	windowOnScroll();
}

jQuery(document).ready(function()
{
	windowOnResize();

	jQuery(window).resize(windowOnResize);
	jQuery(window).scroll(windowOnScroll);

	setInterval(function()
	{
	
	}, 1000);
});


function checkHeader()
{
	if(scrollTop>150)
		jQuery("#header").addClass('small');
        
	else
		jQuery("#header").removeClass('small');
} 

function checkLogo()
{
	if(scrollTop>150)
		jQuery("#logo").addClass('small');
        
	else
		jQuery("#logo").removeClass('small');
}

function checkTitle()
{
	if(scrollTop>150)
		jQuery("#title").addClass('small');
        
	else
		jQuery("#title").removeClass('small');
}   

function checkMenu()
{
	if(scrollTop>150)
		jQuery("#menu").addClass('small');
        
	else
		jQuery("#menu").removeClass('small');
}