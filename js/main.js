$(document).ready(function () {

  //липкий nav
  // $(".header_menu").stick_in_parent();

  $(window).scroll(function(){
    var winTop = $(window).scrollTop();
    if(winTop >= 530){
      $(".header_menu").addClass("sticky-header");
    }else{
      $(".header_menu").removeClass("sticky-header");
    }//if-else
  });//win func.

//плавное появление
  $('section').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated fadeIn',
    offset: 100
  });

var menuHeight = 90;
//плавный якорь
$(".c-menu").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top - menuHeight;
      $('body,html').animate({scrollTop: top}, 1000);
  });

  $(".c-btn-record").on("click",function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top - menuHeight - 80;
        $('body,html').animate({scrollTop: top}, 1000);
    });

    $(".c-enrol").on("click",function (event) {
          event.preventDefault();
          var id  = $(this).attr('href'),
              top = $(id).offset().top - menuHeight;
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

//slider
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

//timer
  function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(timer, endtime) {
  var clock = document.querySelector(timer);
  var daysSpan = clock.querySelector('.c-time_day');
  var hoursSpan = clock.querySelector('.c-time_hour');
  var minutesSpan = clock.querySelector('.c-time_mins');
  var secondsSpan = clock.querySelector('.c-time_secs');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

//если надо установить количество дней для таймера, раскоментировать строчку ниже и изменить значения
// var deadline = new Date(Date.parse(new Date()) + 14 * 24 * 60 * 60 * 1000);

//если отправная точка определенная дата
var deadline = "2017-03-05";

initializeClock('.c-timer', deadline);
initializeClock('.entry-course .c-timer', deadline);

});
