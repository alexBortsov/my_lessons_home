const swiper = new Swiper('.slider-main-block', {
    // Optional parameters
     direction: 'horizontal',
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.body-main-block__arrow.swiper-button-next',
      prevEl: '.body-main-block__arrow.swiper-button-prev',
    },
    autoplay: {
      delay: 3000,
    },
  
  });


// const tabsDealsButtons = document.querySelectorAll('.tabs-deals__button');
// console.log(tabsDealsButtons);
// document.addEventListener('click', (e) =>{
//   if (e.target.classList.contains('tabs-deals__button')) {
//     const dataButton = e.target.getAttribute("data-number");
//     console.log(dataButton);
//     e.target.classList.add('active'); 
//     const s = document.querySelectorAll('.tabs-deals__item');
    
//     for (let i = 0; i < s.length; i++) {
//       s[i].setAttribute("data-number", [i]);
//       let satt = s[i].getAttribute("data-number");
//       if (satt == dataButton) {
//         s[i].classList.add('active');
//     }
//     }
//   }
// })

const tabNavItems = document.querySelectorAll('.tabs-deals__button');
const tabItems = document.querySelectorAll('.tabs-deals__item');

document.addEventListener("click", (e) =>{
  const targetElement = e.target;
  let currentActiveIndex = null;
  let newActiveIndex = null;
  if (targetElement.closest('.tabs-deals__button')) {
    tabNavItems.forEach((tabNavItem, index) =>{
      if (tabNavItem.classList.contains('active')) {
        currentActiveIndex = index;
        tabNavItem.classList.remove('active');
      }
      if (tabNavItem === targetElement) {
        newActiveIndex = index;      }
    });
  targetElement.classList.add('active');
  tabItems[currentActiveIndex].classList.remove('active');
  tabItems[newActiveIndex].classList.add('active');
  }
});
