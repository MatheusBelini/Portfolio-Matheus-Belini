const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const overlay = document.querySelector(".overlay");
const themeToggle = document.getElementById("themeToggle");

// Abrir/Fechar Menu
function toggleMenu() {
    mobileMenu.classList.toggle("active");
    overlay.classList.toggle("active");
    const isOpen = mobileMenu.classList.contains("active");
    menuBtn.innerHTML = isOpen ? '<i class="bi bi-x-lg"></i>' : '<i class="bi bi-list"></i>';
}

menuBtn.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);

// Fechar ao clicar no link
document.querySelectorAll(".mobile-menu a").forEach(link => {
    link.addEventListener("click", toggleMenu);
});

// Theme Toggle
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
    const isLight = document.body.classList.contains("light");
    themeToggle.innerHTML = isLight ? '<i class="bi bi-sun"></i>' : '<i class="bi bi-moon"></i>';
});

// Reveal on Scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

document.getElementById("year").textContent = new Date().getFullYear();

function copyEmail() {
    const email = "matheusbelini4@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
        const feedback = document.getElementById("copyFeedback");
        feedback.innerHTML = 'E-mail copiado! <i class="bi bi-check-lg"></i>';
        feedback.style.color = "#00ff00"; // Fica verde ao copiar

        setTimeout(() => {
            feedback.innerHTML = 'Clique para copiar <i class="bi bi-copy"></i>';
            feedback.style.color = ""; 
        }, 3000);
    });
}