// Smooth scroll for navigation buttons
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Initialize fade-in effect styles
document.querySelectorAll("section").forEach(section => {
    section.style.opacity = 0;
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 1s ease";
});

// Fade-in animation when scrolling
window.addEventListener("scroll", () => {
    document.querySelectorAll("section").forEach(section => {
        const sectionPos = section.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.3;

        if (sectionPos < screenPos) {
            section.style.opacity = 1;
            section.style.transform = "translateY(0)";
        }
    });
});

