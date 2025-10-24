gsap.registerPlugin(ScrollTrigger, SplitText);
const sideNav = document.getElementById("side-nav");
const hamburger = document.getElementById("menu-bar");
const closeButton = document.getElementById("close-button");
const backdrop = document.getElementById("backdrop");
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
export {};
//# sourceMappingURL=solution.js.map