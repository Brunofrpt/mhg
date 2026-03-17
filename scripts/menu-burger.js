
const burgerButton  = document.querySelector(".nav__burger-logo");
const navBar = document.querySelector(".nav__bar");
const navLinks = document.querySelectorAll(".nav__link")

function closeMenu () {
    navBar.classList.remove("nav__bar--ouvert");
    burgerButton.setAttribute("aria-expanded", "false");
}

burgerButton.addEventListener("click" , function(event) {
    navBar.classList.toggle("nav__bar--ouvert");
        const isExpanded = burgerButton.getAttribute ("aria-expanded") === "true";
        burgerButton.setAttribute("aria-expanded" , String (!isExpanded));
        event.stopPropagation();
})

navLinks.forEach(function(link) {
    link.addEventListener("click", closeMenu);
});

document.addEventListener("click", function (event) {
    const clickMenu = navBar.contains(event.target);
    const clickBurger = burgerButton.contains(event.target)
    if (!clickMenu && !clickBurger) {
        closeMenu();
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && navBar.classList.contains("nav__bar--ouvert")) {
        closeMenu();
    }
})