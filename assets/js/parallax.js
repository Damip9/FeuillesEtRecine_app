document.addEventListener('DOMContentLoaded', function() {
    const parallaxBg = document.querySelector('.parallax-bg');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.5;
        
        if (parallaxBg) {
            parallaxBg.style.transform = `translate3d(0, ${rate}px, 0)`;
        }
    });
}); 