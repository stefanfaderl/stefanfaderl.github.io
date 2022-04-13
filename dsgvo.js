const hamburger = document.querySelector(".hamburger");
const ul = document.querySelector("ul");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  ul.classList.toggle("active");
});

document.querySelectorAll("a").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    ul.classList.remove("active");
  })
);

const backToStart = () => {
  window.location.href = "index.html";
};
