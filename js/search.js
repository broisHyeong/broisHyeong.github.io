const searchBtn = document.querySelector('input');
const searchBox = document.querySelector('.search');

searchBtn.addEventListener("focus", function() {
  searchBox.style.boxShadow = "0 0 3px gray";
});

const genre_box = document.querySelectorAll('.genre_box');

for (let i = 0; i < genre_box.length; i++) {
  genre_box[i].addEventListener('click', function() {
    const correspondingAnswer = genre_box[i];

    genre_box.forEach(genreboxElement => {
      if (genreboxElement !== correspondingAnswer) {
        genreboxElement.classList.remove('active');
      }
    });

    correspondingAnswer.classList.toggle('active');
  });
}