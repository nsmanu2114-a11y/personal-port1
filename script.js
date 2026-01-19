const sections = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const position = section.getBoundingClientRect().top;
        const screenHeight = window.innerHeight - 100;

        if (position < screenHeight) {
            section.classList.add('show');
        }
    });
});
