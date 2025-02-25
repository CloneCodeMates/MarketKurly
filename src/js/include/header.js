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

const searchButton = document.getElementById('search__button');
const modalBackground = document.getElementById('modal-background');
const searchModal = document.getElementById('search-modal');

// 검색 버튼 클릭 시
searchButton.addEventListener('click', (event) => {
    // 검색어 비어있는지 확인
    if (searchInput.value.trim() === '') {
        // 검색어가 없으면 폼 제출 동작 막기
        event.preventDefault();
        // 모달 배경과 모달 창 표시
        modalBackground.style.display = 'block';
        searchModal.style.display = 'block';
    } else {
        // 검색어가 있으면 일반 검색 동작
        console.log('검색어:', searchInput.value);
    }
});

const confirmButton = document.getElementById('confirm-button');

// 모달 창의 확인 버튼 클릭 시
confirmButton.addEventListener('click', () => {
    modalBackground.style.display = 'none';
    searchModal.style.display = 'none';
});
