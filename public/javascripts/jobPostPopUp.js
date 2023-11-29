document.addEventListener('DOMContentLoaded', function () {
    const listItems = document.querySelectorAll('.popup-trigger');
    const closePopupButton = document.getElementById('closePopup');
    const popupForm = document.getElementById('popupForm');
  
    listItems.forEach(function (item) {
      item.addEventListener('click', function () {
        popupForm.style.display = 'block';
      });
    });
  
    closePopupButton.addEventListener('click', function () {
      popupForm.style.display = 'none';
    });
  });
  