
var $ = jQuery.noConflict();


// Page Loader
$(window).load(function () {
    
    "use strict";
	$('#loader').fadeOut();
	
	

});


    // jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
    
    //"use strict";
   // console.log($anchor.attr('href'));
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
		if ($anchor.length){
			 $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 68
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
		}
       
    });
});



// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top',
	offset: 30
	
});



// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function () {
    "use strict";
    $('.navbar-toggle:visible').click();
});
    
    
  $(window).scroll(function(){
  if($(this).scrollTop() > 300){ //condición a cumplirse cuando el usuario aya bajado 301px a más.
    $("#js_up").slideDown(300); //se muestra el botón en 300 mili segundos
  }else{ // si no
    $("#js_up").slideUp(300); //se oculta el botón en 300 mili segundos
  }
});  
    
    /*----------------------------------------------------*/
    /*	Css3 Transition
    /*----------------------------------------------------*/

        $('*').each(function(){
            if($(this).attr('data-animation')) {
                var $animationName = $(this).attr('data-animation'),
                    $animationDelay = "delay-"+$(this).attr('data-animation-delay');
                $(this).appear (function() {
                    $(this).addClass('animated').addClass($animationName);
                    $(this).addClass('animated').addClass($animationDelay);
                });
            }
        });
    
    

    
    /*--------------------------------------------------*/
    /* Counter*/
    /*--------------------------------------------------*/ 
        

                $('.timer').countTo();

                $('.counter-item').appear(function() {
                    $('.timer').countTo();
                },{accY: -100});
            
        



////------- Testimonials Carousel
	



  $(".client").owlCarousel({

        pagination: false,
        navigation:true,
        slideSpeed : 2500,
		stopOnHover: true,
    	autoPlay: 3000,
    	singleItem:false,
        itemsMobile : [550,2],
        itemsDesktopSmall : [581,3],
        items: 4,
		responsive:{
        0:{
            items:1,
			navigation:true
        },
        960:{
            items:4,
			navigation:true
        },
        1200:{
            items:4,
			navigation:true
        }
		},

		transitionStyle : "fade",
		navigationText: ['<img src="images/areas/prev.png" width="40"  class="fa " / >','<img src="images/areas/next.png" width="40" class="fa fa-chevron-right"/>']
  });
	

////------- Latest News

$(document).ready(function() {
 
  $(".latest-news").owlCarousel({
        pagination: true,
        navigation : false,
        slideSpeed : 2500,
		stopOnHover: true,
    	autoPlay: 4000,
    	singleItem:false,
        itemsMobile : [550,1],
        itemsDesktopSmall : [991,2],
        items: 3,
		transitionStyle : "fade",
		navigationText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>']
  });
 
});




// Team Carousel

$(document).ready(function() {
 
  $(".our-team").owlCarousel({
        pagination: true,
        slideSpeed : 2500,
		stopOnHover: true,
    	autoPlay: 3000,
        items: 4,
    	//singleItem:true,
        itemsMobile : [550,1],
        itemsDesktopSmall : [991,2],
		transitionStyle : "fade",
		navigationText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>']
  });
 
});

 $(document).ready(function() {
     var owl = $("#slider-carousel");
     owl.owlCarousel({
       items: 2,
       itemsDesktop: [1300, 2],
       itemsDesktopSmall: [900, 2],
       itemsTablet: [600, 1],
       pagination: false,
        navigation:true,
        slideSpeed : 2500,
		stopOnHover: true,
    	
    	singleItem:false,
	   navigationText: ['<div class="btn owl-prev "><img class="prev" src="images/solutions/prev.png" /></div>','<div class="btn owl-next "><img class="prev" src="images/solutions/next.png" /></div>']	    
	   
     });
	 /*
     $(".next").click(function() {
       owl.trigger('owl.next');
     })
     $(".prev").click(function() {
       owl.trigger('owl.prev');
     })*/
   });

////------- Partner/CLients

/*$(document).ready(function() {

 
 
 
  $(".clients").owlCarousel({
        pagination: false,
        navigation:true,
        slideSpeed : 2500,
		stopOnHover: true,
    	autoPlay: 3000,
		margin:10,
    	singleItem:false,
		responsiveBaseElement:".clients",
        itemsMobile : [550,1],
        itemsDesktopSmall : [350,2],
		itemsDesktop : [200,2],
        items: 2,
		responsiveClass:true,
		responsive:{
        0:{
            items:1,
			navigation:true
        },
        960:{
            items:1,
			navigation:true
        },
        1024:{
            items:2,
			navigation:true
        }
		},

		transitionStyle : "fade",
		navigationText: ['<img src="images/solutions/prev.png"  class="fa " / >','<img src="images/solutions/next.png" class="fa fa-chevron-right"/>']
  });
 
});*/

$(document).ready(function() {
 
  $(".client").owlCarousel({
        pagination: false,
        navigation:true,
        slideSpeed : 2500,
		stopOnHover: true,
    	autoPlay: 3000,
    	singleItem:false,
        itemsMobile : [550,1],       
        items: 4,
		transitionStyle : "fade",
		navigationText: ['<img src="images/solutions/prev.png"  class="fa " / >','<img src="images/solutions/next.png" class="fa fa-chevron-right"/>']
  });
 
});







        // Tab------------------------------


$('#team a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})



$(window).scroll(function(){
  if($(this).scrollTop() > 300){ //condición a cumplirse cuando el usuario aya bajado 301px a más.
    $("#js_up").slideDown(300); //se muestra el botón en 300 mili segundos
  }else{ // si no
    $("#js_up").slideUp(300); //se oculta el botón en 300 mili segundos
  }
});



