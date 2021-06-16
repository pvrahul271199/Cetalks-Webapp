// Scroll Effect
$(document).ready(function () {
  var scroll_start = 0;
  var startchange = $('.main-writeup');
  var offset = startchange.offset();
  $(document).scroll(function () {
    scroll_start = $(this).scrollTop();
    if (scroll_start > offset.top - 272) {
      $('#header').css('background-color', '#fff');
      $('#header').css('box-shadow', '0px 2px 15px rgba(0, 0, 0, 0.1)');
    }
  });
});


// Play and pause

var x = document.getElementById("myAudio");
var pause = document.querySelector('.pause');
var play = document.querySelector('.play');
var btn = document.querySelector('#app');
var whole = document.querySelector('.wholeplayer');
// Play and pause
btn.addEventListener('click', () => {
  if (x.paused) {
    // This block of code lets to make animation in play and pause button
    x.play();
    play.classList.remove("active");
    pause.classList.add("active");
  }
  else {
    x.pause();
    pause.classList.remove("active");
    play.classList.add("active");

  }
});
