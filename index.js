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

let slideshow1 = document.getElementById("slideshow1");
slideshow1.currentSlideIndex = 1;
showSlides(slideshow1.currentSlideIndex, slideshow1);

let slideshow2 = document.getElementById("slideshow2");
slideshow2.currentSlideIndex = 1;
showSlides(slideshow2.currentSlideIndex, slideshow2);

let slideshow3 = document.getElementById("slideshow3");
slideshow3.currentSlideIndex = 1;
showSlides(slideshow3.currentSlideIndex, slideshow3);

let slideshow4 = document.getElementById("slideshow4");
slideshow4.currentSlideIndex = 1;
showSlides(slideshow4.currentSlideIndex, slideshow4);

function plusSlides(n, slideshow) {
  showSlides((slideshow.currentSlideIndex += n), slideshow);
}

function currentSlide(n, slideshow) {
  showSlides((slideshow.currentSlideIndex = n), slideshow);
}

function showSlides(n, slideshow) {
  let i;
  let slides = slideshow.getElementsByClassName("mySlides");
  let dots = slideshow.getElementsByClassName("dot");
  if (n > slides.length) {
    slideshow.currentSlideIndex = 1;
  }
  if (n < 1) {
    slideshow.currentSlideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activeSlider", "");
  }
  slides[slideshow.currentSlideIndex - 1].style.display = "block";
  dots[slideshow.currentSlideIndex - 1].className += " activeSlider";
}

let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
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

let img = document.querySelectorAll(".openNewTab");
img.forEach((n) =>
  n.addEventListener("click", () => {
    let url = n.getAttribute("src");
    window.open(url, "_blank");
  })
);

const readMoreBtn = document.querySelector(".read-more-btn");
const textProjects = document.querySelector(".textProjects");

readMoreBtn.addEventListener("click", (e) => {
  textProjects.classList.toggle("show-more");
  if (readMoreBtn.innerText === "Read More") {
    readMoreBtn.innerText = "Read Less";
  } else {
    readMoreBtn.innerText = "Read More";
  }
});
