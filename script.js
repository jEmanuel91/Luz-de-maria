const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    cards.forEach(c => {
      if (c !== card) c.querySelector('.card-content').style.display = 'none';
    });
    const content = card.querySelector('.card-content');
    content.style.display = (content.style.display === 'block') ? 'none' : 'block';
  });
});
