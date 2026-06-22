/* Elías Regules — nav + footer por sección */
(function () {
  var current = document.body.getAttribute("data-page") || "";
  var section = document.body.getAttribute("data-section") || "";

  /* ─── CSS extra para la etiqueta de sección en el logo ─── */
  var styleEl = document.createElement("style");
  styleEl.textContent =
    ".nav-logo{display:flex;flex-direction:column;gap:1px;line-height:1;text-decoration:none}" +
    ".nav-logo-name{font-family:'Space Grotesk',sans-serif;font-size:19px;letter-spacing:.14em;font-weight:600;color:var(--ink)}" +
    ".nav-section-tag{font-size:9px;letter-spacing:.2em;text-transform:uppercase;color:var(--accent);font-weight:500}" +
    ".btn-live{position:relative;overflow:hidden}" +
    ".btn-live::before{content:'';position:absolute;top:0;left:-100%;width:60%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.2),transparent);animation:live-sweep 2.5s ease-in-out infinite}" +
    "@keyframes live-sweep{to{left:160%}}" +
    ".btn-pulse{animation:pulse-btn 2s cubic-bezier(.4,0,.6,1) infinite}" +
    "@keyframes pulse-btn{0%,100%{box-shadow:0 0 0 0 rgba(58,173,110,.7)}50%{box-shadow:0 0 0 8px rgba(58,173,110,0)}}" +
    ".avail-btn{display:inline-flex;align-items:center;gap:10px;padding:13px 26px;border-radius:4px;background:#3aad6e;color:#fff;font-family:'Space Grotesk',sans-serif;font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;text-decoration:none;transition:background .25s,transform .25s,box-shadow .25s;box-shadow:0 0 28px rgba(58,173,110,.35)}" +
    ".avail-btn:hover{background:#2e9a5c;transform:translateY(-2px);box-shadow:0 6px 36px rgba(58,173,110,.5)}" +
    ".avail-btn::after{content:'↗';font-size:14px;margin-left:2px}";
  document.head.appendChild(styleEl);

  /* ─── NAV CORPORATIVO ─── */
  if (section === "corp") {
    var corpLinks = [
      { href: "corporativo.html#corp-formatos", label: "Formatos" },
      { href: "corp-galeria.html",              label: "Galería" },
      { href: "corp-contacto.html",             label: "Contacto" },
    ];
    var menuHtml = corpLinks.map(function (p) {
      return '<a href="' + p.href + '">' + p.label + "</a>";
    }).join("");

    var btnContent = '<a href="https://eliasregules.lang.uy/disponibilidad" target="_blank" rel="noopener" class="avail-btn' + (current === "contacto" ? ' btn-live' : '') + '">Chequeá disponibilidad</a>';

    var nav =
      '<header class="nav" id="siteNav"><div class="wrap nav-inner">' +
      '<a class="nav-logo" href="corporativo.html">' +
        '<span class="nav-logo-name">ELÍAS&nbsp;<b>REGULES</b></span>' +
        '<span class="nav-section-tag">Corporativo</span>' +
      '</a>' +
      '<nav class="nav-menu" id="navMenu">' +
        '<a href="index.html" style="opacity:.5;font-size:12px">← Inicio</a>' +
        menuHtml +
      '</nav>' +
      '<div style="display:flex;align-items:center;gap:16px">' +
        btnContent +
        '<button class="nav-toggle" id="navToggle" aria-label="Menú"><i class="ti ti-menu-2"></i></button>' +
      '</div></div></header>';

    var footer =
      '<footer class="ft"><div class="wrap">' +
      '<div class="ft-grid">' +
      '<div><div class="ft-logo">ELÍAS REGULES<br><span style="font-size:11px;letter-spacing:.16em;font-weight:400;opacity:.5">CORPORATIVO</span></div>' +
      '<p style="max-width:32ch">Convenciones, lanzamientos y reuniones de alto nivel. Cinco hectáreas a 10 minutos del centro de Montevideo.</p></div>' +
      '<div><h4>Secciones</h4>' +
        '<a href="corporativo.html#corp-formatos">Formatos</a>' +
        '<a href="corporativo.html">Infraestructura</a>' +
        '<a href="corp-galeria.html">Galería</a>' +
        '<a href="corp-contacto.html">Contacto</a></div>' +
      '<div><h4>Formatos</h4>' +
        '<a href="corporativo.html#corp-formatos">Convenciones</a>' +
        '<a href="corporativo.html#corp-formatos">Lanzamientos</a>' +
        '<a href="corporativo.html#corp-formatos">Kick-offs</a>' +
        '<a href="corp-contacto.html#cotizar">Cotizar</a></div>' +
      '<div><h4>Contacto</h4>' +
        '<a href="mailto:ventas@eliasregules.com">ventas@eliasregules.com</a>' +
        '<a href="tel:095893475">095 893 475</a>' +
        '<p style="margin-top:4px">Av. Bolivia 2455<br>Montevideo, Uruguay</p>' +
        '<div class="ft-social" style="margin-top:16px">' +
          '<a href="#" aria-label="Instagram"><i class="ti ti-brand-instagram"></i></a>' +
          '<a href="#" aria-label="Facebook"><i class="ti ti-brand-facebook"></i></a>' +
        '</div></div>' +
      '</div>' +
      '<div class="ft-bottom"><span>© 2026 Elías Regules · Eventos corporativos</span>' +
        '<span><a href="index.html" style="color:inherit;opacity:.5">← Ver sección Bodas</a></span></div>' +
      '</div></footer>';

    injectNavFooter(nav, footer);
    return;
  }

  /* ─── NAV BODAS ─── */
  if (section === "bodas") {
    var bodasLinks = [
      { href: "social.html#b-lugar",      label: "El lugar" },
      { href: "social.html#b-tipos",      label: "Celebraciones" },
      { href: "social-galeria.html",      label: "Galería" },
      { href: "social-contacto.html",     label: "Contacto" },
    ];
    var menuHtmlB = bodasLinks.map(function (p) {
      return '<a href="' + p.href + '">' + p.label + "</a>";
    }).join("");

    var btnContentB = '<a href="https://eliasregules.lang.uy/disponibilidad" target="_blank" rel="noopener" class="avail-btn' + (current === "contacto" ? ' btn-live' : '') + '">Chequeá disponibilidad</a>';

    var navB =
      '<header class="nav" id="siteNav"><div class="wrap nav-inner">' +
      '<a class="nav-logo" href="social.html">' +
        '<span class="nav-logo-name">ELÍAS&nbsp;<b>REGULES</b></span>' +
        '<span class="nav-section-tag">Bodas &amp; Celebraciones</span>' +
      '</a>' +
      '<nav class="nav-menu" id="navMenu">' +
        '<a href="index.html" style="opacity:.5;font-size:12px">← Inicio</a>' +
        menuHtmlB +
      '</nav>' +
      '<div style="display:flex;align-items:center;gap:16px">' +
        btnContentB +
        '<button class="nav-toggle" id="navToggle" aria-label="Menú"><i class="ti ti-menu-2"></i></button>' +
      '</div></div></header>';

    var footerB =
      '<footer class="ft"><div class="wrap">' +
      '<div class="ft-grid">' +
      '<div><div class="ft-logo">ELÍAS REGULES<br><span style="font-size:11px;letter-spacing:.16em;font-weight:400;opacity:.5">BODAS &amp; CELEBRACIONES</span></div>' +
      '<p style="max-width:32ch">Un predio privado de 5 hectáreas para el día más especial. Naturaleza, exclusividad y operación de primer nivel.</p></div>' +
      '<div><h4>Navegación</h4>' +
        '<a href="social.html#b-lugar">El lugar</a>' +
        '<a href="social.html#b-tipos">Celebraciones</a>' +
        '<a href="social-galeria.html">Galería</a>' +
        '<a href="social-contacto.html">Contacto</a></div>' +
      '<div><h4>Celebraciones</h4>' +
        '<a href="social.html#b-tipos">Casamientos</a>' +
        '<a href="social.html#b-tipos">Fiestas &amp; cumpleaños</a>' +
        '<a href="social.html#b-tipos">Cenas de gala</a>' +
        '<a href="social-contacto.html#cotizar">Consultar fecha</a></div>' +
      '<div><h4>Contacto</h4>' +
        '<a href="mailto:ventas@eliasregules.com">ventas@eliasregules.com</a>' +
        '<a href="tel:095893475">095 893 475</a>' +
        '<p style="margin-top:4px">Av. Bolivia 2455<br>Montevideo, Uruguay</p>' +
        '<div class="ft-social" style="margin-top:16px">' +
          '<a href="#" aria-label="Instagram"><i class="ti ti-brand-instagram"></i></a>' +
          '<a href="#" aria-label="Facebook"><i class="ti ti-brand-facebook"></i></a>' +
        '</div></div>' +
      '</div>' +
      '<div class="ft-bottom"><span>© 2026 Elías Regules · Bodas &amp; Celebraciones</span>' +
        '<span><a href="index.html" style="color:inherit;opacity:.5">← Ver sección Corporativo</a></span></div>' +
      '</div></footer>';

    injectNavFooter(navB, footerB);
    return;
  }

  /* ─── NAV GLOBAL (home, galería, contacto) ─── */
  var pages = [
    { id: "corporativo", label: "Corporativo", href: "corporativo.html" },
    { id: "social",      label: "Bodas",        href: "social.html" },
    { id: "galeria",     label: "Galería",      href: "galeria.html" },
    { id: "contacto",    label: "Contacto",     href: "contacto.html" },
  ];
  var menuLinksG =
    '<a href="index.html"' + (current === "home" ? ' class="active"' : "") + ">Inicio</a>" +
    pages.map(function (p) {
      return '<a href="' + p.href + '"' + (p.id === current ? ' class="active"' : "") + ">" + p.label + "</a>";
    }).join("");

  var navG =
    '<header class="nav" id="siteNav"><div class="wrap nav-inner">' +
    '<a class="nav-logo" href="index.html">' +
      '<span class="nav-logo-name">ELÍAS&nbsp;<b>REGULES</b></span>' +
    '</a>' +
    '<nav class="nav-menu" id="navMenu">' + menuLinksG + "</nav>" +
    '<div style="display:flex;align-items:center;gap:16px">' +
    '<a href="contacto.html#cotizar" class="btn btn-accent">Cotizar evento</a>' +
    '<button class="nav-toggle" id="navToggle" aria-label="Menú"><i class="ti ti-menu-2"></i></button>' +
    "</div></div></header>";

  var footerG =
    '<footer class="ft"><div class="wrap">' +
    '<div class="ft-grid">' +
    '<div><div class="ft-logo">ELÍAS REGULES</div>' +
    '<p style="max-width:34ch">Un predio único de 5 hectáreas en plena ciudad. Naturaleza, identidad y operación de nivel para eventos corporativos y sociales.</p></div>' +
    "<div><h4>Navegación</h4>" +
    '<a href="index.html">Inicio</a>' +
    '<a href="corporativo.html">Corporativo</a>' +
    '<a href="social.html">Bodas</a>' +
    '<a href="galeria.html">Galería</a>' +
    '<a href="contacto.html">Contacto</a></div>' +
    "<div><h4>Eventos</h4>" +
    '<a href="corporativo.html">Convenciones</a>' +
    '<a href="corporativo.html">Lanzamientos</a>' +
    '<a href="social.html">Casamientos</a>' +
    '<a href="social.html">Fiestas</a>' +
    '<a href="contacto.html#cotizar">Cotizar</a></div>' +
    "<div><h4>Contacto</h4>" +
    '<a href="mailto:ventas@eliasregules.com">ventas@eliasregules.com</a>' +
    '<a href="tel:095893475">095 893 475</a>' +
    '<p style="margin-top:4px">Av. Bolivia 2455<br>Montevideo, Uruguay</p>' +
    '<div class="ft-social" style="margin-top:16px">' +
    '<a href="#" aria-label="Instagram"><i class="ti ti-brand-instagram"></i></a>' +
    '<a href="#" aria-label="Facebook"><i class="ti ti-brand-facebook"></i></a></div></div>' +
    "</div>" +
    '<div class="ft-bottom"><span>© 2026 Elías Regules · Centro de eventos</span><span>Diseño · prototipo</span></div>' +
    "</div></footer>";

  injectNavFooter(navG, footerG);

  /* ─── helpers ─── */
  function injectNavFooter(navHtml, footerHtml) {
    var navMount = document.getElementById("site-nav");
    var ftMount  = document.getElementById("site-footer");
    if (navMount) navMount.outerHTML = navHtml;
    if (ftMount)  ftMount.outerHTML  = footerHtml;

    var navEl = document.getElementById("siteNav");
    var transparentStart = document.body.hasAttribute("data-hero");
    function onScroll() {
      if (!navEl) return;
      if (!transparentStart || window.scrollY > 40) navEl.classList.add("solid");
      else navEl.classList.remove("solid");
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    var toggle = document.getElementById("navToggle");
    if (toggle) toggle.addEventListener("click", function () {
      document.getElementById("navMenu").classList.toggle("open");
    });

    document.querySelectorAll(".chip").forEach(function (c) {
      c.addEventListener("click", function () { c.classList.toggle("on"); });
    });

    var form = document.getElementById("quoteForm");
    if (form) form.addEventListener("submit", function (e) {
      e.preventDefault();
      var ok = document.getElementById("formOk");

      // Collect toggled chips into the hidden "espacios" field
      var selected = [];
      form.querySelectorAll(".chip.on").forEach(function (c) { selected.push(c.textContent.trim()); });
      var espaciosInput = form.querySelector('[name="espacios"]');
      if (espaciosInput) espaciosInput.value = selected.join(", ") || "—";

      function showOk() {
        form.style.display = "none";
        if (ok) { ok.style.display = "block"; ok.scrollIntoView({ behavior: "smooth", block: "center" }); }
      }

      // Submit to Netlify Forms via fetch; fall back to showing success on error
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(new FormData(form)).toString()
      }).then(showOk).catch(showOk);
    });
  }
})();
