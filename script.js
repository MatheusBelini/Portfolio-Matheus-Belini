const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const overlay = document.querySelector(".overlay");

function openMenu(){
  mobileMenu.classList.add("active");
  overlay.classList.add("active");
  menuBtn.innerHTML = '<i class="bi bi-x-lg"></i>';
}

function closeMenu(){
  mobileMenu.classList.remove("active");
  overlay.classList.remove("active");
  menuBtn.innerHTML = '<i class="bi bi-list"></i>';
}

menuBtn.addEventListener("click",()=>{
  mobileMenu.classList.contains("active") ? closeMenu() : openMenu();
});

overlay.addEventListener("click",closeMenu);

document.querySelectorAll(".mobile-menu a").forEach(link=>{
  link.addEventListener("click",closeMenu);
});

const themeToggle=document.getElementById("themeToggle");
themeToggle.addEventListener("click",()=>{
  document.body.classList.toggle("light");
  themeToggle.innerHTML=document.body.classList.contains("light")
  ? '<i class="bi bi-sun"></i>'
  : '<i class="bi bi-moon"></i>';
});



document.getElementById("year").textContent=new Date().getFullYear();
