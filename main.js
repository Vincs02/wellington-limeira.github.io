(function () {
  'use strict';

  // Menu mobile toggle
  var header = document.querySelector('.header');
  var nav = document.querySelector('.nav');
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelectorAll('.nav-link');

  if (toggle) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
      document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
    });
  }

  links.forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // Header shadow on scroll
  function onScroll() {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Reveal on scroll (Intersection Observer)
  var revealEls = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    revealEls.forEach(function (el) {
      el.classList.add('visible');
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    {
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.05
    }
  );

  revealEls.forEach(function (el) {
    observer.observe(el);
  });
})();
