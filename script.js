// =====================================================
// AMMA & ABBA — 25TH ANNIVERSARY — script.js
// =====================================================

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Welcome screen + music start ---------- */
  const welcome = document.getElementById('welcome');
  const enterBtn = document.getElementById('enterBtn');
  const audio = document.getElementById('bgAudio');
  const musicPlayer = document.getElementById('musicPlayer');
  const musicToggle = document.getElementById('musicToggle');
  const iconPlay = document.getElementById('iconPlay');
  const iconPause = document.getElementById('iconPause');
  const musicProgress = document.getElementById('musicProgress');

  function enterCelebration() {
    welcome.classList.add('hidden');
    document.body.style.overflow = '';
    musicPlayer.classList.remove('hidden');

    // Attempt to start music only after this user gesture
    audio.play().then(() => {
      iconPlay.style.display = 'none';
      iconPause.style.display = 'block';
    }).catch(() => {
      // Autoplay blocked or file not yet added — player stays visible, paused
      iconPlay.style.display = 'block';
      iconPause.style.display = 'none';
    });
  }

  document.body.style.overflow = 'hidden';
  enterBtn.addEventListener('click', enterCelebration);

  /* ---------- Music player controls ---------- */
  musicToggle.addEventListener('click', () => {
    if (audio.paused) {
      audio.play().catch(() => {});
      iconPlay.style.display = 'none';
      iconPause.style.display = 'block';
    } else {
      audio.pause();
      iconPlay.style.display = 'block';
      iconPause.style.display = 'none';
    }
  });

  audio.addEventListener('timeupdate', () => {
    if (audio.duration) {
      musicProgress.style.width = (audio.currentTime / audio.duration) * 100 + '%';
    }
  });

  /* ---------- Sticky nav on scroll ---------- */
  const siteNav = document.getElementById('siteNav');
  window.addEventListener('scroll', () => {
    siteNav.classList.toggle('scrolled', window.scrollY > 40);
  });

  /* ---------- Mobile menu ---------- */
  const navToggle = document.getElementById('navToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  navToggle.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(el => observer.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in-view'));
  }

  /* ---------- Lightbox ---------- */
  const galleryImgs = Array.from(document.querySelectorAll('[data-lightbox] img'));
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');
  let currentIndex = 0;

  function openLightbox(index) {
    currentIndex = index;
    lightboxImg.src = galleryImgs[currentIndex].src;
    lightboxImg.alt = galleryImgs[currentIndex].alt;
    lightbox.classList.add('open');
  }
  function closeLightbox() {
    lightbox.classList.remove('open');
  }
  function showNext(step) {
    currentIndex = (currentIndex + step + galleryImgs.length) % galleryImgs.length;
    lightboxImg.src = galleryImgs[currentIndex].src;
    lightboxImg.alt = galleryImgs[currentIndex].alt;
  }

  document.querySelectorAll('[data-lightbox]').forEach((el, i) => {
    el.addEventListener('click', () => openLightbox(i));
  });
  lightboxClose.addEventListener('click', closeLightbox);
  lightboxPrev.addEventListener('click', () => showNext(-1));
  lightboxNext.addEventListener('click', () => showNext(1));
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showNext(-1);
    if (e.key === 'ArrowRight') showNext(1);
  });

});
