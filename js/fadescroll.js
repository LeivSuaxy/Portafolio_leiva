window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.fade-in-scroll');
    const window_height = window.innerHeight;

    elements.forEach(function(element) {
        const distance_to_top = element.getBoundingClientRect().top;

        if (distance_to_top - window_height <= 0) {
            element.classList.add('visible');
        }
    });
});