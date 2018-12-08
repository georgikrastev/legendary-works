$(document).ready(function() {
	var headerHeight = $('.header').height();

	$(window).on('load', function() {
		// Loader
		// Hide Loader when page is loaded
		setTimeout(function() {
			$('.loader').fadeOut(1000);
		}, 500);

		setTimeout(function() {
			$('body').addClass('loaded');
		}, 1000);

		// Init Intro Slider
		$('.slider-intro .owl-carousel').owlCarousel({
			items: 1,
			loop: true,
			autoplay: true,
			smartSpeed: 500,
			nav: true,
			animateIn: 'fadeIn',
			animateOut: 'fadeOut',
			autoplayHoverPause: true
		});
	});

	// Toggle Search Form
	$('.btn-search-trigger').on('click', function(event) {
		event.preventDefault();

		$(this).closest('.search').find('.form-inline').toggleClass('active');
	});

	// Scroll to Section
	$('.nav a').on('click', function(event) {
		event.preventDefault();
		
		var targetId = $(this).attr('href');
		var targetOffset = $( targetId ).offset().top - headerHeight;

		$('.nav, .btn-nav').removeClass('active');

		$(this).parent().addClass('active').siblings().removeClass('active');
		$('body, html').animate({
			'scrollTop': targetOffset
		}, 500);
	});

	// Init Datepicker
	$('#field-filter-date').datepicker();

	// Open Datepicker when clicking the "Date" icon next to it
	$('.btn-datepicker').on('click', function() {
		$('#field-filter-date').datepicker('show');
	});

	// Open Video Modals
	$('.btn-video').magnificPopup({
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});

	// Toggle Mobile Navigation
	$('.btn-nav').on('click', function() {
		$(this).add('.nav').toggleClass('active');
	});

	$(window).on('load scroll', function() {
		var winO = $(window).scrollTop();

		$('.main .section').each(function() {
			if( $(this).offset().top - headerHeight <= winO + 10 ) {
				var sectionId = $(this).attr('id');

				$('nav a[href="#' + sectionId + '"]').parent().addClass('active').siblings().removeClass('active');
			}
		});
	});
});