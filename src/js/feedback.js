// Получаем элементы для окна "call"
const callButtons = document.querySelectorAll('.call-btns');
const callWindow = document.querySelector('.call');
const callCloseButton = document.querySelector('.call__navigation-btn');

// Получаем элементы для окна "feedback"
const chatButtons = document.querySelectorAll('.chat');
const feedbackWindow = document.querySelector('.feedback__div');
const feedbackCloseButton = document.querySelector('.feedback__navigation-btn');

// Общий элемент overlay
const overlay = document.querySelector('.overlay');

// Функция для закрытия обоих окон
function closeAllWindows() {
  callWindow.classList.remove('active');
  feedbackWindow.classList.remove('active');
  overlay.classList.remove('active');
}

// Открытие окна call
callButtons.forEach((callButton, index) => {
  callButton.addEventListener('click', () => {
    console.log(`Call button ${index + 1} clicked`);

    // Закрываем feedback, если оно открыто
    if (feedbackWindow.classList.contains('active')) {
      feedbackWindow.classList.remove('active');
    }

    // Открываем окно call
    callWindow.classList.add('active');
    overlay.classList.add('active');
  });
});

// Открытие окна feedback
chatButtons.forEach((chatButton, index) => {
  chatButton.addEventListener('click', () => {
    console.log(`Chat button ${index + 1} clicked`);

    // Закрываем call, если оно открыто
    if (callWindow.classList.contains('active')) {
      callWindow.classList.remove('active');
    }

    // Открываем окно feedback
    feedbackWindow.classList.add('active');
    overlay.classList.add('active');
  });
});

// Закрытие окон при клике на кнопку закрытия call
callCloseButton.addEventListener('click', () => {
  closeAllWindows();
});

// Закрытие окон при клике на кнопку закрытия feedback
feedbackCloseButton.addEventListener('click', () => {
  closeAllWindows();
});

// Закрытие окон при клике на overlay
overlay.addEventListener('click', () => {
  closeAllWindows();
});
