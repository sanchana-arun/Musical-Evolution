document.addEventListener("DOMContentLoaded", function () {

  function animateTimelineItems() {
    const timelineItems = document.querySelectorAll('.timeline-item');

    function checkScroll() {
      timelineItems.forEach((item) => {
        const itemPosition = item.getBoundingClientRect().top;

        if (itemPosition < window.innerHeight - 100) {
          item.classList.add('show');
        }
      });
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll();
  }

  animateTimelineItems();
});
