const topBtn = document.getElementById("topBtn");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 100) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

topBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

const elements = document.querySelectorAll("section, .card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

elements.forEach((el) => {
  el.classList.add("hidden");
  observer.observe(el);
});

console.log("Se chegou até aqui, bora me contratar 😄");
const toggleBtn = document.getElementById("Tema");

if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
  toggleBtn.textContent = "☀️";
}

toggleBtn.onclick = () => {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    localStorage.setItem("theme", "light");
    toggleBtn.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "dark");
    toggleBtn.textContent = "🌙";
  }
};