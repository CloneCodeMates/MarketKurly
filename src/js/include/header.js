const searchInput = document.getElementById('search__input');
const clearButton = document.getElementById('search__clear-button');

// 입력 필드에서 값이 변경될 때 실행
searchInput.addEventListener('input', () => {
    // 입력값이 있으면 X 버튼을 표시, 없으면 숨김
    clearButton.style.display = searchInput.value ? 'block' : 'none';
});

// X 버튼 클릭 시 실행
clearButton.addEventListener('click', () => {
    searchInput.value = ''; // 입력 필드의 내용을 지움
    clearButton.style.display = 'none'; // X 버튼을 다시 숨김
});
