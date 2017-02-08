$(document).ready(function () {


  // $('section').addClass("hidden").viewportChecker({
  //   classToAdd: 'visible animated fadeIn',
  //   offset: 100
  // });

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
});
