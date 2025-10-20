gsap.registerPlugin(ScrollTrigger, SplitText);
const swiperCont = document.querySelector(".mySwiper");
const valuesSwiper = new Swiper(swiperCont, {
    speed: 700,
    slidesPerView: "auto",
    resistanceRatio: 0.2,
    grabCursor: true,
    autoHeight: true,
    spaceBetween: 24,
    centeredSlidesBounds: true,
    keyboard: { enabled: true },
    observer: true,
    observerParents: true,
    breakpoints: {
        1100: {
            slidesPerView: 2.5,
        },
    },
});
const sideNav = document.getElementById("side-nav");
const hamburger = document.getElementById("menu-bar");
const closeButton = document.getElementById("close-button");
const backdrop = document.getElementById("backdrop");
const openMenu = () => {
    sideNav.classList.remove("close");
    hamburger.style.display = "none";
    backdrop.style.opacity = "1000";
};
const closeMenu = () => {
    sideNav.classList.add("close");
    hamburger.style.display = "block";
    backdrop.style.opacity = "0";
};
hamburger.addEventListener("click", openMenu);
closeButton.addEventListener("click", closeMenu);
backdrop.addEventListener("click", closeMenu);
const header = document.getElementById("header");
console.log(header);
console.log(gsap);
console.log(header === null || header === void 0 ? void 0 : header.clientHeight);
const headerTween = gsap
    .timeline({
    scrollTrigger: {
        trigger: header,
        start: "bottom top",
    },
})
    .fromTo(header, { backgroundColor: "transparent" }, {
    backgroundColor: "#ffffff",
    duration: 0.5,
    ease: "power1.inOut",
});
export {};
//# sourceMappingURL=home.js.map