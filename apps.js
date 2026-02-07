// Active nav link based on current page
(function () {
  const path = (location.pathname || "").toLowerCase();
  const links = document.querySelectorAll('[data-nav="true"]');

  links.forEach(a => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    // match for /, index.html, services.html, contact.html
    const isHome = (href === "/" || href.includes("index.html"));
    const isServices = href.includes("services");
    const isContact = href.includes("contact");

    const onHome = path.endsWith("/") || path.endsWith("index.html") || path === "";
    const onServices = path.includes("services");
    const onContact = path.includes("contact");

    if ((isHome && onHome) || (isServices && onServices) || (isContact && onContact)) {
      a.classList.add("active");
    }
  });
})();
