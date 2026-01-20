async function loadPartial(id, file) {
  const el = document.getElementById(id);
  if (!el) return;

  const res = await fetch(file);
  el.innerHTML = await res.text();
}

function setYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

(async () => {
  await loadPartial("navbar", "partials/navbar.html");
  await loadPartial("footer", "partials/footer.html");

  // Run after footer exists in the DOM
  setYear();
})();
