const btnBlack = document.getElementById("black");
const btnWhite = document.getElementById("white");
// const headerBody = document.querySelector('.header');
const menubarBody = document.querySelector('.menubar');
const input = document.querySelector('input');
const highlightText = document.querySelector('.c_label');

btnBlack.addEventListener("click", (e) => {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    document.body.s
    // headerBody.style.backgroundColor = "black";
    highlightText.style.color = "black";
    menubarBody.style.backgroundColor = "black";
    console.log("black");
});

btnWhite.addEventListener("click", (e) => {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    // headerBody.style.backgroundColor = "white";
    menubarBody.style.backgroundColor = "white";
    console.log("white");
});
