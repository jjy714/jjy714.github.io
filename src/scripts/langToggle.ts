const STORAGE_KEY = "preferred-lang";

function setLang(lang: "en" | "ko") {
  document.documentElement.setAttribute("data-lang", lang);
  localStorage.setItem(STORAGE_KEY, lang);
}

const btn = document.getElementById("lang-toggle");
if (btn) {
  btn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-lang");
    setLang(current === "ko" ? "en" : "ko");
  });
}
