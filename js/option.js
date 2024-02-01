const toggleList = document.querySelectorAll(".toggleSwitch");

toggleList.forEach(($toggle) => {
    $toggle.addEventListener('click', () => {
        $toggle.classList.toggle('active');
    });
});

function confirmDelete(){
    const result = confirm("다운로드 된 컨텐츠를 모두 삭제하시겠습니까?")
    if (result) {
        alert("다운로드 컨텐츠가 모두 삭제되었습니다.")
    }
    else{
        //아무 동작 없음
    }
}

document.getElementById('option-down-arrow').addEventListener('click', function() {
    let deviceList = document.querySelector('.option-device-list');
    deviceList.classList.toggle('active');
});

document.querySelectorAll('.option-device-list li').forEach(function(device) {
    device.addEventListener('click', function() {
        // 선택된 기기에 대한 처리  
        alert('선택된 기기: ' + device.textContent);
    });
});


const btnBlack = document.getElementById("black");
const btnWhite = document.getElementById("white");

btnBlack.addEventListener("click", (e) => {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
});

btnWhite.addEventListener("click", (e) => {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
});


