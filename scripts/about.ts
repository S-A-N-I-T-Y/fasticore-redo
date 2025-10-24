import type gsapType from "gsap";
declare const gsap: typeof gsapType;
declare const Swiper: any;
gsap.registerPlugin(ScrollTrigger, SplitText);

const sideNav = document.getElementById("side-nav") as HTMLElement;
const hamburger = document.getElementById("menu-bar") as HTMLElement;
const closeButton = document.getElementById("close-button") as HTMLElement;
const backdrop = document.getElementById("backdrop") as HTMLElement;
const header = document.getElementById("header") as HTMLElement;
const swiperCont = document.querySelector(".mySwiper") as HTMLElement;

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
  const featuredSwiper = document.querySelector(
    ".featuredSwiper"
  ) as HTMLElement;
  const featuredWrapper = document.querySelector(
    ".featured-wrapper"
  ) as HTMLElement;

  let featured: null | typeof Swiper = null;
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
    if (!featured) initSwiper();
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

  if (mq.matches) disableMobile();
  else enableMobile();

  mq.addEventListener("change", (e) =>
    e.matches ? disableMobile() : enableMobile()
  );
});
