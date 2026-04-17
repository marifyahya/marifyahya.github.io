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

function t(key) {
  const keys = key.split(".");
  let value = translations;
  for (const k of keys) {
    if (value === undefined || value === null) return key;
    value = value[k];
  }
  if (value === undefined || value === null) return key;
  if (
    typeof value === "object" &&
    value !== null &&
    (value.en !== undefined || value.id !== undefined)
  ) {
    return value[curLang] || value.en || key;
  }
  return value;
}

function renderExperience() {
  const container = document.getElementById("experience-list");
  if (!container || !translations.experience) return;

  const jobs = translations.experience.jobs;
  let html = "";
  for (let i = 0; i < jobs.length; i++) {
    const job = jobs[i];
    const title = t(`experience.jobs.${i}.title`);
    const period = t(`experience.jobs.${i}.period`);
    const tags = job.tags;

    let dutiesHtml = "";
    for (let j = 0; j < job.duties.length; j++) {
      const dutyKey = `experience.jobs.${i}.duties.${j}`;
      dutiesHtml += `<li>${t(dutyKey)}</li>`;
    }

    let tagsHtml = tags
      .map((tag) => `<span class="tag">${tag}</span>`)
      .join("");

    html += `
      <div class="exp-card">
        <div class="exp-header">
          <div>
            <div class="exp-title">${title}</div>
            <div class="exp-company">${job.company}</div>
            <div class="exp-loc"><i class="fa-solid fa-location-dot"></i>${job.location}</div>
          </div>
          <div class="exp-year">${period}</div>
        </div>
        <ul class="exp-duties">${dutiesHtml}</ul>
        <div class="exp-tags">${tagsHtml}</div>
      </div>
    `;
  }
  container.innerHTML = html;
}

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.textContent = t(key);
  });
}

function initLangButtons() {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.textContent.toLowerCase() === curLang);
  });
  document.documentElement.setAttribute("data-lang", curLang);
  document.getElementById("cv-download").href = "cv.html?lang=" + curLang;
  document.getElementById("hero-avatar").style.display =
    curLang === "id" ? "block" : "none";
}

function setLang(lang) {
  curLang = lang;
  localStorage.setItem("lang", lang);
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.textContent.toLowerCase() === lang);
  });
  document.documentElement.setAttribute("data-lang", lang);
  document.getElementById("cv-download").href = "cv.html?lang=" + lang;
  document.getElementById("hero-avatar").style.display =
    lang === "id" ? "block" : "none";
  renderExperience();
  applyTranslations();
  closeMenu();
}

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

renderExperience();
applyTranslations();
initLangButtons();
