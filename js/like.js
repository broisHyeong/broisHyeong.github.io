function confirmLogout(){
    const result = confirm("로그아웃 하시겠습니까?")
    if (result) {
        alert("로그아웃이 완료되었습니다.")
        window.location.href = "../index.html"
    }
    else{
        window.location.href = "../main/like.html"
    }
}
