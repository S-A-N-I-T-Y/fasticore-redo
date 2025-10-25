const header = document.getElementById("header");
const headeranchor = document.querySelectorAll("header .navlist li a");
const sideNav = document.getElementById("side-nav") as HTMLElement;
const hamburger = document.getElementById("menu-bar") as HTMLElement;
const closeButton = document.getElementById("close-button") as HTMLElement;
const backdrop = document.getElementById("backdrop") as HTMLElement;
const form = document.querySelector(".footer-form") as HTMLFormElement;
const nameInput = document.getElementById("footer-name") as HTMLInputElement;
const emailInput = document.getElementById("footer-email") as HTMLInputElement;
const messageInput = document.getElementById(
  "footer-textarea"
) as HTMLTextAreaElement;
const errorMsg = document.getElementById("error-message") as HTMLElement;

console.log(headeranchor);

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
  .fromTo(
    header,
    { backgroundColor: "transparent", borderBottom: "2px solid transparent" },
    {
      backgroundColor: "#ffffff",
      color: "#454452",
      borderBottom: "1px solid #00000010",
      ease: "power1.inOut",
    }
  )
  .to(headeranchor, {
    color: "#454452",
  });

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (!name || !email || !message) {
    errorMsg.style.marginTop = "1rem";
    errorMsg.style.color = "red";
    errorMsg.textContent = "Please fill in all fields.";
    return;
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    errorMsg.textContent = "Please enter a valid email address.";
    return;
  }
  errorMsg.textContent = "";
  alert("Message Sent Successfully");
  form.reset();
});
