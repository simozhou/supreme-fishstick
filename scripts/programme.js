const programme_days = document.querySelectorAll('.programme-day');

programme_days.forEach(programme_day => {
  programme_day.addEventListener('click', () => {
    programme_day.classList.toggle('open');
    const programme_content = programme_day.nextElementSibling;
    if (programme_day.classList.contains('open')) {
      programme_content.style.maxHeight = `calc(${programme_content.scrollHeight}px + 20px)`;
    } else {
      programme_content.style.maxHeight = '0';
    }
  });

  // Update programme_content height when resizing the window
  window.addEventListener('resize', () => {
    const programme_content = programme_day.nextElementSibling;
    if (programme_day.classList.contains('open')) {
      programme_content.style.maxHeight = `calc(${programme_content.scrollHeight}px + 20px)`;
    }
  });
});
