/* jQuery snippets on scroll function changes size and images */
$(document).ready(function(){
    $('.carousel').carousel({
        interval: 7000 /* changes the speed */
    });
});
/* on scroll function changes size and images*/
$(document).on("scroll", function () {
	if ($(document).scrollTop() > 100) {
		$("nav").addClass("shrink");
		$('.logo-img').attr('src', 'assets/img/mint-logo-green.svg');
	} else {
		$("nav").removeClass("shrink");
		$('.logo-img').attr('src', 'assets/img/mint-logo-white.svg');
	}
});
/* closes nav after click */
$(document).ready(function () {
  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });
});
/* Closes the Responsive Menu on Menu Item Click */
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
/* P A G E  S C R O L L I N G - requires jQuery Easing plugin */
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
/* A D D S  H O V E R  E F F E C T  B A C K G R O U N D  I M A G E S */
$(".slide").hover(function(){
  $("section.slidehover").addClass('hover');
}, function(){
  $("section.slidehover").removeClass('hover');
});
/* Navigation background colour added on scorll 400 */
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 300) {
        $(".navigation").addClass("scrolling");
    } else {
        $(".navigation").removeClass("scrolling");
    }
});
/* Highlight the top nav as scrolling occurs */
$('body').scrollspy({
    target: '.navbar-fixed-top'
})


/* Every time the window is scrolled ... */
$(window).scroll( function(){
    
    /* Check the location of each desired element */
    $('.hideme').each( function(i){
            
    var bottom_of_object = $(this).offset().top + $(this).outerHeight();
    var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},3500);       
            }        
    }); 
});
/* offering a simple link or button display which behaves like a “back to home” link. */
$("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});
/* Toggle CSS Classes */
$('nav a').toggleClass('selected');
/* Loading External Content */
$("#content").load("somefile.html", function(response, status, xhr) {
  /* error handling */
  if(status == "error") {
    $("#content").html("An error occured: " + xhr.status + " " + xhr.statusText);
  }
});

/* SIMPLE ACCORDION */
/* Close all Panels */
$('#accordion').find(‘.content').hide();
// Accordion
$('#accordion').find(‘.accordion-header').click(function(){
var next = $(this).next();
next.slideToggle('fast’);
$(‘.content’).not(next).slideUp('fast’);
return false;
});








