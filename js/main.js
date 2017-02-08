$(document).ready(function () {

//плавный появление
  $('section').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated fadeIn',
    offset: 100
  });

//плавный якорь
  $(".c-menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });

  function setEqualHeight(columns) {
    var tallestcolumn = 0;
    columns.each(
        function() {
          var currentHeight = $(this).height();
          if(currentHeight > tallestcolumn) {
            tallestcolumn = currentHeight;
          }
        }
    );
    columns.height(tallestcolumn);
  }
  setEqualHeight($(".employment-item"));


  $(".footer-btn-up").on("click", function(e){
    e.preventDefault();
    $('body,html').animate({
        scrollTop: 0
      }, 700
    );
  });

  $('.reviews-student .slider').slick({
      autoplay: false,
      autoplaySpeed: 5000,
      dots: false,
      arrows: true,
      infinite: true,
      speed: 500,
      adaptiveHeight: false,
      slidesToShow: 3,
      slidesToScroll: 1
  });

    $('.reviews-employers .slider').slick({
        autoplay: false,
        autoplaySpeed: 5000,
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        adaptiveHeight: false,
        slidesToShow: 3,
        slidesToScroll: 1
    });

    $('.phone-mask').mask('+7(000)000-00-00');
});
