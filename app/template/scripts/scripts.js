$(document).ready(function($) {
	$('#fullpage').fullpage({
		scrollBar: true,
		scrollOverflow: true,
		navigation: true,
		lockAnchors: true,
		navigationPosition: 'right',
		fixedElements: '#up',
	});
	$('form').submit(function() {
		$.ajax({
			type: "POST",
			url: "/order.php",
			data: $(this).serialize()
		}).done(function() {
			popupForm.css('display','none');
			popupMessage.css('display','block');
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


	$('.popup__button').click(function() {
		parent.jQuery.fancybox.getInstance().close();
		$.fancybox.open({
			src  : '#popup-thanks',
			type : 'inline'
		});
	});


	$('.order__button').click(function() {
		$.fancybox.open({
			src  : '#popup-thanks',
			type : 'inline'
		});
	});


	var navLinkContacts = $('.panel__nav li:last-of-type a'),
		contacts = $('.contacts');
	navLinkContacts.click(function(e) {
		e.preventDefault();
		contacts.fadeToggle(300);
	});
});



