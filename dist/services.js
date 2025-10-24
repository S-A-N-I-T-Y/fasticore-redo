gsap.registerPlugin(ScrollTrigger, SplitText);
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