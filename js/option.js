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