$(document).ready(function () {

  //липкий nav

  $(window).scroll(function(){
    var winTop = $(window).scrollTop();
    if(winTop >= 530){
      $(".header_menu").addClass("sticky-header");
    }else{
      $(".header_menu").removeClass("sticky-header");
    }//if-else
  });//win func.

    $(window).scroll(function(){
        var winTop = $(window).scrollTop();
        if(winTop >= 230){
            $(".c-menu_mobile").addClass("js-btn-sticky");
        }else{
            $(".c-menu_mobile").removeClass("js-btn-sticky");
        }//if-else
    });//win func.

//плавное появление
  $('section').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated fadeIn',
    offset: 100
  });



//плавный якорь
function scrollToAnchor (elem) {
  $(elem).on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            menuHeight = 75,
            top = $(id).offset().top;
            topIndent = top - menuHeight;
            // console.log(top)
        $('body').animate({scrollTop: topIndent}, 1000);
    });
};



scrollToAnchor(".c-menu a");
scrollToAnchor(".c-btn-record");
scrollToAnchor(".c-enrol");
scrollToAnchor(".c-scroll-down_icon");

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
      slidesToScroll: 1,
      responsive: [
          {
              breakpoint: 980,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
              }
          },
          {
              breakpoint: 640,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          }
      ]
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
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.trainers .slider').slick({
        autoplay: false,
        autoplaySpeed: 5000,
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        adaptiveHeight: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 740,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
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
var deadline = "2017-06-05";

initializeClock('.c-timer', deadline);
initializeClock('.entry-course .c-timer', deadline);


    //mobile menu
    $(".header .c-menu_mobile, .header_menu .c-menu_link, .header .c-enrol").on("click", function(e){
        e.preventDefault();
       $(".header_menu").toggleClass("js-show-menu");
    });

    $(".c-menu-close").on("click", function(e){
        e.preventDefault();
        $(".header_menu").removeClass("js-show-menu");
    });



    //счетчик выпускников
    var start = 50;
    function add_counter() {

        var invervat = 1;
        var end = 9999;

        if(start < end && start <=99) {
            start += invervat ;
            $('.header-count_number--color').html("00" + start)
        }else if (start < end && start <=999) {
            start += 1 ;
            $('.header-count_number--color').html("0" + start)
        }
        else {
            start += 1 ;
            $('.header-count_number--color').html(start)
        }
    }

    //12 часов = 43200 сек * 1000 милисекунд
    var timerId = setInterval(add_counter, 43200000);


//     // заносим объект в хранилище
//     localStorage.setItem( 'countPeople', start);
// // считываем объект из хранилища
//     var option = localStorage.getItem('countPeople');
// // применяем к нужному
//     $('.header-count_number--color').html(option);
});
