gsap.registerPlugin(ScrollTrigger, SplitText);
const sideNav = document.getElementById("side-nav");
const hamburger = document.getElementById("menu-bar");
const closeButton = document.getElementById("close-button");
const backdrop = document.getElementById("backdrop");
const header = document.getElementById("header");
const swiperCont = document.querySelector(".mySwiper");
const openMenu = () => {
    sideNav.classList.remove("close");
    hamburger.style.display = "none";
    backdrop.style.opacity = "1";
    backdrop.style.zIndex = "1001";
};
const closeMenu = () => {
    sideNav.classList.add("close");
    hamburger.style.display = "block";
    backdrop.style.opacity = "0";
    backdrop.style.zIndex = "0";
};
hamburger.addEventListener("click", openMenu);
closeButton.addEventListener("click", closeMenu);
backdrop.addEventListener("click", closeMenu);
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
document.addEventListener("DOMContentLoaded", () => {
    const mq = window.matchMedia("(min-width: 810px)");
    const featuredSwiper = document.querySelector(".featuredSwiper");
    const featuredWrapper = document.querySelector(".featured-wrapper");
    let featured = null;
    featuredSwiper.classList.remove("swiper", "swiper-initialized");
    featuredWrapper.classList.remove("swiper-wrapper");
    function addSwiperClasses() {
        featuredSwiper.classList.add("swiper");
        featuredWrapper.classList.add("swiper-wrapper");
    }
    function removeSwiperClasses() {
        featuredSwiper.classList.remove("swiper", "swiper-initialized");
        featuredWrapper.classList.remove("swiper-wrapper");
    }
    function initSwiper() {
        addSwiperClasses();
        featured = new Swiper(featuredSwiper, {
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
                    slidesPerView: 3,
                },
            },
        });
    }
    function enableMobile() {
        if (!featured)
            initSwiper();
    }
    function disableMobile() {
        if (featured) {
            featured.destroy(true, true);
            featured = null;
            featuredWrapper.removeAttribute("style");
            featuredWrapper
                .querySelectorAll(".swiper-slide")
                .forEach((el) => el.removeAttribute("style"));
            removeSwiperClasses();
        }
    }
    if (mq.matches)
        disableMobile();
    else
        enableMobile();
    mq.addEventListener("change", (e) => e.matches ? disableMobile() : enableMobile());
});
export {};
//# sourceMappingURL=about.js.map