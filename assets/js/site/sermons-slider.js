/* --------------------------------------------------------------------------- */
/* Slider de sermoes (codigo proprio do site) */
/* Fonte original: assets/js/sermons-slider.js */
/* --------------------------------------------------------------------------- */
var Webflow = Webflow || [];
  Webflow.push(function () {
    // Function to initialize Swiper
    function initializeSwiper(element) {
      const swiper = new Swiper(element.querySelector(".swiper"), {
        speed: 1000,
        loop: false,
        /*
        autoplay: {
          delay: 7000,
        },
        */
        initialSlide: 0,
        autoHeight: false,
        centeredSlides: false,
        followFinger: true,
        freeMode: false,
        slideToClickedSlide: false,
        disableOnInteraction: false,
        slidesPerView: "auto",
        rewind: true,
        draggable: true,
        mousewheel: {
          forceToAxis: true
        },
        keyboard: {
          enabled: true,
          onlyInViewport: true
        },
        /*
        scrollbar: {
          el: element.querySelector(".swiper-drag-wrapper"),
          draggable: true,
          dragClass: "swiper-drag",
          snapOnRelease: true
        },
        */
        slideActiveClass: "is-active",
        slideDuplicateActiveClass: "is-active",
        navigation: {
          nextEl: '[data-swiper-button="next"]',
          prevEl: '[data-swiper-button="prev"]',
        },
        a11y: {
          enabled: true,
          prevSlideMessage: 'Previous slide',
          nextSlideMessage: 'Next slide',
          itemRoleDescriptionMessage: 'Controle deslizante',
          slideRole: 'listitem',
          id: 'slider',
          containerRoleDescriptionMessage: 'Controle deslizante',
          containerMessage: 'Slider'
        },
      });
    }

    // Set up IntersectionObserver
    const observerOptions = {
      root: null, // Use the viewport as the root
      rootMargin: '0px 0px -20% 0px', // Trigger when the element is 20% from the bottom of the viewport
      threshold: 0 // Trigger as soon as the element reaches the rootMargin
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          initializeSwiper(entry.target);
          observer.unobserve(entry.target); // Unobserve after initializing
        }
      });
    }, observerOptions);

    // Observe each swiper-slider element
    document.querySelectorAll('.swiper-slider').forEach(slider => {
      observer.observe(slider);
    });
  });

