const CAROUSEL_LENGTH = document.querySelectorAll(".carousel_cell").length - 1;
let cur = 0;

const $carousel = document.querySelector(".carousel");
const $cellList = document.querySelectorAll(".carousel_cell");
const $prevButton = document.querySelector(".prev-button");
const $nextButton = document.querySelector(".next-button");

let $imgList = document.querySelectorAll(".carousel_img");
let carouselStyle = window.getComputedStyle($carousel);
let carouselWidth = parseFloat(carouselStyle.getPropertyValue("width"));


// 이미지 크기 계산
function updateImageSize() {
  $imgList = document.querySelectorAll(".carousel_img");
  carouselStyle = window.getComputedStyle($carousel);
  carouselWidth = parseFloat(carouselStyle.getPropertyValue("width"));

  $imgList.forEach(img => {
    img.style.width = `${carouselWidth}px`;
    img.style.height = "500px";
  });
  $cellList.forEach(cell => {
    cell.style.width = `${carouselWidth}px`;
  });
}

//창 크기 변하면 같이 변경되도록
function handleResize() {
  updateImageSize();
}

handleResize();

window.addEventListener("resize", handleResize);

// 다음 이미지로 넘기기
const nextEvent = () => {
  if (cur !== CAROUSEL_LENGTH) {
    cur++;
    $carousel.style.transform = `translate(-${cur * carouselWidth}px, 0)`;
    // console.log(`${cur}, ${cur * carouselWidth * (-1)}px`);
  } else {
    cur = 0;
    $carousel.style.transform = `translate(0, 0)`;
    // console.log(`${cur}, 0px`);
  }
  console.log("next");
};

// 이전 이미지로 넘기기
const prevEvent = () => {
  if (cur !== 0) {
    cur--;
    $carousel.style.transform = `translate(-${cur * carouselWidth}px, 0)`;
    // console.log(`${cur * carouselWidth * (-1)}, 0px`);
  } else {
    cur = CAROUSEL_LENGTH;
    $carousel.style.transform = `translate(-${CAROUSEL_LENGTH * carouselWidth}px, 0)`;
    // console.log(`${CAROUSEL_LENGTH * carouselWidth * (-1)}, 0px`);
  }
  console.log("prev");
};

$nextButton.addEventListener("click", nextEvent);
$prevButton.addEventListener("click", prevEvent);
