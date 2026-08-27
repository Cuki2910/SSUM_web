(function () {
  'use strict';

  var root = document.documentElement;
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function finishLoading() {
    root.classList.remove('page-loading');
    root.classList.add('page-ready');
  }

  if (document.readyState === 'complete') finishLoading();
  else window.addEventListener('load', finishLoading, { once: true });

  window.addEventListener('pageshow', function () {
    root.classList.remove('page-leaving');
    finishLoading();
  });

  document.addEventListener('click', function (event) {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (!(event.target instanceof Element)) return;

    var link = event.target.closest('a[href]');
    if (!link || link.target || link.hasAttribute('download') || link.dataset.noTransition !== undefined) return;

    var href = link.getAttribute('href');
    if (!href || href.charAt(0) === '#') return;

    var destination = new URL(link.href, window.location.href);
    if (destination.origin !== window.location.origin || destination.pathname === window.location.pathname && destination.search === window.location.search) return;

    event.preventDefault();
    root.classList.add('page-leaving');
    window.setTimeout(function () { window.location.assign(destination.href); }, reduced ? 0 : 260);
  });
})();
