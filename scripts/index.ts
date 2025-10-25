import type gsapType from "gsap";
declare const gsap: typeof gsapType;
declare const Swiper: any;
gsap.registerPlugin(ScrollTrigger, SplitText);

const hero = document.getElementById("hero") as HTMLElement;
const heroText = document.getElementById("hero-text") as HTMLElement;
const heroImg = document.getElementById("hero-img") as HTMLElement;
const heroH1 = document.getElementById("strategy") as HTMLElement;
const herobtn = document.getElementById("hero-btn") as HTMLElement;
const swiperCont = document.querySelector(".mySwiper") as HTMLElement;
const services = document.getElementById("services") as HTMLElement;
const servicesh2 = document.getElementById("services-h2") as HTMLElement;
const servicesh3 = document.getElementById("services-h3") as HTMLElement;
const build = document.getElementById("build") as HTMLElement;
const buildText = document.getElementById("build-text") as HTMLElement;
const buildImg = document.getElementById("build-img") as HTMLElement;
const solution = document.getElementById("solution") as HTMLElement;
const solutionText = document.getElementById("solution-text") as HTMLElement;
const solutionImg = document.getElementById("solution-img") as HTMLElement;
const about = document.getElementById("about") as HTMLElement;
const aboutImg = document.getElementById("about-img") as HTMLElement;
const aboutText = document.getElementById("about-text") as HTMLElement;
const aboutCards = document.querySelectorAll<HTMLElement>(".about-card");
const journey = document.getElementById("journey") as HTMLElement;
const journeyH2 = document.getElementById("journey-h2") as HTMLElement;
const journeyTrack = document.querySelectorAll<HTMLImageElement>(".track");
const journeyLine = document.querySelectorAll<HTMLDivElement>(".line");
const journeyCard = document.querySelectorAll<HTMLElement>(".journey-card");
const journeyRight = document.querySelectorAll<HTMLElement>(".right");
const journeyLeft = document.querySelectorAll<HTMLElement>(".left");
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
  .from(
    heroImg,
    {
      opacity: 0,
      xPercent: 50,
      duration: 1,
      ease: "power1.inOut",
    },
    0
  );
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

// const buildTween = gsap.timeline({
//   scrollTrigger: {
//     trigger: build,
//     start: "10% 80%",
//   },
// });

// buildTween.fromTo(
//   buildText,
//   {
//     xPercent: -50,
//     opacity: 0,
//   },
//   {
//     xPercent: 0,
//     opacity: 1,
//     duration: 1,
//     ease: "power1.inOut",
//   }
// );

// buildTween.fromTo(
//   buildImg,
//   {
//     opacity: 0,
//     xPercent: 50,
//   },
//   {
//     xPercent: 0,
//     opacity: 1,
//     delay: 0.1,
//     duration: 1,
//     ease: "power1.inOut",
//   }
// );

// const solutionTween = gsap
//   .timeline({
//     scrollTrigger: {
//       trigger: solution,
//       start: "10% 80%",
//     },
//   })
//   .fromTo(
//     solutionText,
//     {
//       xPercent: 50,
//       opacity: 0,
//     },
//     {
//       xPercent: 0,
//       opacity: 1,
//       duration: 1,
//       ease: "power1.inOut",
//     }
//   )
//   .fromTo(
//     solutionImg,
//     {
//       opacity: 0,
//       xPercent: -50,
//     },
//     {
//       xPercent: 0,
//       opacity: 1,
//       duration: 1,
//       ease: "power1.inOut",
//     }
//   );

// const aboutTween = gsap
//   .timeline({
//     scrollTrigger: {
//       trigger: about,
//       start: "10% 80%",
//     },
//   })
//   .fromTo(
//     aboutImg,
//     {
//       xPercent: -50,
//       opacity: 0,
//     },
//     {
//       xPercent: 0,
//       opacity: 1,
//       duration: 1,
//       ease: "power1.inOut",
//     }
//   )
//   .fromTo(
//     aboutText,
//     {
//       opacity: 0,
//       xPercent: 50,
//     },
//     {
//       xPercent: 0,
//       opacity: 1,
//       duration: 1,
//       ease: "power1.inOut",
//     }
//   );

aboutCards.forEach((card) => {
  gsap.from(card, {
    yPercent: 20,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
      trigger: card,
      start: "top 90%",
      toggleActions: "play none none reverse",
    },
  });
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
