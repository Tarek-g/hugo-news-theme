
document.addEventListener('DOMContentLoaded', function () {
    const tocDesktop = document.querySelector('.toc-desktop');
    const tocSticky = document.querySelector('.toc-sticky');
    const tocHeader = document.querySelector('.toc-sticky-header');
    const tocContent = document.querySelector('.toc-sticky-content');
    const footer = document.querySelector('footer');

    if (!tocSticky || !tocDesktop) return;

    // 1. Toggle Sticky TOC visibility based on scroll
    window.addEventListener('scroll', () => {
        const desktopRect = tocDesktop.getBoundingClientRect();
        const triggerPoint = desktopRect.bottom;

        // Show sticky TOC when user scrolls past desktop TOC
        if (triggerPoint < 0) {
            tocSticky.classList.remove('hidden');
            // Hide if we reached the footer to avoid overlap
            if (footer) {
                const footerRect = footer.getBoundingClientRect();
                if (footerRect.top < window.innerHeight) {
                    tocSticky.style.opacity = '0';
                    tocSticky.style.pointerEvents = 'none';
                } else {
                    tocSticky.style.opacity = '1';
                    tocSticky.style.pointerEvents = 'auto';
                }
            }
        } else {
            tocSticky.classList.add('hidden');
        }
    });

    // 2. Expand/Collapse Sticky TOC
    if (tocHeader && tocContent) {
        tocHeader.addEventListener('click', () => {
            tocContent.classList.toggle('hidden');
            const icon = tocHeader.querySelector('.toc-icon');
            if (icon) {
                icon.style.transform = tocContent.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
            }
        });
    }

    // 3. ScrollSpy - Highlight active section
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                // Remove active class from all links
                document.querySelectorAll('.toc-sticky-content a').forEach(link => {
                    link.classList.remove('text-primary', 'font-bold');
                    link.classList.add('text-muted-foreground');
                });
                document.querySelectorAll('.toc-desktop a').forEach(link => {
                    link.classList.remove('text-primary', 'font-bold');
                    link.classList.add('text-muted-foreground');
                });

                // Add active class to current link
                const activeLinkSticky = document.querySelector(`.toc-sticky-content a[href="#${id}"]`);
                if (activeLinkSticky) {
                    activeLinkSticky.classList.remove('text-muted-foreground');
                    activeLinkSticky.classList.add('text-primary', 'font-bold');
                    // Auto-scroll the TOC to keep active item in view
                    activeLinkSticky.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }

                const activeLinkDesktop = document.querySelector(`.toc-desktop a[href="#${id}"]`);
                if (activeLinkDesktop) {
                    activeLinkDesktop.classList.remove('text-muted-foreground');
                    activeLinkDesktop.classList.add('text-primary', 'font-bold');
                }
            }
        });
    }, {
        rootMargin: '-100px 0px -60% 0px'
    });

    // Observe all H2s
    document.querySelectorAll('h2[id]').forEach(section => {
        observer.observe(section);
    });
});
