gsap.registerPlugin(ScrollTrigger, SplitText);
const faqHeaders = document.querySelectorAll(".faq-header");
const faqContents = document.querySelectorAll(".faq-content");
document.addEventListener("DOMContentLoaded", () => {
    const steps = document.querySelectorAll(".step");
    const formSteps = document.querySelectorAll(".form-step");
    const prev = document.querySelectorAll(".prev");
    const next = document.querySelectorAll(".next");
    const projectButtons = document.querySelectorAll("section .section-button");
    const form = document.getElementById("quote-form");
    let currentStep = 1;
    let selectedProject = null;
    const updateFormSteps = () => {
        formSteps.forEach((step) => {
            step.classList.toggle("active", Number(step.dataset.step) === currentStep);
        });
        steps.forEach((stepEl, i) => {
            const stepNum = Number(stepEl.dataset.step);
            stepEl.classList.toggle("active", stepNum <= currentStep);
        });
    };
    const validateStep = (stepNumber) => {
        var _a, _b, _c, _d;
        let valid = true;
        (_a = formSteps[stepNumber - 1]) === null || _a === void 0 ? void 0 : _a.querySelectorAll("input, textarea, select").forEach((el) => {
            el.classList.remove("error");
        });
        switch (stepNumber) {
            case 1:
                if (!selectedProject) {
                    alert("Please select a project type.");
                    valid = false;
                }
                break;
            case 2:
                const step2Inputs = (_b = formSteps[1]) === null || _b === void 0 ? void 0 : _b.querySelectorAll("textarea, input");
                step2Inputs === null || step2Inputs === void 0 ? void 0 : step2Inputs.forEach((input) => {
                    if (input.value.trim() === "") {
                        input.classList.add("error");
                        valid = false;
                    }
                });
                if (!valid)
                    alert("Please fill in all necessary fields");
                break;
            case 3:
                const requiredStep3 = (_c = formSteps[2]) === null || _c === void 0 ? void 0 : _c.querySelectorAll("input[required], textarea,");
                requiredStep3 === null || requiredStep3 === void 0 ? void 0 : requiredStep3.forEach((input) => {
                    if (input.value.trim() === "") {
                        input.classList.add("error");
                        valid = false;
                    }
                });
                if (!valid)
                    alert("Please complete your contact information");
                break;
            case 4:
                const step4Inputs = (_d = formSteps[3]) === null || _d === void 0 ? void 0 : _d.querySelectorAll("textarea, input");
                step4Inputs === null || step4Inputs === void 0 ? void 0 : step4Inputs.forEach((input) => {
                    if (input.value.trim() === "") {
                        input.classList.add("error");
                        valid = false;
                    }
                });
                if (!valid)
                    alert("Please fill in the final fields before submitting");
                break;
        }
        return valid;
    };
    projectButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            projectButtons.forEach((b) => {
                b.classList.remove("selected");
            });
            btn.classList.add("selected");
            selectedProject = btn.textContent.trim() || null;
        });
    });
    next.forEach((btn) => {
        btn.addEventListener("click", () => {
            if (validateStep(currentStep)) {
                if (currentStep < formSteps.length) {
                    currentStep++;
                    updateFormSteps();
                }
                else {
                    alert("Form submitted.");
                }
            }
        });
    });
    prev.forEach((btn) => {
        btn.addEventListener("click", () => {
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
    form === null || form === void 0 ? void 0 : form.addEventListener("submit", () => {
        alert("Your Response has been submitted.");
    });
});
faqHeaders.forEach((header) => {
    header.addEventListener("click", () => {
        let faq = header.parentElement;
        let faqContent = faq === null || faq === void 0 ? void 0 : faq.querySelector(".faq-content");
        faqContents.forEach((content) => {
            if (content !== faqContent) {
                content.classList.remove("active");
                content.style.maxHeight = "0";
            }
        });
        faqContent === null || faqContent === void 0 ? void 0 : faqContent.classList.toggle("active");
        if (faqContent) {
            if (faqContent.classList.contains("active")) {
                faqContent.style.maxHeight = faqContent.scrollHeight + "px";
            }
            else {
                faqContent.style.maxHeight = "0";
            }
        }
    });
});
export {};
//# sourceMappingURL=services.js.map