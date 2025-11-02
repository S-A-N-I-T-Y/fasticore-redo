import type gsapType from "gsap";
declare const gsap: typeof gsapType;
declare const Swiper: any;
gsap.registerPlugin(ScrollTrigger, SplitText);

const faqHeaders = document.querySelectorAll<HTMLElement>(".faq-header");
const faqContents = document.querySelectorAll<HTMLElement>(".faq-content");

document.addEventListener("DOMContentLoaded", () => {
  const steps = document.querySelectorAll<HTMLElement>(".step");
  const formSteps = document.querySelectorAll<HTMLElement>(".form-step");
  const prev = document.querySelectorAll<HTMLElement>(".prev");
  const next = document.querySelectorAll<HTMLElement>(".next");
  const projectButtons = document.querySelectorAll<HTMLButtonElement>(
    "section .section-button"
  );
  const form = document.getElementById("quote-form");

  let currentStep = 1;
  let selectedProject: string | null = null;

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

  const validateStep = (stepNumber: number): boolean => {
    let valid = true;
    formSteps[stepNumber - 1]
      ?.querySelectorAll("input, textarea, select")
      .forEach((el) => {
        (el as HTMLElement).classList.remove("error");
      });

    switch (stepNumber) {
      case 1:
        if (!selectedProject) {
          alert("Please select a project type.");
          valid = false;
        }
        break;
      case 2:
        const step2Inputs = formSteps[1]?.querySelectorAll("textarea, input");
        step2Inputs?.forEach((input: any) => {
          if (input.value.trim() === "") {
            input.classList.add("error");
            valid = false;
          }
        });
        if (!valid) alert("Please fill in all necessary fields");
        break;

      case 3:
        const requiredStep3 = formSteps[2]?.querySelectorAll(
          "input[required], textarea,"
        );

        requiredStep3?.forEach((input: any) => {
          if (input.value.trim() === "") {
            input.classList.add("error");
            valid = false;
          }
        });
        if (!valid) alert("Please complete your contact information");
        break;

      case 4:
        const step4Inputs = formSteps[3]?.querySelectorAll("textarea, input");
        step4Inputs?.forEach((input: any) => {
          if (input.value.trim() === "") {
            input.classList.add("error");
            valid = false;
          }
        });
        if (!valid) alert("Please fill in the final fields before submitting");
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
        } else {
          alert("Form submitted.");
        }
      }
    });
  });

  prev.forEach((btn) => {
    btn.addEventListener("click", () => {
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

  form?.addEventListener("submit", () => {
    alert("Your Response has been submitted.");
  });
});

faqHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    let faq = header.parentElement;
    let faqContent = faq?.querySelector<HTMLElement>(".faq-content");
    faqContents.forEach((content) => {
      if (content !== faqContent) {
        content.classList.remove("active");
        content.style.maxHeight = "0";
      }
    });
    faqContent?.classList.toggle("active");
    if (faqContent) {
      if (faqContent.classList.contains("active")) {
        faqContent.style.maxHeight = faqContent.scrollHeight + "px";
      } else {
        faqContent.style.maxHeight = "0";
      }
    }
  });
});
