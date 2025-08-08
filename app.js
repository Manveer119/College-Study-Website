// ===== Footer year (works on any page that has #year)
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ===== Close mobile menu after clicking a link (CSS checkbox hack)
const navCheckbox = document.getElementById('nav-toggle');
document.querySelectorAll('.nav__menu a').forEach(a => {
  a.addEventListener('click', () => {
    if (navCheckbox && navCheckbox.checked) navCheckbox.checked = false;
  });
});

// ===== Smooth scroll for hash links (optional nicety)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const id = link.getAttribute('href');
    const target = document.querySelector(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ===== Tech page filtering
const grid = document.getElementById('guideGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
if (grid && filterBtns.length) {
  const items = Array.from(grid.querySelectorAll('.guide'));
  const setActive = (btn) => {
    filterBtns.forEach(b => b.classList.remove('active-filter'));
    btn.classList.add('active-filter');
  };

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      setActive(btn);
      const cat = btn.dataset.filter;
      items.forEach(card => {
        const match = cat === 'all' || card.dataset.cat === cat;
        card.style.display = match ? '' : 'none';
      });
    });
  });
}

// (Optional) style for active filter via JS—feel free to move to CSS if you prefer
const style = document.createElement('style');
style.textContent = `
  .active-filter { border-color: #4f58ff; background:#1b1b27; }
`;
document.head.appendChild(style);
