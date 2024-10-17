
const chatButtons = document.querySelectorAll('.chat');
const feedbackWindow = document.querySelector('.feedback__div');
const feedbackCloseButton = document.querySelector('.feedback__navigation-btn');
const overlay = document.querySelector('.overlay');


chatButtons.forEach((chatButton, index) => {
  chatButton.addEventListener('click', () => {
    console.log(`Chat button ${index + 1} clicked`);
    feedbackWindow.classList.add('active');
    overlay.classList.add('active');
  });
});



feedbackCloseButton.addEventListener('click', () => {
  feedbackWindow.classList.remove('active'); 
  overlay.classList.remove('active'); 
});


overlay.addEventListener('click', () => {
  feedbackWindow.classList.remove('active');
  overlay.classList.remove('active');
});
