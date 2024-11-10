// JavaScript for toggling mobile navigation menu
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav ul');

    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
});

// Smooth scrolling to sections
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Scroll animations using Intersection Observer
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.5,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('appear');
        appearOnScroll.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});
/* Containing element for images, using flexbox or grid for layout */
.image-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px; /* space between images */
    justify-content: center; /* center images */
}

/* Style for each image */
.image-container img {
    width: 100%; /* makes image take full width of its container */
    max-width: 300px; /* limit the max size on larger screens */
    height: auto; /* maintains aspect ratio */
    border-radius: 10px; /* optional rounded corners */
    object-fit: cover; /* fills the image container without stretching */
    transition: transform 0.3s ease; /* smooth hover effect */
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .image-container img {
        max-width: 100%; /* takes full width on smaller screens */
    }
}

                 