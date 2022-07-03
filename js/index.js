"use strict";
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

const calcScrollValue = () => {
  const scrollProgress = document.getElementById("progress");
  const progressValue = document.getElementById("progress-value");
  const pos = document.documentElement.scrollTop;
  const calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#fff ${scrollValue}%, #cccccc ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

function NewTab() {
  window.open("https://github.com/stefanfaderl", "_blank");
}

function refreshPage() {
  window.location.reload();
}

const img = document.querySelectorAll(".openNewTab");
img.forEach((n) =>
  n.addEventListener("click", () => {
    const url = n.getAttribute("src");
    window.open(url, "_blank");
  })
);

const readMoreBtn = document.querySelector(".read-more-btn");
const textProjects = document.querySelector(".textProjects");

if (readMoreBtn) {
  readMoreBtn.addEventListener("click", (e) => {
    textProjects.classList.toggle("show-more");
    if (readMoreBtn.innerText === "Read More") {
      readMoreBtn.innerText = "Read Less";
    } else {
      readMoreBtn.innerText = "Read More";
    }
  });
}
