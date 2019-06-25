// Toggle
const toggleOn = () => {
  if (menu.classList.contains('slide-in-left')) {
    menu.classList.remove('slide-in-left');
    menu.classList.add('slide-out-left');
  } else {
    menu.classList.add('slide-in-left');
    menu.classList.remove('slide-out-left');
  }
};

// reference to the ".menu" class element
const menu= document.querySelector('.navbar');
//reference to the ".menu-button" class element
const menuButton=document.querySelector('.nav-button');

//handles clicks
menuButton.addEventListener('click', () => {
  toggleOn();
});

//dont forget to add <script defer="defer" src="../components/Menu-slider/slider.js" async></script> in body of index.html