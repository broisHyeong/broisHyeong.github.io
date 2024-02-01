const pay = document.querySelectorAll('img');

for (let i = 0; i < pay.length; i++) {
  pay[i].addEventListener('click', function() {
    const correspondingAnswer = pay[i];

    pay.forEach(imgElement => {
      if (imgElement !== correspondingAnswer) {
        imgElement.classList.remove('active');
      }
    });

    correspondingAnswer.classList.toggle('active');
  });
}
