var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints : {
      450: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      780: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1100: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    }
  });