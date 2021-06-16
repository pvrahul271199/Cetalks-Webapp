// Slide JS
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let slidestwo = document.getElementsByClassName("mySlidestwo");
    let slidesthree = document.getElementsByClassName("mySlidesthree");

    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slidestwo[i].style.display = "none";
        slidesthree[i].style.display = "none";

    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    slidestwo[slideIndex - 1].style.display = "block";
    slidesthree[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 3500); // Change image in every 2 seconds
}

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


