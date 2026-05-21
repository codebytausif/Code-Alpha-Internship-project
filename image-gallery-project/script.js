// Let me select All the item needed in JS
let lightBox = document.querySelector(".light-box");
let bigImage = document.querySelector("#lightbox-img");
let allPic = document.querySelectorAll(".picture");
let allBtnfltr = document.querySelectorAll(".btn");
let nxtBtn = document.querySelector(".next-btn");
let preBtn = document.querySelector(".pre-btn");
let clsBtn = document.querySelector(".close-btn");

let currentIdx = 0;

allPic.forEach((picture, index) => {
  picture.addEventListener("click", function () {
    currentIdx = index;

    let clickedSrc = this.querySelector("img").src;

    bigImage.src = clickedSrc;

    lightBox.style.display = "flex";
  });
});

clsBtn.addEventListener("click", function () {
  lightBox.style.display = "none";
});

lightBox.addEventListener("click", function (eve) {
  if (eve.target === lightBox) {
    lightBox.style.display = "none";
  }
});

function showImage(i) {
  bigImage.src = allPic[i].querySelector("img").src;
  currentIdx = i;
}
//
nxtBtn.addEventListener("click", function () {
  currentIdx++;
  if (currentIdx >= allPic.length) {
    currentIdx = 0;
  }
  showImage(currentIdx);
});

preBtn.addEventListener("click", function () {
  currentIdx--;
  if (currentIdx < 0) {
    currentIdx = allPic.length - 1;
  }
  showImage(currentIdx);
});

// Filter section

allBtnfltr.forEach((button) => {
  button.addEventListener("click", function () {
    allBtnfltr.forEach((btn) => {
      btn.classList.remove("active");
    });
    this.classList.add("active");
    let filter = this.dataset.filter;

    allPic.forEach((card) => {
      if (filter === "all") {
        card.style.display = "block";
      } else if (card.dataset.category === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

document.addEventListener("keydown", function (e) {
  if (lightBox.style.display === "flex") {
    if (e.key === "ArrowRight") nxtBtn.click();
    if (e.key === "ArrowLeft")  preBtn.click();
    if (e.key === "Escape")     clsBtn.click();
  }
});