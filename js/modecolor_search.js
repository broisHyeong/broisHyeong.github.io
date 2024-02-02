const btnBlack = document.getElementById("black");
const btnWhite = document.getElementById("white");
const menubarBody = document.querySelector('.menubar');
const input = document.querySelector('input');
const highlightText = document.querySelectorAll('.c_label');

btnBlack.addEventListener("click", (e) => {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    input.style.color = "white";
    menubarBody.style.backgroundColor = "#444";
    highlightText.forEach(function(txt) {
        txt.style.color = "black";
    })
    console.log("black");
});

btnWhite.addEventListener("click", (e) => {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    menubarBody.style.backgroundColor = "white";
    console.log("white");
});
