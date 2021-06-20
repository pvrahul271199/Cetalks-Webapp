try { //Pre Loader
    $(window).on('load', function () {
        $(".loader_bg").fadeToggle();
    });

    // Navbar JS
    const menu_open = document.getElementById("menu_toggle");
    const menu_close = document.getElementsByClassName("closebtn");
    const overlay_menu = document.getElementsByClassName("overlay");

    function openNav() {
        menu_open.classList.add("animation");
        overlay_menu[0].classList.add("show");
        menu_open.style.opacity = "0";
        // overlay_menu[0].classList.add("demo");
    }

    function close_Nav() {
        menu_open.style.opacity = "1";
        overlay_menu[0].classList.remove("show");
        menu_open.classList.remove("animation");

    }

    menu_open.addEventListener("click" || "swiped-right", () => {
        openNav();
    });

    menu_close[0].addEventListener("click", () => {
        close_Nav();
    });


    // //  To close overlay when Clicked Outside
    document.addEventListener("click", function (e) {
        let boolean_nav = overlay_menu[0].classList.contains('show');
        console.log(e.target.className === "overlay show")
        if (boolean_nav) {
            if (e.target.className !== "overlay show" && e.target.className !== "demoJS") {
                close_Nav();
            }
        }
    })



} catch (e) {
    alert("Slow Internet Connection");
    console.log(e);
}
// End of JS