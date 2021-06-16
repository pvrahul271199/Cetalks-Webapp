
// Scroll Effect
$(document).ready(function () {
  let scroll_start = 0;
  let startchange = $('.jumbotron');
  let offset = startchange.offset();
  $(document).scroll(function () {
    scroll_start = $(this).scrollTop();
    if (scroll_start > offset.top - 72) {
      $('#header').css('background-color', '#fff');
      $('#header').css('box-shadow', '0px 2px 15px rgba(0, 0, 0, 0.1)');
    }
  });
});