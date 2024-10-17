
const callButtons = document.querySelectorAll('.call-btns');
const callWindow = document.querySelector('.call');
const callCloseButton = document.querySelector('.call__navigation-btn');
const overlay = document.querySelector('.overlay');


callButtons.forEach((callButton, index) => {
    callButton.addEventListener('click', () => {
      console.log(`Call button ${index + 1} clicked`);
      callWindow.classList.add('active');
      overlay.classList.add('active');
    });
  });
  
  

  callCloseButton.addEventListener('click', () => {
    callWindow.classList.remove('active'); 
    overlay.classList.remove('active');
  });
  

  overlay.addEventListener('click', () => {
    callWindow.classList.remove('active');
    overlay.classList.remove('active');
  });
