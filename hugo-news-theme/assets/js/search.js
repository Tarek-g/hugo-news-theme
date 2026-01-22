// Fuse.js Search Implementation
(function() {
  let fuse = null;
  let searchData = null;
  
  // Fetch search index
  async function loadSearchIndex() {
    if (searchData) return searchData;
    
    try {
      const response = await fetch('/index.json');
      searchData = await response.json();
      return searchData;
    } catch (error) {
      console.error('Failed to load search index:', error);
      return [];
    }
  }
  
  // Initialize Fuse.js
  async function initFuse() {
    if (fuse) return fuse;
    
    const data = await loadSearchIndex();
    
    fuse = new Fuse(data, {
      keys: [
        { name: 'title', weight: 0.4 },
        { name: 'summary', weight: 0.3 },
        { name: 'content', weight: 0.2 },
        { name: 'category', weight: 0.05 },
        { name: 'tags', weight: 0.05 }
      ],
      threshold: 0.3,
      includeScore: true,
      includeMatches: true,
      minMatchCharLength: 2,
      ignoreLocation: true
    });
    
    return fuse;
  }
  
  // Perform search
  async function search(query) {
    if (!query || query.length < 2) return [];
    
    const fuseInstance = await initFuse();
    const results = fuseInstance.search(query, { limit: 10 });
    
    return results.map(result => result.item);
  }
  
  // Render search results
  function renderResults(results, container) {
    if (!container) return;
    
    if (results.length === 0) {
      container.innerHTML = `
        <div class="text-center text-muted-foreground py-8">
          <p class="text-lg">لا توجد نتائج</p>
          <p class="text-sm mt-2">جرّب كلمات بحث مختلفة</p>
        </div>
      `;
      return;
    }
    
    container.innerHTML = results.map(item => `
      <a href="${item.permalink}" class="block p-4 rounded-lg hover:bg-secondary transition-colors border border-border">
        <div class="flex gap-4">
          ${item.image ? `
            <div class="w-24 h-16 flex-shrink-0">
              <img src="${item.image}" alt="" class="w-full h-full object-cover rounded">
            </div>
          ` : ''}
          <div class="flex-1 min-w-0">
            <h4 class="font-bold text-foreground mb-1 line-clamp-1">${item.title}</h4>
            <p class="text-sm text-muted-foreground line-clamp-2">${item.summary}</p>
            ${item.category ? `<span class="inline-block mt-2 text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">${item.category}</span>` : ''}
          </div>
        </div>
      </a>
    `).join('');
  }
  
  // Modal controls
  function openModal() {
    const modal = document.getElementById('search-modal');
    const input = document.getElementById('search-input');
    
    if (modal) {
      modal.classList.remove('hidden', 'opacity-0', 'pointer-events-none');
      modal.classList.add('opacity-100');
      modal.querySelector('div')?.classList.remove('scale-95');
      modal.querySelector('div')?.classList.add('scale-100');
      document.body.style.overflow = 'hidden';
      
      setTimeout(() => input?.focus(), 100);
    }
  }
  
  function closeModal() {
    const modal = document.getElementById('search-modal');
    const input = document.getElementById('search-input');
    const results = document.getElementById('search-results');
    
    if (modal) {
      modal.classList.add('opacity-0', 'pointer-events-none');
      modal.classList.remove('opacity-100');
      modal.querySelector('div')?.classList.add('scale-95');
      modal.querySelector('div')?.classList.remove('scale-100');
      
      setTimeout(() => {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
      }, 300);
      
      if (input) input.value = '';
      if (results) results.innerHTML = '';
    }
  }
  
  // Debounce helper
  function debounce(fn, delay) {
    let timeoutId;
    return function(...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn.apply(this, args), delay);
    };
  }
  
  // Initialize
  function init() {
    const toggleBtn = document.getElementById('search-toggle');
    const closeBtn = document.getElementById('search-close');
    const modal = document.getElementById('search-modal');
    const input = document.getElementById('search-input');
    const resultsContainer = document.getElementById('search-results');
    
    // Open modal
    toggleBtn?.addEventListener('click', openModal);
    
    // Close modal
    closeBtn?.addEventListener('click', closeModal);
    
    // Close on backdrop click
    modal?.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
      // Open with Ctrl+K or Cmd+K
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        openModal();
      }
    });
    
    // Search on input
    const debouncedSearch = debounce(async (query) => {
      const results = await search(query);
      renderResults(results, resultsContainer);
    }, 300);
    
    input?.addEventListener('input', (e) => {
      const query = e.target.value.trim();
      if (query.length >= 2) {
        debouncedSearch(query);
      } else {
        if (resultsContainer) resultsContainer.innerHTML = '';
      }
    });
    
    // Preload search index
    loadSearchIndex();
  }
  
  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
