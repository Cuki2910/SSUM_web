document.querySelectorAll('.research-card').forEach((card) => {
  const control = card.querySelector('.research-card__toggle');
  const front = card.querySelector('.research-card__front');
  const back = card.querySelector('.research-card__back');

  if (!control || !front || !back) return;

  const setFlipped = (flipped) => {
    card.classList.toggle('is-flipped', flipped);
    control.setAttribute('aria-pressed', String(flipped));
    control.setAttribute('aria-label', flipped ? 'Show image' : 'Show research summary');
    front.setAttribute('aria-hidden', String(flipped));
    back.setAttribute('aria-hidden', String(!flipped));
  };

  setFlipped(false);
  control.addEventListener('click', () => setFlipped(!card.classList.contains('is-flipped')));
});
