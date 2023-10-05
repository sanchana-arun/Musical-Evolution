// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
  // Add animation to timeline items on scroll
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
