/* --------------------------------------------------------------------------- */
/* Animacoes de scroll (codigo proprio do site) */
/* Fonte original: assets/js/scroll-animations.js */
/* --------------------------------------------------------------------------- */
document.querySelector('.g-nav_buttons').addEventListener('click', function(event) {
    const target = event.target;

    if (target.classList.contains('is-next')) {
      let currentLink = document.querySelector('.g-nav_link.w--current');
      if (currentLink) {
        let nextLink = currentLink.nextElementSibling;
        if (nextLink && nextLink.classList.contains('g-nav_link')) {
          nextLink.click();
        } else {
          let sectionFiveNext = document.querySelector('.section_five-gs').nextElementSibling;
          if (sectionFiveNext) {
            sectionFiveNext.scrollIntoView({ behavior: 'smooth' });
          }
        }
      } else {
        let firstLink = document.querySelector('.g-nav_link');
        if (firstLink) {
          firstLink.click();
        }
      }
    }

    if (target.classList.contains('is-prev')) {
      let currentLink = document.querySelector('.g-nav_link.w--current');
      if (currentLink) {
        let prevLink = currentLink.previousElementSibling;
        if (prevLink && prevLink.classList.contains('g-nav_link')) {
          prevLink.click();
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    }
  });



    // Function to split text by words and animate with GSAP and ScrollTrigger
    function splitTextAndAnimate() {
        const elements = document.querySelectorAll('[gsap-split]');

        elements.forEach(element => {
            const childNodes = Array.from(element.childNodes);

            // Get the delay from the gsap-split attribute or set to 0ms if null/empty
            let delay = element.getAttribute('gsap-split');
            delay = delay ? parseInt(delay, 10) : 0;

            childNodes.forEach(node => {
                if (node.nodeType === 3) { // Text node
                    const text = node.textContent.trim();
                    const splitWords = text.split(/\s+/);

                    splitWords.forEach((word, index) => {
                        const span = document.createElement('span');
                        span.style.display = 'inline-block';
                        span.style.opacity = 0;
                        span.style.transform = 'translateY(1rem)';
                        span.textContent = word;

                        node.parentNode.insertBefore(span, node);
                        if (index < splitWords.length - 1) {
                            node.parentNode.insertBefore(document.createTextNode(' '), node);
                        }
                    });

                    node.parentNode.removeChild(node);
                } else if (node.nodeType === 1 && node.tagName === 'SPAN') { // Element node (SPAN)
                    node.style.display = 'inline-block';
                    node.style.opacity = 0;
                    node.style.transform = 'translateY(1rem)';
                }
            });

            // Animate the words with GSAP and ScrollTrigger
            gsap.fromTo(
                element.querySelectorAll('span'),
                { opacity: 0, y: '1rem' },
                {
                    opacity: 1,
                    y: '0rem',
                    stagger: 0.05,
                    duration: 1,
                    ease: 'expo.out', // Ease-out with an exponential curve
                    delay: delay / 1000, // Convert delay from ms to seconds for GSAP
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 80%', // Trigger when the element reaches 20% into the viewport
                    },
                }
            );
        });
    }

    // Initialize the function
    splitTextAndAnimate();

