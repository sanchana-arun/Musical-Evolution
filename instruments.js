document.addEventListener("DOMContentLoaded", function () {
   
    function animateInstrumentItems() {
      const instrumentItems = document.querySelectorAll('.instrument-item');
  
      function checkScroll() {
        instrumentItems.forEach((item) => {
          const itemPosition = item.getBoundingClientRect().top;
  
          if (itemPosition < window.innerHeight - 100) {
            item.classList.add('show');
          }
        });
      }
  
      window.addEventListener('scroll', checkScroll);
      checkScroll();
    }
  
    animateInstrumentItems();
  });
  
