import type gsapType from "gsap";
declare const gsap: typeof gsapType;
declare const Swiper: any;
gsap.registerPlugin(ScrollTrigger, SplitText);




document.addEventListener("DOMContentLoaded", () => {
  const steps = document.querySelectorAll<HTMLElement>(".step");
  const formSteps = document.querySelectorAll<HTMLElement>(".form-step");
  const prev = document.querySelectorAll<HTMLElement>(".prev");
  const next = document.querySelectorAll<HTMLElement>(".next");

  let currentStep = 1;

  const updateFormSteps = () => {
    formSteps.forEach((step) => {
      step.classList.toggle(
        "active",
        Number(step.dataset.step) === currentStep
      );
    });

    steps.forEach((stepEl, i) => {
      const stepNum = Number(stepEl.dataset.step);
      stepEl.classList.toggle("active", stepNum <= currentStep);
    });
  };

  next.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      if (currentStep < formSteps.length) currentStep++;

      updateFormSteps();
    });
  });

  prev.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      if (currentStep > 1) currentStep--;
      updateFormSteps();
    });
  });

  steps.forEach((stepEl) => {
    stepEl.addEventListener("click", (e) => {
      e.preventDefault();
      currentStep = Number(stepEl.dataset.step);
      updateFormSteps();
    });
  });
});
