function setActiveNavLink() {
  const currentPath = window.location.pathname.replace(/\/$/, '');

  document.querySelectorAll('.nav-sub-link, .mobile-nav-link').forEach((link) => {
    const href = link.getAttribute('href');
    if (!href) return;

    let targetPath = '';
    try {
      targetPath = new URL(href, window.location.href).pathname.replace(/\/$/, '');
    } catch (error) {
      return;
    }

    const isHome = targetPath.endsWith('/index.html');
    const active = isHome
      ? currentPath.endsWith('/index.html') || currentPath === '' || currentPath === '/'
      : currentPath === targetPath;

    link.classList.toggle('active', active);
  });
}

function initNavbar() {
  const toggleBtn = document.getElementById('nav-toggle');
  const overlay = document.getElementById('nav-overlay');
  const panel = document.getElementById('mobile-nav-panel');

  if (!toggleBtn || !overlay || !panel) return;

  const icon = toggleBtn.querySelector('i');

  function openMenu() {
    panel.classList.add('open');
    panel.setAttribute('aria-hidden', 'false');
    overlay.hidden = false;
    requestAnimationFrame(() => overlay.classList.add('open'));
    toggleBtn.setAttribute('aria-expanded', 'true');
    if (icon) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-xmark');
    }
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    panel.classList.remove('open');
    panel.setAttribute('aria-hidden', 'true');
    overlay.classList.remove('open');
    toggleBtn.setAttribute('aria-expanded', 'false');
    if (icon) {
      icon.classList.remove('fa-xmark');
      icon.classList.add('fa-bars');
    }
    document.body.style.overflow = '';
    window.setTimeout(() => {
      overlay.hidden = true;
    }, 250);
    toggleBtn.focus();
  }

  toggleBtn.addEventListener('click', () => {
    const expanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    if (expanded) closeMenu();
    else openMenu();
  });

  overlay.addEventListener('click', closeMenu);

  panel.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && panel.classList.contains('open')) {
      closeMenu();
    }
  });
}
