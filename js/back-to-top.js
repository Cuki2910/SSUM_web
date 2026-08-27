(function () {
  'use strict';

  var button = document.createElement('button');
  button.className = 'back-to-top';
  button.type = 'button';
  button.setAttribute('aria-label', 'Back to top');
  button.title = 'Back to top';
  document.body.appendChild(button);

  function update() { button.classList.toggle('is-visible', window.scrollY > 420); }
  window.addEventListener('scroll', update, { passive: true });
  update();
  button.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
})();