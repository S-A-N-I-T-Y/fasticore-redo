gsap.registerPlugin(ScrollTrigger, SplitText);
const sideNav = document.getElementById("side-nav");
const hamburger = document.getElementById("menu-bar");
const closeButton = document.getElementById("close-button");
const backdrop = document.getElementById("backdrop");
const header = document.getElementById("header");
const hero = document.getElementById("hero");
const heroText = document.getElementById("hero-text");
const heroImg = document.getElementById("hero-img");
const heroH1 = document.getElementById("strategy");
const herobtn = document.getElementById("hero-btn");
const swiperCont = document.querySelector(".mySwiper");
const services = document.getElementById("services");
const servicesh2 = document.getElementById("services-h2");
const servicesh3 = document.getElementById("services-h3");
const build = document.getElementById("build");
const buildText = document.getElementById("build-text");
const buildImg = document.getElementById("build-img");
const solution = document.getElementById("solution");
const solutionText = document.getElementById("solution-text");
const solutionImg = document.getElementById("solution-img");
const about = document.getElementById("about");
const aboutImg = document.getElementById("about-img");
const aboutText = document.getElementById("about-text");
const aboutCard = document.querySelectorAll(".about-card");
const journey = document.getElementById("journey");
const journeyH2 = document.getElementById("journey-h2");
const journeyTrack = document.querySelectorAll(".track");
const journeyLine = document.querySelectorAll(".line");
const journeyCard = document.querySelectorAll(".journey-card");
const journeyRight = document.querySelectorAll(".right");
const journeyLeft = document.querySelectorAll(".left");
const partner = document.getElementById("partner");
const globe = document.querySelector(".globe");
const locations = document.querySelector(".locations");
const worldTextH2 = document.querySelector(".world-text h2");
const worldTextP = document.querySelector(".world-text p");
const footer = document.getElementById("footer");
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
const headerTween = gsap
    .timeline({
    scrollTrigger: {
        trigger: header,
        start: "bottom top",
        toggleActions: "play none none reverse",
    },
})
    .fromTo(header, { backgroundColor: "transparent", borderBottom: "2px solid transparent" }, {
    backgroundColor: "#ffffff",
    borderBottom: "1px solid #00000010",
    ease: "power1.inOut",
});
const heroTween = gsap
    .timeline({
    scrollTrigger: {
        trigger: hero,
    },
})
    .from(heroText, {
    opacity: 0,
    xPercent: -50,
    duration: 1,
    ease: "power1.inOut",
})
    .from(heroImg, {
    opacity: 0,
    xPercent: 50,
    duration: 1,
    ease: "power1.inOut",
}, 0);
gsap.from(servicesh2, {
    opacity: 0,
    yPercent: 100,
    duration: 1,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: servicesh2,
        start: "top bottom",
        toggleActions: "play none none reverse",
    },
});
gsap.from(servicesh3, {
    opacity: 0,
    yPercent: 50,
    duration: 1,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: servicesh3,
        start: "top bottom",
        toggleActions: "play none none reverse",
    },
});
gsap.from(swiperCont, {
    opacity: 0,
    yPercent: 15,
    duration: 1,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: swiperCont,
        start: "top bottom",
        toggleActions: "play none none reverse",
    },
});
const buildTween = gsap.timeline({
    scrollTrigger: {
        trigger: build,
        start: "10% 80%",
    },
});
buildTween.fromTo(buildText, {
    xPercent: -50,
    opacity: 0,
}, {
    xPercent: 0,
    opacity: 1,
    duration: 0.5,
    ease: "power1.inOut",
});
buildTween.fromTo(buildImg, {
    opacity: 0,
    xPercent: 50,
}, {
    xPercent: 0,
    opacity: 1,
    delay: 0.1,
    duration: 0.5,
    ease: "power1.inOut",
});
journeyCard.forEach((card) => {
    gsap.from(card, {
        opacity: 0,
        duration: 1,
        ease: "power1.inOut",
        y: 50,
        scrollTrigger: {
            trigger: card,
            start: "20% 90%",
            toggleActions: "play none none reverse",
        },
    });
});
journeyTrack.forEach((trck) => {
    gsap.from(trck, {
        opacity: 0,
        duration: 0.5,
        ease: "power1.inOut",
        scrollTrigger: {
            trigger: trck,
            start: "80% bottom",
            toggleActions: "play none none reverse",
        },
    });
});
journeyLine.forEach((line, i) => {
    gsap.from(line, {
        opacity: 0,
        scrollTrigger: {
            trigger: line,
            start: "top 80%",
            scrub: true,
            toggleActions: "play none none reverse",
        },
    });
});
export {};
//# sourceMappingURL=index.js.map