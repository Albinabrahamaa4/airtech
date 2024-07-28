/**
 * Created by User on 22-04-2022.
 */
(function ($) {
	$(document).ready(function () {
     window.addEventListener("load", AOS.refresh);
		AOS.init();
		// Header Scroll
		let nav = document.querySelector(".navbar");
		window.onscroll = function () {
			if (document.documentElement.scrollTop > 20) {
				nav.classList.add("header-scrolled");
			} else {
				nav.classList.remove("header-scrolled");
			}
		};

		// nav hide
		let navBar = document.querySelectorAll(".nav-link");
		let navCollapse = document.querySelector(".navbar-collapse.collapse");
		navBar.forEach(function (a) {
			a.addEventListener("click", function () {
				navCollapse.classList.remove("show");
			});
		});

		$(".industries-slider").slick({
			dots: false,
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			centerMode: true,
			variableWidth: true,
			arrows: true,
			autoplay: true,
			autoplaySpeed: 2000,
			slidesToScroll: 1,
            pauseOnHover: false,
     		pauseOnFocus: false,
			prevArrow: $(".industries-prev"),
			nextArrow: $(".industries-next"),
		});

		//Awards Slider
        $(".awards-slider").slick({
			dots: false,
			infinite: true,
			speed: 300,
			slidesToShow: 4,
			slidesToScroll: 1,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 2000,
			arrows: true,
			prevArrow: $(".awards-prev"),
			nextArrow: $(".awards-next"),
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 1,
						infinite: true,
						dots: true,
					},
				},
				{
					breakpoint: 990,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					},
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					},
				},
				// You can unslick at a given breakpoint now by adding:
				// settings: "unslick"
				// instead of a settings object
			],
		});
		

		//Milestone Slider
		$(".milestone-slider").slick({
			dots: false,
			arrows: true,
			infinite: true,
			speed: 300,
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2000,
			prevArrow: $(".milestone-prev"),
			nextArrow: $(".milestone-next"),
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
					},
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
					},
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					},
				},
				// You can unslick at a given breakpoint now by adding:
				// settings: "unslick"
				// instead of a settings object
			],
		});

		//News Slider
		$(".news-post-slider").slick({
			dots: false,
			arrows: true,
			infinite: true,
			speed: 300,
			slidesToShow: 3,
			autoplay: true,
			autoplaySpeed: 2000,
			slidesToScroll: 1,
			prevArrow: $(".news-post-prev"),
			nextArrow: $(".news-post-next"),
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
					},
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
					},
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					},
				},
				// You can unslick at a given breakpoint now by adding:
				// settings: "unslick"
				// instead of a settings object
			],
		});

		//Brand Selection Slider
		$(".slider-selection").slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			asNavFor: ".slider-nav",
		});
		$(".slider-nav").slick({
			slidesToShow: 5,
			slidesToScroll: 1,
			arrows: true,
			infinite: true,
			autoplay: true,
			asNavFor: ".slider-selection",
			dots: false,
			centerMode: false,
			focusOnSelect: true,
			prevArrow: $(".logo-prev"),
			nextArrow: $(".logo-next"),
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
					},
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
					},
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					},
				},
				// You can unslick at a given breakpoint now by adding:
				// settings: "unslick"
				// instead of a settings object
			],
		});

		//testimonial-Slider
		$(".testimonial").slick({
			dots: false,
			infinite: true,
			speed: 300,
			slidesToShow: 2,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2000,
			arrows: true,
			prevArrow: $(".testi-prev"),
			nextArrow: $(".testi-next"),
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						infinite: true,
						dots: true,
					},
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					},
				},
				// You can unslick at a given breakpoint now by adding:
				// settings: "unslick"
				// instead of a settings object
			],
		});

		//Certificate Slider
		$(".certificate-slider").slick({
			dots: false,
			arrows: true,
			infinite: true,
			speed: 300,
			slidesToShow: 4,
			autoplay: true,
			autoplaySpeed: 2000,
			slidesToScroll: 1,
			prevArrow: $(".certificate-prev"),
			nextArrow: $(".certificate-next"),
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
					},
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
					},
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					},
				},
				// You can unslick at a given breakpoint now by adding:
				// settings: "unslick"
				// instead of a settings object
			],
		});

		$(".news-slider").slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2000,
			dots: true,
		});

		$(".project-slider").slick({
			dots: false,
			infinite: false,
			speed: 300,
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows: true,
			// autoplay: true,
			// autoplaySpeed: 2000,
			prevArrow: $(".project-prev"),
			nextArrow: $(".project-next"),
			responsive: [
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					},
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					},
				},
			],
		});

		$(".brand-slider").slick({
			dots: false,
			infinite: true,
			speed: 300,
			infinite: true,
			autoplay: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows: true,
			prevArrow: $(".brand-prev"),
			nextArrow: $(".brand-next"),
			responsive: [
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					},
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					},
				},
			],
		});

		$(".clients-slider").slick({
			dots: false,
			infinite: true,
			speed: 300,
			slidesToShow: 5,
			slidesToScroll: 1,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 2000,
			arrows: true,
			prevArrow: $(".client-prev"),
			nextArrow: $(".client-next"),
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 1,
						infinite: true,
						dots: true,
					},
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					},
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					},
				},
				// You can unslick at a given breakpoint now by adding:
				// settings: "unslick"
				// instead of a settings object
			],
		});

		$(".M-segment-slider").slick({
			dots: false,
			infinite: true,
            autoplay: true,
			speed: 300,
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows: true,
			prevArrow: $(".M-segment-prev"),
			nextArrow: $(".M-segment-next"),
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						infinite: true,
						dots: true,
					},
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					},
				},
				// You can unslick at a given breakpoint now by adding:
				// settings: "unslick"
				// instead of a settings object
			],
		});

		/*$('.M-segment-slider').on('afterChange', function(event, slick, currentSlide){
          
            
          console.log("A");
          $('.slick-current').trigger('click');
            
        });*/
        
		$(".gallery-expander-slider").slick({
			dots: true,
			infinite: true,
			speed: 300,
			slidesToShow: 4,
			slidesToScroll: 4,
			arrows: false,
			autoplay: false,
			autoplaySpeed: 2200,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 4,
					},
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					},
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					},
				},
			],
		});
        
        $('.gallery-expander-slider').on('init', function(event, slick) {
  if (slick.slideCount === 4) {
    $('.gallery-expander-slider').slick('slickSetOption', 'dots', false, true);
  }
});

		$(".fm-slider-for").slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			asNavFor: ".fm-slider-nav",
		});
		$(".fm-slider-nav").slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			asNavFor: ".fm-slider-for",
			dots: true,
			centerMode: true,
			focusOnSelect: true,
		});
        
        

		$(".slider-for").slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			asNavFor: ".slider-nav-n",
		});
		$(".slider-nav-n").slick({
			slidesToShow: 3,
            arrows: true,
			slidesToScroll: 1,
			asNavFor: ".slider-for",
			centerMode: true,
			focusOnSelect: true,
		});
        

