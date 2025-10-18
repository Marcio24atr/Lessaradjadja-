document.addEventListener('DOMContentLoaded', function() {
  const currentPath = window.location.pathname.split('/').pop();
  const navLinks = document.querySelectorAll('header nav ul li a');

  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Simple search for jobs page
  if (currentPath === 'jobs.html') {
    const searchInput = document.getElementById('searchInput');
    const jobListings = document.getElementById('jobListings');
    if (searchInput && jobListings) {
      const jobCards = Array.from(jobListings.children);
      searchInput.addEventListener('input', function() {
        const term = this.value.toLowerCase();
        jobCards.forEach(card => {
          const text = card.textContent.toLowerCase();
          card.style.display = text.includes(term) ? 'block' : 'none';
        });
      });
    }
  }
});
