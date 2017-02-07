$(document).ready(function () {


  // $('section').addClass("hidden").viewportChecker({
  //   classToAdd: 'visible animated fadeIn',
  //   offset: 100
  // });

  $(".footer-btn-up").on("click", function(e){
    e.preventDefault();
    // $("body").scrollTo(0);
    $('body,html').animate({
        scrollTop: 0
      }, 700
    );
  });
});
