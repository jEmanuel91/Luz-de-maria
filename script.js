const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  const cardHeader = card.querySelector('h2');
  const cardContent = card.querySelector('.card-content');

  cardHeader.addEventListener('click', () => {
    // Fecha todos os outros cards
    cards.forEach(c => {
      if(c !== card) c.querySelector('.card-content').style.display = 'none';
    });

    // Alterna o conteúdo do card clicado
    cardContent.style.display = cardContent.style.display === 'block' ? 'none' : 'block';
  });
});
