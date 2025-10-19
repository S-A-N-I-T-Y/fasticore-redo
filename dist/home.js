gsap.registerPlugin(ScrollTrigger, SplitText);
const swiperCont = document.querySelector(".mySwiper");
const valuesSwiper = new Swiper(swiperCont, {
    speed: 700,
    resistanceRatio: 0.2,
    slidesPerView: "auto",
    grabCursor: true,
    autoHeight: true,
    spaceBetween: 24,
    centeredSlidesBounds: true,
    keyboard: { enabled: true },
    observer: true,
    observerParents: true,
});
const header = document.getElementById("header");
console.log(header);
console.log(gsap);
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