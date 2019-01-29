

/**
 * @name initSwiper
 *
 * @description initialize Swiper
 */
const initSwiper = () => {

  const mySwiper = new Swiper('.swiper-container--how', {
    // Optional parameters
    wrapperClass: "swiper-wrapper",
    slideClass: "swiper-slide",
    direction: 'vertical', // 'horizontal' or 'vertical'
    loop: false,
    watchOverflow: true,
    normalizeSlideIndex: true,
    grabCursor: false,
    mousewheel: true,
    freeMode: false,
    effect: 'slide', // "slide", "fade", "cube", "coverflow" or "flip"
    // autoplay: {
    //   delay: 5000,
    // },
    // Disable preloading of all images
    // preloadImages: false,
    // Enable lazy loading
    // lazy: {
    //   loadPrevNext: true,
    // },

    // off touch for destop
    // touchMoveStopPropagation:false,
    // simulateTouch : false,
    // allowSwipeToNext: true,
    // allowSwipeToPrev: true,
    // allowPageScroll: "auto ",

    slidesPerView: 1,
    spaceBetween: 55,
    // breakpoints: {
    //   // when window width is <= 320px
    //   320: {
    //     slidesPerView: 1,
    //     spaceBetween: 10
    //   },
    //   // when window width is <= 480px
    //   480: {
    //     slidesPerView: 2,
    //     spaceBetween: 20
    //   },
    //   // when window width is <= 640px
    //   640: {
    //     slidesPerView: 3,
    //     spaceBetween: 30
    //   }
    // },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      // renderBullet: function (index, className) {
      //   return `
      //     <div class="${className}">
      //       ${index}
      //     </div>
      //   `;
      // }
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    on: {
      "slideChange": function () {
        console.log("slideChange");
      },
    }
  });
};
