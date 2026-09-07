// Pinta una página legal en el idioma del lector.
//
// A DIFERENCIA DE MURDOKU, aquí NO hay localStorage compartido con el juego:
// GOALÉ es una app nativa de Godot, no una web dentro de un contenedor, así
// que estas páginas se abren siempre en un navegador aparte y no pueden ver
// nada de la partida. El idioma sale, por orden: de `?lang=xx`, de un idioma
// elegido antes en ESTA web, y si no del idioma del navegador.
//
// Por eso el juego enlaza aquí con `?lang=` puesto: es la única forma de que
// un jugador coreano abra la política en coreano al pulsar el enlace desde
// los ajustes.

import { LEGAL_LANGS, LEGAL_LANG_LABELS, LEGAL_UI, LEGAL_LINKS } from "./legal-i18n.js";

const LANG_KEY = "goale:lang";

function pickLang() {
  // 1) ?lang=xx manda sobre todo: es lo que pone el selector de arriba al
  //    cambiar de idioma a mano, y permite enlazar una versión concreta.
  try {
    const forced = new URL(location.href).searchParams.get("lang");
    if (forced && LEGAL_LANGS.includes(forced)) return forced;
  } catch {
    // URL rara (file:// en algún navegador viejo): se sigue con el resto.
  }
  // 2) El que se eligió antes en esta misma web, para no repetirlo en cada
  //    página al pasar de la política a los términos.
  try {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved && LEGAL_LANGS.includes(saved)) return saved;
  } catch {
    // Sin localStorage (por ejemplo, cookies bloqueadas): se sigue al navegador.
  }
  const nav = (navigator.language || "").toLowerCase();
  // "pt-BR" -> "pt", "zh-Hans" -> "zh". El juego solo tiene una variante de cada uno.
  const base = nav.split("-")[0];
  if (LEGAL_LANGS.includes(base)) return base;
  return "es";
}

// Los enlaces externos son iguales en los 12 idiomas, así que el texto traducido
// los lleva como {gPrivacy} / {gPartners} y se sustituyen aquí.
function withLinks(html) {
  const a = (url, label) => `<a href="${url}" target="_blank" rel="noopener">${label}</a>`;
  return String(html)
    .replaceAll("{gPrivacy}", a(LEGAL_LINKS.gPrivacy, "policies.google.com/privacy"))
    .replaceAll("{gPartners}", a(LEGAL_LINKS.gPartners, "policies.google.com/technologies/partner-sites"));
}

const section = (s) => {
  if (!s) return "";
  let out = `<h2>${s.h}</h2>`;
  if (s.p) out += `<p>${withLinks(s.p)}</p>`;
  if (s.li?.length) out += `<ul>${s.li.map((x) => `<li>${withLinks(x)}</li>`).join("")}</ul>`;
  if (s.p2) out += `<p>${withLinks(s.p2)}</p>`;
  if (s.p3) out += `<p>${withLinks(s.p3)}</p>`;
  // p4 existe desde el 07-09: la política necesitó un párrafo más en la sección
  // de partidas en línea para contar los cuadros de torneo. Una sección que no
  // lo traiga sigue pintándose igual.
  if (s.p4) out += `<p>${withLinks(s.p4)}</p>`;
  return out;
};

function langPicker(lang, ui) {
  const opts = LEGAL_LANGS.map(
    (l) => `<option value="${l}"${l === lang ? " selected" : ""}>${LEGAL_LANG_LABELS[l]}</option>`
  ).join("");
  return `<div class="lang-bar"><label for="legal-lang">${ui.picker}:</label>
    <select id="legal-lang">${opts}</select></div>`;
}

const contactBox = (c) =>
  `<div class="contact-box"><strong>${c.h}</strong><br />${c.p}<br />
   <a href="mailto:${LEGAL_LINKS.mail}">${LEGAL_LINKS.mail}</a></div>`;

const prevailsNote = (ui) => `<p class="prevails">${ui.prevails}</p>`;

export function renderTerms(DATA) {
  const lang = pickLang();
  const t = DATA[lang] ?? DATA.es;
  const ui = LEGAL_UI[lang] ?? LEGAL_UI.es;
  document.documentElement.lang = lang;
  document.title = `${t.title} — GOALÉ`;
  document.body.innerHTML =
    langPicker(lang, ui) +
    `<h1>${t.title}</h1><p class="updated">${t.version}</p>` +
    `<p>${withLinks(t.intro)}</p>` +
    ["s1", "s2", "s3", "s4", "s5", "s6", "s7"].map((k) => section(t[k])).join("") +
    contactBox(t.contact) +
    prevailsNote(ui);
  bindPicker();
}

export function renderPrivacy(DATA) {
  const lang = pickLang();
  const t = DATA[lang] ?? DATA.es;
  const ui = LEGAL_UI[lang] ?? LEGAL_UI.es;
  document.documentElement.lang = lang;
  document.title = `${t.title}`;
  document.body.innerHTML =
    langPicker(lang, ui) +
    `<h1>${t.title}</h1><p class="updated">${t.updated}</p>` +
    `<p>${withLinks(t.intro)}</p>` +
    `<h2>${t.sumH}</h2><ul>${t.sum.map((x) => `<li>${withLinks(x)}</li>`).join("")}</ul>` +
    // `sOnline` va entre s2 y s3: es la sección 3 (modo Online), añadida el
    // 22-07 en el repo publicado y que faltaba en la copia del proyecto.
    ["s1", "s2", "sOnline", "s3", "s4", "s5", "s6", "s7", "s8", "s9", "s10"].map((k) => section(t[k])).join("") +
    contactBox(t.contact) +
    prevailsNote(ui);
  bindPicker();
}

export function renderErase(DATA) {
  const lang = pickLang();
  const t = DATA[lang] ?? DATA.es;
  const ui = LEGAL_UI[lang] ?? LEGAL_UI.es;
  document.documentElement.lang = lang;
  document.title = `${t.title} — GOALÉ`;
  document.body.innerHTML =
    langPicker(lang, ui) +
    `<h1>${t.title}</h1><p class="updated">${t.updated}</p>` +
    `<p>${withLinks(t.intro)}</p>` +
    ["s1", "s2", "s3", "s4", "s5", "keep"].map((k) => section(t[k])).join("") +
    contactBox(t.help);
  bindPicker();
}

// Al cambiar de idioma se RECUERDA, porque aquí sí es lo que quiere quien lee:
// esta web no es el juego, así que elegir "coreano" en la política y que los
// términos sigan en español sería absurdo. En Murdoku era al revés y con razón:
// allí la clave era la del juego y cambiarla habría traducido la partida.
function bindPicker() {
  const sel = document.getElementById("legal-lang");
  if (!sel) return;
  sel.addEventListener("change", () => {
    try {
      localStorage.setItem(LANG_KEY, sel.value);
    } catch {
      // Sin localStorage se sigue igual: el ?lang= de la URL ya lo lleva.
    }
    const url = new URL(location.href);
    url.searchParams.set("lang", sel.value);
    location.replace(url.toString());
  });
}