//---------------Inner Project Img Grid--------------
$(document).ready(function () {
	$(".img-grid").each(function () {
		var numItems = $(".pro-img").length;
		console.log(numItems);

		if (numItems == 1) {
			$(".img-grid").addClass("gallery__item--1");
		} else if (numItems == 2) {
			$(".img-grid").addClass("gallery__item--2");
		} else if (numItems == 3) {
			$(".img-grid").addClass("gallery__item--3");
		} else if (numItems == 4) {
			$(".img-grid").addClass("gallery__item--4");
		} else if (numItems == 5) {
			$(".img-grid").addClass("gallery__item--5");
		}
	});
	
});

$(".box-container").slice(0, 6).show();
            $("#loadMore").on('click', function (e) {
                e.preventDefault();
                $(".box-container:hidden").slice(0, 6).slideDown();
                if ($(".box-container:hidden").length == 0) {
                    $("#loadMore").fadeOut('slow');
                   // $('#loadMore').replaceWith("<p class='p'>No More Data</p>");
                }
                $('html,body').animate({
                    //scrollTop: $(this).offset().top
                }, 1500);
            });

// jQuery Plugin: http://flaviusmatis.github.io/simplePagination.js/

var items = $(".list-wrapper .list-item");
    var numItems = items.length;
    var perPage = 12;

    items.slice(perPage).hide();

    $('#pagination-container').pagination({
        items: numItems,
        itemsOnPage: perPage,
        prevText: "« Previous Page",
        nextText: "Next Page »",
        onPageClick: function (pageNumber) {
            var showFrom = perPage * (pageNumber - 1);
            var showTo = showFrom + perPage;
            items.hide().slice(showFrom, showTo).show();
            //window.location.reload();
            //window.location.href = window.location.href;
            window.scrollTo(0,300);
        }
    });

  // Attach keypress event to phone number field
  $('#phone').on('keypress', function(event) {
    // Allow only numeric input
    var regex = new RegExp("^[0-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
      event.preventDefault();
      return false;
    }
  });
// Attach keypress event to full name field
$('#name').on('keypress', function(event) {
  // Allow only alphabetical input and spaces
  var regex = new RegExp("^[a-zA-Z ]+$");
  var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
  if (!regex.test(key)) {
    event.preventDefault();
    return false;
  }
});
document.addEventListener( 'wpcf7mailsent', function( event ) {
   // When the form is successfully submitted, show the thank-you popup
   $('#subscribe-thankyou').modal('show');
}, false );

grecaptcha.execute();
});
})(jQuery);