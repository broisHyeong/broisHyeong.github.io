const logo = document.querySelector('.menubar_logo');

logo.addEventListener('click', function() {
  logo.style.transform = 'translate(5px,0)';
  setTimeout(() => {
    logo.style.transform = 'translate(-2px,0)';
  }, 200);
  setTimeout(() => {
    logo.style.transform = 'translate(0,0)';
  }, 300);
})