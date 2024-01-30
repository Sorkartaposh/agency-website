(function($){
	$(document).ready(function() {	

		// Scroll to Top
		jQuery('.scrolltotop').click(function(){
			jQuery('html').animate({'scrollTop' : '0px'}, 400);
			return false;
		});
		
		jQuery(window).scroll(function(){
			var upto = jQuery(window).scrollTop();
			if(upto > 500) {
				jQuery('.scrolltotop').fadeIn();
			} else {
				jQuery('.scrolltotop').fadeOut();
			}
		});

		
		// count up
		$('.timer').appear();
		    $(document.body).on('appear', '.timer', function(e, $affected) {
		        $affected.each(function() {
		            var $this = $(this);
		            if (!$this.hasClass('appeared')) {
		                jQuery({
		                    Counter: 0
		                }).animate({
		                    Counter: $this.attr('data-count')
		                }, {
		                    duration: 1200,
		                    easing: 'swing',
		                    step: function() {
		                        var num = Math.ceil(this.Counter).toString();
		                        $this.html(num);
		                    }
		                });
		                $this.addClass('appeared');
		            }
		        });
		    });	

			// When the user scrolls the page, execute myFunction 
			window.onscroll = function() {myFunction()};

			function myFunction() {
			var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
			var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
			var scrolled = (winScroll / height) * 100;
			document.getElementById("myBar").style.width = scrolled + "%";
			}
		
			
		
		
		
		
		
		
		
	});
})(jQuery);

	// disbale code inspect


	// take body to change the content
	// const body = document.getElementsByTagName('body');

	// stop keyboard shortcuts

	// window.addEventListener("keydown", (event) => {
	// if(event.ctrlKey && (event.key === "S" || event.key === "s")) {
	// 	event.preventDefault();
	// }
	// if(event.ctrlKey && (event.key === "C")) {
	// 	event.preventDefault();
	// }
	// if(event.ctrlKey && (event.key === "E" || event.key === "e")) {
	// 	event.preventDefault();
	// }
	// if(event.ctrlKey && (event.key === "I" || event.key === "i")) {
	// 	event.preventDefault();
	// }
	// if(event.ctrlKey && (event.key === "K" || event.key === "k")) {
	// 	event.preventDefault();
	// }
	// if(event.ctrlKey && (event.key === "U" || event.key === "u")) {
	// 	event.preventDefault();
	// }
	// if (event.key === "F12") {
    //     event.preventDefault();
    // }
	// });
	// stop right click
	// document.addEventListener('contextmenu', function(e) {
	// e.preventDefault();
	// });


