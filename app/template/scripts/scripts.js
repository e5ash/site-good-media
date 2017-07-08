$(document).ready(function($) {
	
	setTimeout(function(){
		$('body').addClass('loaded');
	}, 2000);

	setTimeout(function(){
		$('.prelouder').hide();
	}, 2700);

	$('.logo').addClass('start');



	$('.apps__list').slick({
		slidesToShow: 6,
		slidesToScroll: 3,
		dots: true,
		prevArrow: '<button type="button" class="slick-prev slick-arrow"><i class="icon icon-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next slick-arrow"><i class="icon icon-arrow-right"></i></button>',
		responsive: [{
			breakpoint: 730,
			settings: {
				slidesToShow: 3
			}}, { 
			breakpoint: 390,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		}]
	});




	$('#fullpage').fullpage({
		scrollBar: true,
		scrollOverflow: true,
		navigation: true,
		lockAnchors: true,
		navigationPosition: 'right',
		fixedElements: '#up',
	});



	// $('.popup__button').click(function() {
	// 	parent.jQuery.fancybox.getInstance().close();
	// 	$.fancybox.open({
	// 		src  : '#popup-thanks',
	// 		type : 'inline'
	// 	});
	// });


	// $('.order__button').click(function() {
	// 	$.fancybox.open({
	// 		src  : '#popup-thanks',
	// 		type : 'inline'
	// 	});
	// });



	$('.popup form').submit(function() {
		var inputRequred = $(this).find('.input-requred');
			inputRequredValue = inputRequred.val();
		$.ajax({
			type: "POST",
			url: "/order.php",
			data: $(this).serialize()
		}).done(function() {
			if (inputRequredValue == "" || inputRequredValue == null) {
				inputRequred.addClass('input-error');
			} else {
				inputRequred.removeClass('input-error');
				parent.jQuery.fancybox.getInstance().close();
				$.fancybox.open({
					src  : '#popup-thanks',
					type : 'inline'
				});
			}
		});
		return false;
	});

	$('.order form').submit(function() {
		var inputRequred = $(this).find('.input-requred');
			inputRequredValue = inputRequred.val();
		$.ajax({
			type: "POST",
			url: "/order.php",
			data: $(this).serialize()
		}).done(function() {
			if (inputRequredValue == "" || inputRequredValue == null) {
				inputRequred.addClass('input-error');
			} else {
				inputRequred.removeClass('input-error');
				$.fancybox.open({
					src  : '#popup-thanks',
					type : 'inline'
				});
			}
		});
		return false;
	});



	var nav = $('#fp-nav'),
		up = $("#up");

	$(window).on('scroll load', function() {
		if ($('.fp-hidden-nav').hasClass('active')) {
			nav.addClass('hidden')
		} else{
			nav.removeClass('hidden')
		}
		if ($('#header').hasClass('active')){
			up.fadeOut(200);
		} else{
			up.fadeIn(200);
		}
	});


	up.click(function() {
		var elementClick = $(this).attr("href")
		var destination = $(elementClick).offset().top;
		jQuery("html:not(:animated),body:not(:animated)").animate({
		  scrollTop: destination
		}, 800);
		return false;
	});

	$('.input-phone').mask("+7 (999) 999-99-99");


	


	var navLinkContacts = $('.panel__nav li:last-of-type a'),
		contacts = $('.contacts');
	navLinkContacts.click(function(e) {
		e.preventDefault();
		contacts.fadeToggle(300);
	});

	
});



