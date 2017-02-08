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

  $(".c-btn-record").on("click",function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });

    $(".c-enrol").on("click",function (event) {
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


  //timer
  // var remain_bv   = 1657680;
  // function parseTime_bv(timestamp){
  // if (timestamp < 0) timestamp = 0;
  //
  // var day = Math.floor( (timestamp/60/60) / 24);
  // var hour = Math.floor(timestamp/60/60);
  // var mins = Math.floor((timestamp - hour*60*60)/60);
  // var secs = Math.floor(timestamp - hour*60*60 - mins*60);
  // var left_hour = Math.floor( (timestamp - day*24*60*60) / 60 / 60 );
  //
  // $('.c-time_day').text(day);
  // $('.c-time_hour').text(left_hour);
  //
  // if(String(mins).length > 1)
  //     $('.c-time_mins').text(mins);
  // else
  //     $('.c-time_mins').text("0" + mins);
  // if(String(secs).length > 1)
  //     $('.c-time_secs').text(secs);
  // else
  //     $('.c-time_secs').text("0" + secs);
  //
  // }
  // setInterval(function(){
  //     remain_bv = remain_bv - 1;
  //     parseTime_bv(remain_bv);
  //     if(remain_bv <= 0){
  //         alert('Hello');
  //     }
  // }, 1000);

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

function initializeClock(id, endtime) {
  var clock = document.querySelector(".c-timer");
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

var deadline = new Date(Date.parse(new Date()) + 14 * 24 * 60 * 60 * 1000);
initializeClock('.c-timer', deadline);

});
