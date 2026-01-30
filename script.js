// ✅ SMOOTH SCROLL FOR NAV LINKS
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// ✅ SCROLL REVEAL ANIMATION
const revealElements = document.querySelectorAll(
  ".glass-section, .project-card, .skills-section, .resume-section, .contact-section"
);

function revealOnScroll() {
  revealElements.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 120;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // Run on page load


// ✅ NAVBAR BACKGROUND ON SCROLL
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (navbar) {
    if (window.scrollY > 60) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
  }
});


// ✅ SKILL BAR ANIMATION
const skillFills = document.querySelectorAll(".fill");

function animateSkills() {
  skillFills.forEach(skill => {
    const skillTop = skill.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (skillTop < windowHeight - 100) {
      skill.style.width =
        skill.classList.contains("python") ? "90%" :
        skill.classList.contains("ml") ? "85%" :
        skill.classList.contains("web") ? "80%" : "75%";
    }
  });
}

window.addEventListener("scroll", animateSkills);


// ✅ BUTTON RIPPLE EFFECT
const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {
  btn.addEventListener("click", function (e) {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    const ripple = document.createElement("span");
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.classList.add("ripple");

    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});
document.querySelectorAll(".glass-section").forEach(el => el.classList.add("visible"));
