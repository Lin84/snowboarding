$(document).ready(function(){
// ***remove default setting automoving of top after click on button   
	$(".btn").on("click",function(){
		event.preventDefault();
	})
// ********************************************************************
	$(".navbar-toggle").on("click",function(){
		$(".collapse").slideToggle();
	})

	$(window).resize(function() {
		/* to fix problem with hiding problem navbar-collapse after */
	    if ($(window).width() >752) {
	        $("#navbar-show").show();
	        // console.log($(window).width());			
	    }
	    if ($(window).width() <= 752) {
	        $("#navbar-show").hide();
	        // console.log($(window).width());
	    }
	});
// ********************************************************************
	$("#logo").on("click",function(){
		$("body,html").stop().animate({scrollTop:0})
	})
// ***slider in "home section" ****************************************
	var mySwiper = new Swiper ('.swiper-home', {
		/* initial slider created by using swiper*/
		// Optional parameters
		direction: 'horizontal',
		loop: true,

		// If we need pagination
		pagination: '.swiper-pagination',

		// Navigation arrows
		// nextButton: '.swiper-button-next',
		// prevButton: '.swiper-button-prev',

		// And if we need scrollbar
		// scrollbar: '.swiper-scrollbar',
		 slidesPerView: 'auto',

		 /*auto-play*/
	    autoplay: 5000,
        autoplayDisableOnInteraction: false
	}) 
// ***slider in "snowboards section" ***********************************
	// var width = $(window).width();	
	var ww = $(window).width()
	var a; /* create variable a to automaticly determinate the amount of column in slider=> "slidesPerView:a" */
	if (ww<749) {a=1;}		
	if (ww>=749) {a=3;}
	// if(ww>=1024){a=5;}

		// var sb;  /*create variable a to automaticly determinate the spacebetween each column in slider=> "spaceBetween:sb" */
		// if (ww<650) {sb=0;}		
		// if (ww>=650) {sb=-330;}
		// // if(ww>=1024){sb=3;}

	var mySwiper2 = new Swiper ('.swiper-snowboards', {
		/* initial slider created by using swiper*/
		// Optional parameters
		direction: 'horizontal',
		loop: true,

		// If we need pagination
		pagination: '.swiper-pagination',

		// Navigation arrows
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',

		// And if we need scrollbar
		// scrollbar: '.swiper-scrollbar',
		 slidesPerView: a,

		 /*auto-play*/
	    // autoplay: 5000,
        autoplayDisableOnInteraction: false,
        // spaceBetween: sb
	
	})
	$(window).resize(function(){
		/* if resizing screen will change the amount of column in section categories*/
		var ww = $(window).width()
		console.log(ww);		
		if (ww<749) {mySwiper2.params.slidesPerView = 1;}		
		if (ww>=749) {mySwiper2.params.slidesPerView = 3;}		
		// if (ww>=1024) {mySwiper2.params.slidesPerView = 5;}
	})	

// ------- contact pop up ----------------------------------------------

	
	function check_empty() { /* Validating Empty Field*/
		if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById('msg').value == "") {
			alert("Fill All Fields, Please!");
		} else {
		document.getElementById('contact-form').submit();
			alert("Message Send, Good Job!");
		}
	}

	$("#send").on("click",function(){
		check_empty();
	})

	
	function div_show() { /*Function To Display Popup*/
		// document.getElementById('contact-pop-up').style.display = "block";
		$("#contact-pop-up").slideToggle();
	}

	
	function div_hide(){ /*Function to Hide Popup*/
		// document.getElementById('contact-pop-up').style.display = "none";
		$("#contact-pop-up").slideUp();
	}

	$("#contact-btn").on("click",function(){
		div_show();
	})

	$("#close").on("click",function(){
		div_hide();
	})



// -----------------------------------------------------
	if(document.addEventListener){ /* if email adress is wrong*/
		document.addEventListener('invalid', function(e){
			e.target.className += ' invalid';
		}, true);
	}

})