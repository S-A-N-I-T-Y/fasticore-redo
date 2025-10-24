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
document.addEventListener("DOMContentLoaded", () => {
    const steps = document.querySelectorAll(".step");
    const formSteps = document.querySelectorAll(".form-step");
    const prev = document.querySelectorAll(".prev");
    const next = document.querySelectorAll(".next");
    let currentStep = 1;
    const updateFormSteps = () => {
        formSteps.forEach((step) => {
            step.classList.toggle("active", Number(step.dataset.step) === currentStep);
        });
        steps.forEach((stepEl, i) => {
            const stepNum = Number(stepEl.dataset.step);
            stepEl.classList.toggle("active", stepNum <= currentStep);
        });
    };
    next.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            if (currentStep < formSteps.length)
                currentStep++;
            updateFormSteps();
        });
    });
    prev.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            if (currentStep > 1)
                currentStep--;
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
export {};
//# sourceMappingURL=services.js.map