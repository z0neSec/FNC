/* ============================================
   FNC Motion — IntersectionObserver-based reveals
   Triggers .is-visible when elements enter viewport.
   ============================================ */

(function() {
    // Bail if user prefers reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.querySelectorAll('.fnc-reveal, .fnc-reveal-stagger').forEach(function(el) {
            el.classList.add('is-visible');
        });
        return;
    }

    // Small delay on initial load so above-the-fold content has time to "reveal"
    // instead of appearing instantly when the page renders
    const initialDelay = 80;

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                // Add small delay to make the reveal more noticeable on initial load
                setTimeout(function() {
                    entry.target.classList.add('is-visible');
                }, initialDelay);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -60px 0px'
    });

    document.querySelectorAll('.fnc-reveal, .fnc-reveal-stagger').forEach(function(el) {
        observer.observe(el);
    });
})();