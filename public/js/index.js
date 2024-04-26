var oldScroll = window.scrollY;
var headers = document.querySelectorAll("header");
const nav = document.getElementById("icontoggle");
const navLinks = document.getElementById("navbar");
const waLink = document.getElementById("wa-link");
// const rows = document.querySelectorAll(".row")

// rows.style.animation = "moveup 1s ease";

waLink.setAttribute('href', 'https://wa.me/6383457208');

// waLink.setAttribute('href', `https://wa.me/${mobileNumber}`);




window.onscroll = function () {
    var currentScroll = window.scrollY;
    headers.forEach(function (header) {
        if (oldScroll > currentScroll) {
            header.style.top = "0";

        } else {
            header.style.top = "-100%";

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



