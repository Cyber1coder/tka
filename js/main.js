/* ==========================================================================
   The Kiran Academy (TKA) - Main JavaScript Engine
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initMobileNav();
  initStickyHeader();
  initAccordions();
  initCounters();
  updateUserNavUI();
});

/* --------------------------------------------------------------------------
   1. Dark Theme Management
   -------------------------------------------------------------------------- */
function initThemeToggle() {
  const themeBtns = document.querySelectorAll('.theme-toggle-btn');
  const savedTheme = localStorage.getItem('tka_theme') || 'light';

  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcons(savedTheme);

  themeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('tka_theme', newTheme);
      updateThemeIcons(newTheme);
      showToast(`Switched to ${newTheme} mode`, 'info');
    });
  });
}

function updateThemeIcons(theme) {
  const themeBtns = document.querySelectorAll('.theme-toggle-btn');
  themeBtns.forEach(btn => {
    btn.innerHTML = theme === 'dark' 
      ? '<i class="fa-solid fa-sun"></i>' 
      : '<i class="fa-solid fa-moon"></i>';
  });
}

/* --------------------------------------------------------------------------
   2. Mobile Hamburger Navigation
   -------------------------------------------------------------------------- */
function initMobileNav() {
  const hamburgerBtn = document.querySelector('.hamburger-btn');
  const drawerCloseBtn = document.querySelector('.drawer-close');
  const drawer = document.querySelector('.mobile-nav-drawer');
  const overlay = document.querySelector('.drawer-overlay');

  if (!hamburgerBtn || !drawer || !overlay) return;

  function openDrawer() {
    drawer.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  hamburgerBtn.addEventListener('click', openDrawer);
  if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);
}

/* --------------------------------------------------------------------------
   3. Sticky Header
   -------------------------------------------------------------------------- */
function initStickyHeader() {
  const navbar = document.querySelector('.header-navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

/* --------------------------------------------------------------------------
   4. Accordion Logic (FAQ)
   -------------------------------------------------------------------------- */
function initAccordions() {
  const faqHeaders = document.querySelectorAll('.faq-header');
  faqHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const isActive = item.classList.contains('active');

      // Close all active items
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));

      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   5. Counter Animation on Scroll
   -------------------------------------------------------------------------- */
function initCounters() {
  const counters = document.querySelectorAll('.stat-number[data-target]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = +counter.getAttribute('data-target');
        const prefix = counter.getAttribute('data-prefix') || '';
        const suffix = counter.getAttribute('data-suffix') || '';
        let count = 0;
        const speed = target / 50;

        const updateCount = () => {
          count += speed;
          if (count < target) {
            counter.innerText = prefix + Math.ceil(count).toLocaleString() + suffix;
            setTimeout(updateCount, 25);
          } else {
            counter.innerText = prefix + target.toLocaleString() + suffix;
          }
        };
        updateCount();
        obs.unobserve(counter);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

/* --------------------------------------------------------------------------
   6. Global Toast Notification System
   -------------------------------------------------------------------------- */
function showToast(message, type = 'info') {
  let toastContainer = document.querySelector('.toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  let icon = 'fa-circle-info';
  if (type === 'success') icon = 'fa-circle-check';
  if (type === 'danger') icon = 'fa-circle-exclamation';
  if (type === 'warning') icon = 'fa-triangle-exclamation';

  toast.innerHTML = `
    <i class="fa-solid ${icon}"></i>
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

/* --------------------------------------------------------------------------
   7. Announcement Bar Dismissal
   -------------------------------------------------------------------------- */
function dismissAnnouncement() {
  const bar = document.querySelector('.top-announcement');
  if (bar) bar.style.display = 'none';
}

/* --------------------------------------------------------------------------
   8. User Session UI State Sync
   -------------------------------------------------------------------------- */
function getCurrentUser() {
  const userJson = localStorage.getItem('tka_user');
  if (!userJson) return null;
  try {
    return JSON.parse(userJson);
  } catch (e) {
    return null;
  }
}

function updateUserNavUI() {
  const user = getCurrentUser();
  const authNavContainers = document.querySelectorAll('.auth-nav-container');

  authNavContainers.forEach(container => {
    if (user) {
      container.innerHTML = `
        <a href="dashboard.html" class="btn btn-outline btn-sm">
          <i class="fa-solid fa-user-graduate"></i> Dashboard
        </a>
        <button onclick="handleLogout()" class="btn btn-secondary btn-sm" title="Logout">
          <i class="fa-solid fa-right-from-bracket"></i>
        </button>
      `;
    } else {
      container.innerHTML = `
        <a href="login.html" class="btn btn-secondary btn-sm">Login</a>
        <a href="register.html" class="btn btn-primary btn-sm">Get Started</a>
      `;
    }
  });
}

function handleLogout() {
  localStorage.removeItem('tka_user');
  showToast('Logged out successfully', 'info');
  setTimeout(() => {
    window.location.href = 'login.html';
  }, 1000);
}
