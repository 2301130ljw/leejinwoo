const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'leejinwoo' && password === '2301130') {
        alert('로그인에 성공하였습니다!');
  
    } else {
        alert('아이디 또는 비밀번호가 올바르지 않습니다.');
    }
});
const logoutLink = document.querySelector('a[href="#logout"]');

logoutLink.addEventListener('click', (e) => {
    e.preventDefault(); // 클릭 이벤트 중단

    // 로그아웃 처리 로직
    // 필요한 동작을 수행하거나 다른 페이지로 이동할 수 있습니다.
    alert('로그아웃 되었습니다!');
});
