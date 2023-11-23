const pageSelect = document.getElementById('page-select');
const submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', () => {
    const selectedPage = pageSelect.options[pageSelect.selectedIndex].value;
    window.location.href = selectedPage;
});
