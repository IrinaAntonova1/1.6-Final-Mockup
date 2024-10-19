
const callButtons = document.querySelectorAll('.call-btns');
const callWindow = document.querySelector('.call');
const callCloseButton = document.querySelector('.call__navigation-btn');


const chatButtons = document.querySelectorAll('.chat');
const feedbackWindow = document.querySelector('.feedback__div');
const feedbackCloseButton = document.querySelector('.feedback__navigation-btn');


const overlay = document.querySelector('.overlay');


function closeAllWindows() {
  callWindow.classList.remove('active', 'scrollable');
  feedbackWindow.classList.remove('active', 'scrollable');
  overlay.classList.remove('active');
}


callButtons.forEach((callButton, index) => {
  callButton.addEventListener('click', () => {
    console.log(`Call button ${index + 1} clicked`);

    
    if (feedbackWindow.classList.contains('active')) {
      feedbackWindow.classList.remove('active', 'scrollable');
    }

    
    callWindow.classList.add('active', 'scrollable');
    overlay.classList.add('active');
  });
});


chatButtons.forEach((chatButton, index) => {
  chatButton.addEventListener('click', () => {
    console.log(`Chat button ${index + 1} clicked`);

    
    if (callWindow.classList.contains('active')) {
      callWindow.classList.remove('active', 'scrollable');
    }

    
    feedbackWindow.classList.add('active', 'scrollable');
    overlay.classList.add('active');
  });
});


callCloseButton.addEventListener('click', () => {
  closeAllWindows();
});


feedbackCloseButton.addEventListener('click', () => {
  closeAllWindows();
});


overlay.addEventListener('click', () => {
  closeAllWindows();
});
