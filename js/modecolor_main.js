const btnBlack = document.getElementById("black");
const btnWhite = document.getElementById("white");
const menubarBody = document.querySelector('.menubar');


btnBlack.addEventListener("click", (e) => {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    menubarBody.style.backgroundColor = "black";
    console.log("black");
});

btnWhite.addEventListener("click", (e) => {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    menubarBody.style.backgroundColor = "white";
    console.log("white");
});
