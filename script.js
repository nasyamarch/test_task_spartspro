let burger = document.querySelector(".header_burger__mobile");
let menuMobile = document.querySelector(".menu_mobile");
let headerLogoMobile = document.querySelector(".header_logo__mobile");
let headerMobile = document.querySelector(".header_mobile");
let cover = document.querySelector(".cover");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menuMobile.classList.toggle("active");
    headerLogoMobile.classList.toggle("active");
    headerMobile.classList.toggle("active");
    cover.classList.toggle("active");
});

cover.addEventListener("click", () => {
    burger.classList.remove("active");
    menuMobile.classList.remove("active");
    headerLogoMobile.classList.remove("active");
    headerMobile.classList.remove("active");
    cover.classList.remove("active");
});