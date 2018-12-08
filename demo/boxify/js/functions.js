;(function($, window, document, undefined) {
	var $win = $(window);
	var $doc = $(document);

	// Initialize Google Map
	function initialize() {
		var myLatlng = new google.maps.LatLng(51.508996,-0.128408);

		var styles = [
		  {
		    "stylers": [
		      { "saturation": -100 }
		    ]
		  }
		]

        var mapOptions = {
          center: myLatlng,
          zoom: 14,
          scrollwheel: false,
          disableDefaultUI: true
        };
        var map = new google.maps.Map(document.getElementById('google-map'),
            mapOptions);

        var marker = new google.maps.Marker({
		    position: myLatlng,
		    map: map,
		    title: '45 Trafalgar Square, London, United Kingdom'
		});

		map.setOptions({styles: styles});
		map.setCenter(marker.position);
    }
    google.maps.event.addDomListener(window, 'load', initialize);
    google.maps.event.addDomListener(window, 'resize', initialize);

    $win.on('load', function() {
    	// Initialize Portfolio Masonry
		var $grid = $('#portfolio-container')
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

			$('#portfolio-container').shuffle('shuffle', function($el, shuffle) {
			  if (shuffle.group !== 'all' && $.inArray(shuffle.group, $el.data('groups')) === -1) {
			  	return false;
			  }

			  return $el.data('groups').indexOf(filterTag) !== -1;
			});
		});
    });

	$doc.ready(function() {
		// Initialize Intro Slider
		$('.section-slider img').css({
			height: function() {
				return $win.height();
			}
		});

		$('.section-slider').flexslider({
			animation: 'fade',
			controlNav: false,
			pauseOnHover: true
		});

		// Initialize Client Slider
		$('.client-slider').flexslider({
			slideshow: false,
			animation: 'slide',
			controlNav: false,
			minItems: 1,
			maxItems: 6,
			itemWidth: 170,
			itemMargin: 30, 
			move: 1
		});

		// Initialize Client Testimonials Slider
		$('.testimonial-slider').flexslider({
			animation: 'slide',
			directionNav: false,
			pauseOnHover: true
		});

		// Fix Navigation on Scroll
		var navPosition = $('.header').offset().top;
		$win.on('resize', function() {
			var navPosition = $('.header').offset().top;
		});
		
		$win.on('scroll', function() {
			if($win.scrollTop() >= navPosition) {
				$('.header').addClass('fixed');
				$('.main').addClass('no-nav');
			} else {
				$('.header').removeClass('fixed');
				$('.main').removeClass('no-nav');
			}
		});

		// Animate Sections on scroll using Wow.js and Animate.css
		var animations = new WOW();
		animations.init();		

		// Scroll to top clicking the logo
		$('.logo').on('click', function(event) {
			event.preventDefault();

			$('html, body').animate({
				'scrollTop' : 0
			}, 500);
		});

		// Change Active Navigation class on scroll
		$win.on('scroll', function() {
		    var windScroll = $win.scrollTop();
				
			if (windScroll >= 0) {
		        $('.wrapper section[id*="section-"]').each(function(i) {
		            if ($(this).position().top <= windScroll - 300) {
		                $('.nav li').removeClass('active');
		                $('.nav li').eq(i).addClass('active');
		            }
		        });
			} else {
				$('.nav li.active').removeClass('active');
			}		    
		});

		// Smooth Scroll to Section
		$('.nav a').not('.nav-trigger').on('click', function(event) {
			event.preventDefault();

			$(this).parent().siblings().removeClass('active');
			$(this).parent().addClass('active');

			var scrollSection = $(this).attr('href');
			var scrollPoint = $('section' + scrollSection).offset().top;

			$('html, body').animate({
				'scrollTop' : scrollPoint
			}, 500);
		});

		// Toggle Mobile Navigation
		$('.nav-trigger').on('click', function(event) {
			event.preventDefault();

			$('.nav-mobile').toggleClass('opened');

			$('.fa-times').on('click', function(event) {
				event.preventDefault();

				$(this).closest('.nav-mobile').removeClass('opened');
			});
		});

		$('.nav-mobile a').not('.close-menu').on('click', function(event) {
			event.preventDefault();

			$(this).parent().siblings().removeClass('active');
			$(this).parent().addClass('active');

			var scrollSection = $(this).attr('href');
			var scrollPoint = $('section' + scrollSection).offset().top;

			$('html, body').animate({
				'scrollTop' : scrollPoint
			}, 500);

			$(this).closest('.nav-mobile').removeClass('opened');
		});

		// Insert Progress Bar values in the progress bar meter
		$('.progress .meter').each(function() {
			var meterValue = $(this).attr('style').match(/.+\:(.+)\;/)[1];
			
			$(this).text(meterValue);
		});		

		// Accordion Functionality
		var $accHead = $('.accordion-head');
		var $accBody = $('.accordion-body');

		$accHead.on('click', function() {
			if($(this).hasClass('active')) {
				
			} else {
				$accHead.removeClass('active');
				$accBody.slideUp();

				$(this).addClass('active');
				$(this).next('.accordion-body').slideDown();
			}			
		});

		$('.loader').delay(1000).fadeOut(1000);
	});
})(jQuery, window, document);