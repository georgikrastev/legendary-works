;(function($, window, document, undefined) {
	var $win = $(window);
	var $doc = $(document);

	$win.on('load', function() {
		// Init Background Slider
		$('.background').flexslider({
			slideshowSpeed: 8000,
			animationSpeed: 2000,
			start: function(slider) {
				$('.background .slides, .background .slide').height(function() {
					return $win.height();
				});

				slider.find('.slide').eq(slider.currentSlide).addClass('scale');
			},
			before: function(slider) {
				setTimeout(function() {
					slider.find('.slide').eq(slider.animatingTo).siblings().removeClass('scale');					
				}, 2000);

				slider.find('.slide').eq(slider.animatingTo).addClass('scale');
			}
		});

		$('.loader').delay(2000).fadeOut(1000);
	});

	$doc.ready(function() {
		// Init Countdown Counter
		var launchDate = $('.counter-countdown').data('launch-date');

		$('.counter-countdown').countdown(launchDate, function(event) {
			$(this).find('.ds').text(event.strftime('%D'));
			$(this).find('.hs').text(event.strftime('%H'));
			$(this).find('.ms').text(event.strftime('%M'));
			$(this).find('.ss').text(event.strftime('%S'));
		});

		// Set Height to Intro
		if($win.width() > 640) {
			$('.section-intro').css({
				'height': function() {
					return $win.height();
				}
			});
		} else {
			$('.section-intro').removeAttr('style');
		}		
	});

	$win.on('resize', function() {
		// Set Height to Intro
		if($win.width() > 640) {
			$('.section-intro').css({
				'height': function() {
					return $win.height();
				}
			});
		} else {
			$('.section-intro').removeAttr('style');
		}
	});
})(jQuery, window, document);