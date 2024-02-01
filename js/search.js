const searchBtn = document.querySelector('input');
const searchBox = document.querySelector('.search');

searchBtn.addEventListener("focus", function() {
  searchBox.style.boxShadow = "0 0 3px gray";
});
