const btnBlack = document.getElementById("black");
const btnWhite = document.getElementById("white");
const headerBody = document.querySelector('.header');
const menubarBody = document.querySelector('.menubar');

const $containger = document.getElementById('container');
const $name = document.getElementById('name');
const $listAll = document.getElementsByClassName('list');
const $listTextAll = document.getElementsByClassName('list_text');
const $tmp_img = document.querySelector('.tmp_img');
const $hr = document.querySelector('hr');

btnBlack.addEventListener("click", (e) => {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    headerBody.style.backgroundColor = "#444";
    menubarBody.style.backgroundColor = "#444";
    $containger.style.borderColor = "#86c9e8";
    $name.style.color = "#86c9e8";
    Array.from($listAll).forEach(function($list) {
        $list.style.borderColor = "#86c9e8";
    })
    Array.from($listTextAll).forEach(function($text) {
        $text.style.borderColor = "#86c9e8";
    })
    $tmp_img.style.borderColor = "#86c9e8";
    $hr.style.backgroundImage = "linear-gradient(to right, rgba(0, 0, 0, 0) 10%, rgba(134, 201, 232, 1) 20%, rgba(134, 201, 232, 1) 80%, rgba(0, 0, 0, 0) 90%)";
    console.log("black");
});

btnWhite.addEventListener("click", (e) => {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    headerBody.style.backgroundColor = "white";
    menubarBody.style.backgroundColor = "white";
    $containger.style.borderColor = "#095578";
    $name.style.color = "#095578";
    Array.from($listAll).forEach(function($list) {
        $list.style.borderColor = "#095578";
    })
    Array.from($listTextAll).forEach(function($text) {
        $text.style.borderColor = "#095578";
    })
    $tmp_img.style.borderColor = "#095578";
    $hr.style.backgroundImage = "linear-gradient(to right, rgba(0, 0, 0, 0) 10%, rgba(60, 108, 133, 0.75) 20%, rgba(60, 108, 133, 0.75) 80%, rgba(0, 0, 0, 0) 90%)";
    console.log("white");
});

Array.from($listAll).forEach(function(list) {
    list.addEventListener('mouseenter', function () {
        const listText = list.querySelector('.list_text');
        listText.style.color = 'white';
        // console.log('Mouse entered!');
    });

    list.addEventListener('mouseleave', function () {
        const listText = list.querySelector('.list_text');
        listText.style.color = 'var(--color-main-blue)';
        // console.log('Mouse left!');
    });
})