(function () {
  'use strict';

  document.querySelectorAll('.navigation').forEach(function (navigation, index) {
    var menu = navigation.querySelector('.main-menu');
    var inner = navigation.querySelector('.section-inner');
    if (!menu || !inner) return;

    menu.id = 'primary-menu-' + index;
    var button = document.createElement('button');
    button.className = 'nav-menu-toggle';
    button.type = 'button';
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-controls', menu.id);
    button.innerHTML = '<span class="nav-menu-toggle__icon" aria-hidden="true"></span><span>Menu</span>';
    inner.insertBefore(button, menu);

    button.addEventListener('click', function () {
      var open = navigation.classList.toggle('menu-open');
      button.setAttribute('aria-expanded', String(open));
    });

    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navigation.classList.remove('menu-open');
        button.setAttribute('aria-expanded', 'false');
      });
    });

    function updateScrollState() { navigation.classList.toggle('is-scrolled', window.scrollY > 24); }
    updateScrollState();
    window.addEventListener('scroll', updateScrollState, { passive: true });
  });
})();