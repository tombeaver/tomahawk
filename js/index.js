$(function() {
// ===========
// Variables =
// ===========

var modal = document.querySelector('#reservation-modal');




// ===========
// Functions =
// ===========

// Reservation Modal Pop Up
// ========================
	$("#makeRes").click(function() {
		$(".hamburger-nav").removeClass("openNav");
		$("#reservation-modal").css({
			display: "block",
		}),
		$("body").addClass("overflow")
	})

	$("#resBtn").click(function() {
		$("#reservation-modal").css({
			display: "block",
		}),
		$("body").addClass("overflow")
	});

	$(".close").click(function() {
		$("#reservation-modal").css({
			display: "none",
		}),
		$("body").removeClass("overflow")
	});

	$(window).click(function() {
		if (event.target == modal) {
			$("#reservation-modal").css({
			display: "none",
		}),
		$("body").removeClass("overflow")
		}
	});

// Calendar
// ========
	$('#calendar').fullCalendar({
		header: {
			left:   'prev',
    		center: 'title',
    		right:  'next'
		},
		fixedWeekCount: false,
		height: 350,
    	aspectRatio: 4
	});

// Next
// ====





// Full Screen function for all Large Images on Site
// =================================================
	function fullscreen() {
 		$('.largeImg').css({
            width: $(window).width(),
            height: $(window).height() * ".8"
        });
 	}
 	fullscreen();

 	$(window).resize(function() {
 		fullscreen();
 	});


// Hamburger Nav Function
// ======================
 	// Basically one big Toggle Session...
 	$(".hamburger-icon").click(function() {

 		// Changes the bars to an 'X'
		$(".hamburger").toggleClass("navOpen");

		// Sets the height of the nav screen from 0 to 100vh
		$(".hamburger-nav").toggleClass("openNav");

		// Puts an overflow: hidden on the body so no scrolling can happen while in menu
		$("body").toggleClass("overflow");
	});


});