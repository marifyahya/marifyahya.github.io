const urlParams = new URLSearchParams(window.location.search);
const lang = urlParams.get("lang") || "en";
document.documentElement.lang = lang;
document.querySelector('h2[data-i18n="experience.summaryTitle"]').textContent =
  lang === "id" ? "Ringkasan" : "Summary";

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
    return value[lang] || value.en || key;
  }
  return value;
}

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (el.tagName !== "H2") {
      el.textContent = t(key);
    }
  });
}

function renderCV() {
  const expContainer = document.getElementById("cv-experience");
  const skillsContainer = document.getElementById("cv-skills");

  let expHtml = "";
  translations.experience.jobs.forEach((job, i) => {
    const title = t(`experience.jobs.${i}.title`);
    const period = t(`experience.jobs.${i}.period`);
    let dutiesHtml = job.duties
      .map((duty, j) => `<li>${t(`experience.jobs.${i}.duties.${j}`)}</li>`)
      .join("");
    expHtml += `
      <div class="job">
        <div class="job-header">
          <div>
            <span class="job-title">${title}</span> · <span class="job-company">${job.company}</span>
          </div>
          <span class="job-date">${period}</span>
        </div>
        <div class="job-location">${job.location}</div>
        <ul>${dutiesHtml}</ul>
      </div>
    `;
  });
  expContainer.innerHTML = expHtml;

  let skillsHtml = translations.skills.tags
    .map((tag) => `<span class="skill-tag">${tag}</span>`)
    .join("");
  skillsContainer.innerHTML = skillsHtml;
}

applyTranslations();
renderCV();
