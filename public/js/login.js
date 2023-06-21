document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault(); // 폼 제출 방지
    const rightbox = document.getElementsByClassName('rightbox');
    rightbox.classList.add('success');
    // 추가적인 동작이 필요한 경우 여기에 작성합니다.
});