const els = document.querySelectorAll(".fade");
const obs = new IntersectionObserver(
  (e) =>
    e.forEach((x) => {
      if (x.isIntersecting) {
        x.target.classList.add("show");
        obs.unobserve(x.target);
      }
    }),
  { threshold: 0.12 },
);
els.forEach((el) => obs.observe(el));
document.querySelector("#hero .fade").classList.add("show");

let lastScroll = 0;
window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  if (currentScroll > 300 && currentScroll < lastScroll) {
    document.getElementById("scrollTop").classList.add("show");
  } else if (currentScroll >= lastScroll || currentScroll < 300) {
    document.getElementById("scrollTop").classList.remove("show");
  }
  lastScroll = currentScroll;
});

let curLang = localStorage.getItem("lang") || "en";
function setLang(lang) {
  curLang = lang;
  localStorage.setItem("lang", lang);
  document.querySelectorAll("[data-en]").forEach((el) => {
    el.innerHTML = el.getAttribute("data-" + lang);
  });
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.textContent.toLowerCase() === lang);
  });
  document.documentElement.setAttribute("data-lang", lang);
  document.getElementById("cv-download").href = "cv-ats-" + lang + ".html";
  document.getElementById("hero-avatar").style.display =
    lang === "id" ? "block" : "none";
  closeMenu();
}
setLang(curLang);

function toggleMenu() {
  const navItems = document.querySelector(".nav-items-wrapper");
  const hamburgerIcon = document.querySelector(".hamburger-menu i");
  navItems.classList.toggle("active");
  hamburgerIcon.classList.toggle("fa-bars");
  hamburgerIcon.classList.toggle("fa-xmark");
}

function closeMenu() {
  const navItems = document.querySelector(".nav-items-wrapper");
  const hamburgerIcon = document.querySelector(".hamburger-menu i");
  if (navItems.classList.contains("active")) {
    navItems.classList.remove("active");
    hamburgerIcon.classList.remove("fa-xmark");
    hamburgerIcon.classList.add("fa-bars");
  }
}

document.addEventListener("click", (e) => {
  const navItems = document.querySelector(".nav-items-wrapper");
  const hamburgerBtn = document.querySelector(".hamburger-menu");
  if (
    navItems.classList.contains("active") &&
    !navItems.contains(e.target) &&
    !hamburgerBtn.contains(e.target)
  ) {
    closeMenu();
  }
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

let currentTheme = localStorage.getItem("theme") || "dark";

function applyTheme(theme) {
  const htmlEl = document.documentElement;
  const themeToggleButton = document.getElementById("theme-toggle-btn");
  const icon = themeToggleButton.querySelector("i");

  if (theme === "dark") {
    htmlEl.setAttribute("data-theme", "dark");
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  } else {
    htmlEl.removeAttribute("data-theme");
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  }
}

function setTheme(theme) {
  if (!theme) {
    theme = currentTheme === "dark" ? "light" : "dark";
  }
  currentTheme = theme;
  localStorage.setItem("theme", theme);
  applyTheme(theme);
  closeMenu();
}

applyTheme(currentTheme);
document
  .getElementById("theme-toggle-btn")
  .addEventListener("click", () => setTheme());
