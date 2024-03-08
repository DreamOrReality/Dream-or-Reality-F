// 비밀번호 표시 함수
function togglePassword() {
    var password = document.querySelector(".input-user-password");

    // 타입을 반대로 변환
    if(password.type === 'password'){
        password.type = 'text';
    } else {
        password.type = 'password';
    }
}
