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
const heroFade = document.querySelector("#hero .fade");
if (heroFade) heroFade.classList.add("show");
const portfolioHeaderFade = document.querySelector("#portfolio-header .fade");
if (portfolioHeaderFade) portfolioHeaderFade.classList.add("show");

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
    // Determine language from data-lang attribute or button text
    const lang = btn.getAttribute("data-lang") || btn.textContent.toLowerCase();

    // Add event listener directly
    btn.addEventListener("click", () => {
      setLang(lang);
    });

    btn.classList.toggle("active", lang === curLang);
  });

  document.documentElement.setAttribute("data-lang", curLang);
  const cvLink = document.getElementById("cv-download");
  if (cvLink) cvLink.href = "cv.html?lang=" + curLang;

  // Show avatar only in ID per user request
  const avatar = document.getElementById("hero-avatar");
  if (avatar) {
    avatar.style.display = curLang === "id" ? "block" : "none";
  }
}

function setLang(lang) {
  curLang = lang;
  localStorage.setItem("lang", lang);

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const btnLang =
      btn.getAttribute("data-lang") || btn.textContent.toLowerCase();
    btn.classList.toggle("active", btnLang === lang);
  });

  document.documentElement.setAttribute("data-lang", lang);
  const cvLink = document.getElementById("cv-download");
  if (cvLink) cvLink.href = "cv.html?lang=" + lang;

  // Show avatar only in ID per user request
  const avatar = document.getElementById("hero-avatar");
  if (avatar) {
    avatar.style.display = lang === "id" ? "block" : "none";
  }

  renderExperience();
  renderPortfolio();
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

function setTheme(theme) {
  // Theme toggle removed for fixed terminal theme
}

function renderPortfolio() {
  const container = document.getElementById("portfolio-grid");
  if (!container || !translations.portfolio) return;

  const projects = translations.portfolio.projects;
  let html = "";
  for (let i = projects.length - 1; i >= 0; i--) {
    const project = projects[i];
    const title = t(`portfolio.projects.${i}.title`);
    const description = t(`portfolio.projects.${i}.description`);
    const challenge = project.challenge
      ? t(`portfolio.projects.${i}.challenge`)
      : null;
    const learningOutcomes = project.learningOutcomes
      ? t(`portfolio.projects.${i}.learningOutcomes`)
      : null;
    const role = project.role ? t(`portfolio.projects.${i}.role`) : null;

    let tagsHtml = project.tags
      .map((tag) => `<span class="tag">${tag}</span>`)
      .join("");

    let extraInfoHtml = "";
    if (role)
      extraInfoHtml += `<p class="portfolio-card-desc" style="margin-bottom: 0.2rem"><strong>Role:</strong> ${role}</p>`;
    if (challenge)
      extraInfoHtml += `<p class="portfolio-card-desc"><strong>Challenge:</strong> ${challenge}</p>`;
    if (learningOutcomes)
      extraInfoHtml += `<p class="portfolio-card-desc"><strong>Learning Outcomes:</strong> ${learningOutcomes}</p>`;

    html += `
      <div class="portfolio-card">
        <div class="portfolio-card-img">
          <img src="${project.image}" alt="${title}" loading="lazy" onclick="openImageModal(this.src)" onerror="this.parentElement.classList.add('img-fallback')">
        </div>
        <div class="portfolio-card-body">
          <h3 class="portfolio-card-title">${title}</h3>
          <p class="portfolio-card-desc" style="margin-bottom: 0.5rem">${description}</p>
          ${extraInfoHtml}
          <div class="portfolio-card-tags">${tagsHtml}</div>
          ${project.link ? `<a href="${project.link}" target="_blank" class="btn btn-outline portfolio-card-link"><i class="fa-solid fa-arrow-up-right-from-square"></i> <span data-i18n="portfolio.viewProject">View Project</span></a>` : ""}
        </div>
      </div>
    `;
  }
  container.innerHTML = html;
}

renderExperience();
renderPortfolio();
applyTranslations();
initLangButtons();

function openImageModal(src) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  if (modal && modalImg) {
    modalImg.src = src;
    modal.classList.add("show");
  }
}

function closeImageModal() {
  const modal = document.getElementById("imageModal");
  if (modal) {
    modal.classList.remove("show");
  }
}

// Visitor Counter Logic
document.addEventListener("DOMContentLoaded", () => {
  const visitedAt = localStorage.getItem("portfolio_visited_at");
  const now = new Date().getTime();
  const hours24 = 24 * 60 * 60 * 1000;

  if (!visitedAt || now - parseInt(visitedAt) > hours24) {
    fetch("https://api.counterapi.dev/v2/marifyahya/marifyahya-portofolio/up")
      .then(() => localStorage.setItem("portfolio_visited_at", now.toString()))
      .catch((err) => console.error("Error updating visitor counter:", err));
  }
});
