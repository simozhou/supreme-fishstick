const questions = document.querySelectorAll('.question');

questions.forEach(question => {
  question.addEventListener('click', () => {
    question.classList.toggle('open');
    const answer = question.nextElementSibling;
    if (question.classList.contains('open')) {
      answer.style.maxHeight = answer.scrollHeight + 'px';
    } else {
      answer.style.maxHeight = '0';
    }
  });

  // Update answer height when resizing the window
  window.addEventListener('resize', () => {
    const answer = question.nextElementSibling;
    if (question.classList.contains('open')) {
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
});
