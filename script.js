let burger = document.querySelector(".header_burger__mobile");
let menuMobile = document.querySelector(".menu_mobile");
let headerContainer = document.querySelector(".header_container");
let header = document.querySelector(".header");
let cover = document.querySelector(".cover");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menuMobile.classList.toggle("active");
    headerContainer.classList.toggle("active");
    header.classList.toggle("active");
    cover.classList.toggle("active");
});

cover.addEventListener("click", () => {
    burger.classList.remove("active");
    menuMobile.classList.remove("active");
    headerContainer.classList.remove("active");
    header.classList.remove("active");
    cover.classList.remove("active");
});

