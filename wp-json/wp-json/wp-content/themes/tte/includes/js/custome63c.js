jQuery(document).ready(function () {
  if (jQuery(".segment_card-slider").length > 0) {
    jQuery(".segment_card-slider").slick({
      dots: false,
      infinite: true,
      speed: 300,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 3,
      arrows: true,
      slidesToScroll: 1,
      prevArrow: `<div class="mech-prev mech-slick-arrow" >
      <svg class="svg-inline--fa fa-arrow-left fa-w-14" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="arrow-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path></svg></div>`,
      nextArrow: `<div class="mech-next mech-slick-arrow" >
      <svg class="svg-inline--fa fa-arrow-right fa-w-14" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="arrow-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg></div>`,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  }
  if (jQuery(".mech_card_custom-slider").length > 0) {
    jQuery(".mech_card_custom-slider").slick({
      dots: false,
      infinite: true,
      speed: 300,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 4,
      arrows: true,
      slidesToScroll: 1,
      prevArrow: `<div class="mech-prev mech-slick-arrow" >
      <svg class="svg-inline--fa fa-arrow-left fa-w-14" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="arrow-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path></svg></div>`,
      nextArrow: `<div class="mech-next mech-slick-arrow" >
      <svg class="svg-inline--fa fa-arrow-right fa-w-14" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="arrow-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg></div>`,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
    function updateCardheight() {
      let maxheight = 0;
      jQuery(".mech_card_custom-slider .mech_card").each(function () {
        if (jQuery(this).height() > maxheight) {
          maxheight = jQuery(this).height();
        }
      });

      jQuery(".mech_card_custom-slider .mech_card").each(function () {
        jQuery(this).css({ height: maxheight + 36 });
      });
    }
    updateCardheight();
  }

  if($('.testimonial').length >0){
    function updateTestimonialheight() {
      let maxheight = 0;
      jQuery(".testimonial .slick-slide").each(function () {
        if (jQuery(this).height() > maxheight) {
          maxheight = jQuery(this).height();
        }
      });

      jQuery(".testimonial .slick-slide").each(function () {
        jQuery(this).css({ height: maxheight });
      });
    }
    updateTestimonialheight();
  }
  jQuery(".nav_search-toggle_btn").click(function () {
    jQuery(".search_form_wrap").addClass("open");
  });
  jQuery(".search_form_wrap .close_cta").click(function () {
    jQuery(".search_form_wrap").removeClass("open");
  });
  // jQuery(document).on("click", function (event) {
  //   var $trigger = jQuery(".search_form_wrap");
  //   var $trigger2 = jQuery(".nav_search-toggle_btn");
  //   if (
  //     $trigger !== event.target &&
  //     !$trigger.has(event.target).length &&
  //     $trigger2 !== event.target &&
  //     !$trigger2.has(event.target).length
  //   ) {
  //     jQuery(".search_form_wrap").removeClass("open");
  //   }
  // });
  let url = window.location.href;
  let hashtag = url.split("#")[1];
  if (hashtag) {
    var scrollElm = document.getElementById(`${hashtag}`);
    if(scrollElm != null){
      let top = scrollElm.offsetTop;
      window.scrollTo({
        top: top - 100,
        behavior: "smooth",
      });
    }
  }
});

