document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav ul');

    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Dark mode toggle
    const darkModeToggle = document.createElement('button');
    darkModeToggle.textContent = 'Toggle Dark Mode';
    darkModeToggle.classList.add('dark-mode-toggle');
    document.body.appendChild(darkModeToggle);

    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode') ? 'enabled' : 'disabled');
    });

    if (localStorage.getItem('dark-mode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }

    // Back-to-top button
    const backToTopButton = document.createElement('button');
    backToTopButton.textContent = '↑';
    backToTopButton.classList.add('back-to-top');
    document.body.appendChild(backToTopButton);

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
        backToTopButton.style.display = window.scrollY > 200 ? 'block' : 'none';
    });

    // Smooth scrolling
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    // Lazy loading sections
    const sections = document.querySelectorAll('section');
    const lazyLoad = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('loaded');
            observer.unobserve(entry.target);
        });
    });

    sections.forEach(section => lazyLoad.observe(section));
});
