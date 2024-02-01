function confirmLogout(){
    const result = confirm("로그아웃 하시겠습니까?")
    if (result) {
        alert("로그아웃이 완료되었습니다.")
        window.location.href = "../index.html"
    }
    else{
        window.location.href = "../main/myprofile.html"
    }
}

function confirmEdit(){
    const result = confirm("프로필 편집을 위해선 비밀번호 입력이 필요합니다.")
    if (result) {
        window.location.href = "#"
    }
    else{
        window.location.href = "../main/myprofile.html"
    }
}