const benefitsCard = document.querySelectorAll('.benefits__card');

benefitsCard.forEach((item) => {
    item.addEventListener('click', ()=> {
       benefitsCard.forEach((el) => {
        el.classList.remove('active')
       })
       item.classList.add('active')
    })
})
const swiper = new Swiper(".reviews__slider", {
  loop: true,
  slidesPerView: 1,
  effect: "fade",
  fadeEffect: {
    crossFade: true,        
  },
  navigation: {
    nextEl: ".reviews__arrow--next",
    prevEl: ".reviews__arrow--prev",
  },
     pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
});
    
const menuBtn = document.querySelector('.header__btn');
const menu = document.querySelector('.header');

menuBtn.addEventListener('click', ()=> {
  menu.classList.toggle('active')
})
 
  