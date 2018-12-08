function setSliderHeight() {
	var $header = $('.header');
	var $footer = $('.footer');
	var $wrapper = $('.wrapper');
	var $slider = $('.showcases');
	var sliderH = $(window).height() - $header.height() - $footer.height() - parseInt($wrapper.css('padding-top'));
	
	if ($slider.length) {
		$slider.css('height', sliderH);

		$slider.find('.showcase__image').css('height', sliderH - 100);
	}
}

function animateDelay() {
	var $animateParent = $('.animate-parent');
	var $animateElements = $animateParent.find('.animate');

	$animateElements.each(function(index) {
		var delay = $(this).closest('.info').length ? (index * .05) + .5 + 's' : index * .1 + 's';

		$(this).css({
			'transition-delay': delay,
			'-webkit-transition-delay': delay,
			'-o-transition-delay': delay
		});
	});
}

function initSlider() {
	var $slider = $('.showcases');

	var carousel = new Swiper($slider, {
		effect: 'fade',
		fade: {
			crossfade: true
		},
		loop: true,
		speed: 750,
		prevButton: $slider.find('.swiper-button-prev'),
		nextButton: $slider.find('.swiper-button-next'),
		breakpoints: {
			768: {
				autoHeight: true
			}
		}
	});
}

$(document).ready(function() {
	// Open Info
	$('.info__btn').on('click', function(event) {
		$(this).add('.info__body').addClass('active');
		$('.info .animate').addClass('animated');

		return false;
	});

	// Close Info
	$('.info__close').on('click', function(event) {
		$('.info .animate').removeClass('animated');
		var lastDelay = $('.info .animate:last').css('transition-delay').replace('s', '') * 1000;

		setTimeout(function() {
			$('.info__btn, .info__body').removeClass('active');
		}, lastDelay);
		
		return false;
	});

	// Add transition Delay
	animateDelay();
	
	// Set Slider Height
	setSliderHeight();

	// Init Slider
	initSlider();

	$(window).on('load resize', function() {
		setSliderHeight();
	});
});