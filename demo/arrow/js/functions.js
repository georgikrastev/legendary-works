;(function($, window, document, undefined) {
	var $win = $(window);
	var $doc = $(document);

	$win.on('load', function() {
		// Init Intro Slider
		$('.intro-slider').flexslider({
			controlNav: false,
			prevText: '&#xf104;',
			nextText: '&#xf105;'
		});

		// Init Testimonials Slider
		$('.slider-testimonials').flexslider({
			directionNav: false,
		});

		// Initialize Portfolio Masonry
		var $grid = $('.portfolio-container');
		$grid.shuffle({
			itemSelector: '.item',
		    sizer: '.item'
		});

		// Filters elements based on Category
		$('.portfolio-filter a').on('click', function(event) {
			event.preventDefault();

			var filterTag = $(this).data('filter');
			$(this).parent().siblings().removeClass('active');			
			$(this).parent().addClass('active');

			$('.portfolio-container').shuffle('shuffle', function($el, shuffle) {
			  if (shuffle.group !== 'all' && $.inArray(shuffle.group, $el.data('groups')) === -1) {
			  	return false;
			  }

			  return $el.data('groups').indexOf(filterTag) !== -1;
			});
		});

		$('.loader').delay(2000).fadeOut(1000);
	});

	$doc.ready(function() {
		 // Form Validation
		$('.form-contact form').validate({
			submitHandler : function (form) {
				var $form = $(form);
				$.ajax({
					type : $form.attr('method'),
					url : $form.attr('action'),
					dataType : 'json',
					data : $form.serializeArray(),
					success : function (data, status) {
						$form.append($(data));

						setTimeout(function() {
							$form.trigger('reset');
							$form.find('.btn').trigger('blur');
							$form.find('.alert').remove();
						}, 3000);
					}
				});
			}
		});

		// Go Top
		$('.brand').on('click', function(event) {
			event.preventDefault();

			$('body, html').animate({
				'scrollTop': 0
			}, 500);
		});

		$('.header').stickyNavbar({
			zindex: 999,
			mobile: true
		});

		// Close Mobile Navigation
		$('document').on('click', '.navbar-collapse a', function(event) {
          $('.navbar-collapse').collapse('hide');
        });

		var userToScroll = $('.header-inner').offset().top;
		$win.on('scroll', function() {
			// Fix header to the top on scroll
			if($win.scrollTop() > userToScroll) {
				$('.header').addClass('fixed');
			} else {
				$('.header').removeClass('fixed');
			}
		});

		// Toggle Customize Panel
		$('.navbar-collapse').on('shown.bs.collapse', function() {
			$('.navbar-nav a').on('click', function() {
				$('.navbar-collapse').collapse('hide');
			});
		});

		// Animate Sections on scroll using Wow.js and Animate.css
		var animations = new WOW({
			boxClass: 'animatable'
		});

		animations.init();	

		// Initialize Google Map
		function initialize() {
			var myLatlng = new google.maps.LatLng(51.482576,-0.0076589);

	        var mapOptions = {
	          center: myLatlng,
	          zoom: 15,
	          scrollwheel: false,
	          disableDefaultUI: true
	        };
	        var map = new google.maps.Map(document.getElementById('gmap'),
	            mapOptions);

	        var marker = new google.maps.Marker({
			    position: myLatlng,
			    map: map,
			    title: 'Greenwich, London, United Kingdom',
			    icon: 'css/images/marker.png'
			});

			map.setCenter(marker.position);
	    }
	    google.maps.event.addDomListener(window, 'load', initialize);
	    google.maps.event.addDomListener(window, 'resize', initialize);
	});
})(jQuery, window, document);