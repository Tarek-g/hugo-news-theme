// Theme Toggle - Dark Mode Support
(function() {
  const STORAGE_KEY = 'hugo-news-theme';
  
  // Get saved theme or system preference
  function getTheme() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return saved;
    
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  
  // Apply theme to document
  function applyTheme(theme) {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    
    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }
  }
  
  // Toggle between light and dark
  function toggleTheme() {
    const current = localStorage.getItem(STORAGE_KEY) || getTheme();
    const next = current === 'dark' ? 'light' : 'dark';
    localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next);
    updateToggleButton(next);
  }
  
  // Update button icon
  function updateToggleButton(theme) {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;
    
    const sunIcon = btn.querySelector('.sun-icon');
    const moonIcon = btn.querySelector('.moon-icon');
    
    if (theme === 'dark') {
      sunIcon?.classList.add('hidden');
      moonIcon?.classList.remove('hidden');
    } else {
      sunIcon?.classList.remove('hidden');
      moonIcon?.classList.add('hidden');
    }
  }
  
  // Initialize on page load
  function init() {
    const theme = getTheme();
    applyTheme(theme);
    updateToggleButton(theme);
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem(STORAGE_KEY)) {
        applyTheme(e.matches ? 'dark' : 'light');
        updateToggleButton(e.matches ? 'dark' : 'light');
      }
    });
    
    // Attach click handler
    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', toggleTheme);
    }
  }
  
  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
