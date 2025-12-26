async function loadPart(id, file) {
  const response = await fetch(file);
  const content = await response.text();
  document.getElementById(id).innerHTML = content;
}

window.addEventListener("DOMContentLoaded", () => {
  loadPart("header", "header.html");
  loadPart("footer", "footer.html");
});
