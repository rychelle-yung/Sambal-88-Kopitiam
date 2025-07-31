const buttons = document.querySelectorAll('button[data-name]');
buttons.forEach(button => {
  button.addEventListener('click', function() {
    const itemName = this.getAttribute('data-name');
    showPopupMessage(itemName);
  });
});

function showPopupMessage(itemName) {
  const popupMessage = document.getElementById('popup-message');
  const popupText = document.getElementById('popup-text');
  popupText.textContent = itemName + " added to cart";
  popupMessage.classList.add('show');

  setTimeout(() => {
    popupMessage.classList.remove('show');
  }, 2000);
};