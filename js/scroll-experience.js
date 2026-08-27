(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── Scroll progress bar ──────────────────────────────────────────────── */
  var bar = document.createElement('div');
  bar.id = 'scroll-progress';
  document.body.insertBefore(bar, document.body.firstChild);

  /* ── Header shrink ────────────────────────────────────────────────────── */
  var header = document.querySelector('.header');
  var masthead = document.querySelector('.site-masthead');

  /* ── rAF-throttled scroll handler ────────────────────────────────────── */
  var ticking = false;
  function onScroll() {
    if (!ticking) { requestAnimationFrame(tick); ticking = true; }
  }
  function tick() {
    var sy = window.pageYOffset || document.documentElement.scrollTop;
    var dh = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (dh > 0 ? (sy / dh) * 100 : 0) + '%';
    if (header) { header.classList.toggle('scrolled', sy > 60); }
    if (masthead) { masthead.classList.toggle('scrolled', sy > 60); }
    ticking = false;
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ── Auto-tag elements with reveal classes ────────────────────────────── */
  // Selectors that get a plain fade-up reveal
  var REVEAL_SELECTORS = [
    /* index.html */
    '.professor-feature',
    '.about-profile',
    '.experience-card',
    /* team.html */
    '.team-hero',
    '.person-card.is-featured',
    '.empty-grid',
    '.lab-photo-band',
    /* shared section heads */
    '.section-head',
    /* simple pages */
    '.placeholder-card',
    '.simple-inner',
    '.publication-item',
    '.page-hero__kicker',
    '.page-hero__lead',
    /* footer */
    '.site-footer-brand',
    '.site-footer-contact',
    '.site-footer-connect',
  ];

  // Selectors that get left/right alternating reveal
  var REVEAL_PAIR_SELECTORS = [
    '.person-grid .person-card:not(.is-featured)',
    '.member-list .person-card',
  ];

  // Selectors that stagger (each child animates sequentially)
  var STAGGER_PARENT_SELECTORS = [
    '.experience-timeline',
    '.empty-grid',
    '.member-tabs',
    '.tag-row',
    '.footer-links',
  ];

  // Section headings get the underline sweep
  var HEADING_SELECTORS = [
    '.section-title',
    '.cd-section h2',
    '.team-hero h1',
    '.page-hero h1',
    '.section-head h2',
  ];

  function autoTag() {
    // Headings
    HEADING_SELECTORS.forEach(function (sel) {
      document.querySelectorAll(sel).forEach(function (el) {
        if (!el.classList.contains('reveal') && !el.classList.contains('section-title')) {
          el.classList.add('section-title');   // picks up underline-sweep CSS
        }
        el.classList.add('reveal');
      });
    });

    // Plain reveals
    REVEAL_SELECTORS.forEach(function (sel) {
      document.querySelectorAll(sel).forEach(function (el) {
        if (!el.classList.contains('reveal')) el.classList.add('reveal');
      });
    });

    // Left/right alternating
    REVEAL_PAIR_SELECTORS.forEach(function (sel) {
      document.querySelectorAll(sel).forEach(function (el, i) {
        if (!el.classList.contains('reveal-left') && !el.classList.contains('reveal-right')) {
          el.classList.add(i % 2 === 0 ? 'reveal-left' : 'reveal-right');
        }
      });
    });

    // Stagger children
    STAGGER_PARENT_SELECTORS.forEach(function (sel) {
      document.querySelectorAll(sel).forEach(function (parent) {
        Array.from(parent.children).forEach(function (child) {
          if (!child.classList.contains('stagger-item')) {
            child.classList.add('stagger-item');
          }
        });
      });
    });
  }

  /* ── Intersection Observer ────────────────────────────────────────────── */
  function attachObserver() {
    if (!('IntersectionObserver' in window) || reduced) {
      // Fallback: show everything
      document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .stagger-item, .section-title')
        .forEach(function (el) { el.classList.add('in-view'); });
      return;
    }

    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });

    var allEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .stagger-item, .section-title');
    allEls.forEach(function (el) { obs.observe(el); });

    // Immediately reveal elements already visible in the initial viewport
    allEls.forEach(function (el) {
      var rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('in-view');
        obs.unobserve(el);
      }
    });
  }

  /* ── Boot ─────────────────────────────────────────────────────────────── */
  function boot() {
    autoTag();
    attachObserver();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
