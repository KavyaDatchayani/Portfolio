var oldScroll = window.scrollY;
var mainnavbar = document.querySelectorAll("#mainnavbar");
const nav = document.getElementById("icontoggle");
const navLinks = document.getElementById("navbar");
const waLink = document.getElementById("wa-link");


waLink.setAttribute('href', 'https://wa.me/6383457208');

window.onscroll = function () {
    var currentScroll = window.scrollY;
    mainnavbar.forEach(function (mainnavbar) {
        if (oldScroll > currentScroll) {
            mainnavbar.style.top = "0";

        } else {
            mainnavbar.style.top = "-100%";

        }
    });
    oldScroll = currentScroll;
}


nav.addEventListener("click", () => {
    if (nav.className === "fa fa-bars") {
        nav.className = "fa fa-times"
        navLinks.style.display = "block"


    } else if (nav.className === "fa fa-times") {
        nav.className = "fa fa-bars"
        navLinks.style.display = "none"
    }

});



