const btnBlack = document.getElementById("black");
const btnWhite = document.getElementById("white");
const headerBody = document.querySelector('.header');
const menubarBody = document.querySelector('.menubar');
const text = document.querySelectorAll('.articletext');

btnBlack.addEventListener("click", (e) => {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    headerBody.style.backgroundColor = "#444";
    menubarBody.style.backgroundColor = "#444";
    console.log("black");
    for (let i = 0; i < text.length; i++) {
      text[i].style.color = "white";
  }
});

btnWhite.addEventListener("click", (e) => {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    headerBody.style.backgroundColor = "white";
    menubarBody.style.backgroundColor = "white";
    console.log("white");
    for (let i = 0; i < text.length; i++) {
      text[i].style.color = 'rgba(32, 31, 31, 0.8)';
  }
});

