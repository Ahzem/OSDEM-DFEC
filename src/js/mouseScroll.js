// when scroll down 100px from the top, hide mouse-scroll
window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            document.getElementById("mouse-scroll").style.display = "none";
        } else {
            document.getElementById("mouse-scroll").style.display = "block";
        }
    }