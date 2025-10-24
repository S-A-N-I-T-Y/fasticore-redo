import type gsapType from "gsap";
declare const gsap: typeof gsapType;
declare const Swiper: any;
gsap.registerPlugin(ScrollTrigger, SplitText);
const sideNav = document.getElementById("side-nav") as HTMLElement;
const hamburger = document.getElementById("menu-bar") as HTMLElement;
const closeButton = document.getElementById("close-button") as HTMLElement;
const backdrop = document.getElementById("backdrop") as HTMLElement;

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
