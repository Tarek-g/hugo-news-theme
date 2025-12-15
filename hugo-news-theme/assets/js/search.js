document.addEventListener('DOMContentLoaded', function () {
    const searchToggle = document.getElementById('search-toggle');
    const searchModal = document.getElementById('search-modal');
    const searchClose = document.getElementById('search-close');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    let fuse;
    let isIndexLoaded = false;

    // Toggle Modal
    if (searchToggle) {
        searchToggle.addEventListener('click', () => {
            searchModal.classList.remove('hidden', 'opacity-0', 'pointer-events-none');
            // searchModal.classList.add('flex'); // Already flex
            setTimeout(() => {
                searchInput.focus();
            }, 100);
        });
    }

    // Close Modal
    if (searchClose) {
        searchClose.addEventListener('click', () => {
            searchModal.classList.add('hidden', 'opacity-0', 'pointer-events-none');
        });
    }

    // Close on outside click
    searchModal.addEventListener('click', (e) => {
        if (e.target === searchModal) {
            searchModal.classList.add('hidden', 'opacity-0', 'pointer-events-none');
        }
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !searchModal.classList.contains('hidden')) {
            searchModal.classList.add('hidden', 'opacity-0', 'pointer-events-none');
        }
    });

    // Load Index and Search
    searchInput.addEventListener('input', async (e) => {
        const query = e.target.value;

        if (!isIndexLoaded) {
            try {
                const response = await fetch('/index.json');
                const data = await response.json();

                const options = {
                    keys: ['title', 'summary', 'content', 'category', 'tags', 'people', 'locations'],
                    threshold: 0.4, // Match sensitivity
                    ignoreLocation: true
                };

                fuse = new Fuse(data, options);
                isIndexLoaded = true;
            } catch (error) {
                console.error("Error loading search index:", error);
                return;
            }
        }

        if (query.length > 2 && fuse) {
            const results = fuse.search(query);
            renderResults(results);
        } else {
            searchResults.innerHTML = '';
        }
    });

    function renderResults(results) {
        searchResults.innerHTML = '';
        if (results.length === 0) {
            searchResults.innerHTML = '<p class="text-center text-muted-foreground">لا توجد نتائج</p>';
            return;
        }

        results.slice(0, 10).forEach(result => {
            const item = result.item;
            const el = document.createElement('a');
            el.href = item.permalink;
            el.className = 'block p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors group';
            el.innerHTML = `
                <h3 class="text-xl font-bold mb-1 text-primary group-hover:underline">${item.title}</h3>
                <div class="text-xs text-muted-foreground mb-2 flex items-center gap-2">
                    ${item.image ? `<span class="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">صورة</span>` : ''}
                    <span>${item.category}</span>
                </div>
                <p class="text-sm text-foreground/80 line-clamp-2 leading-relaxed">${item.summary}</p>
            `;
            searchResults.appendChild(el);
        });
    }
});
