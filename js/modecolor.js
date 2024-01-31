const btnBlack = document.getElementById("black");
const btnWhite = document.getElementById("white");

btnBlack.addEventListener("click", (e) => {
    document.body.style.backgroundColor = "black";
});

btnWhite.addEventListener("click", (e) => {
    document.body.style.backgroundColor = "white";
});
