
// Select menu button and navigation links
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");


// Open and close mobile menu
menuBtn.addEventListener("click", function () {

    // Toggle active class
    navLinks.classList.toggle("active");

    // Change menu icon
    if (navLinks.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }

});


// Close menu after clicking a navigation link
const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");
        menuBtn.textContent = "☰";

    });

});


// Automatically update copyright year
document.getElementById("year").textContent =
    new Date().getFullYear();
