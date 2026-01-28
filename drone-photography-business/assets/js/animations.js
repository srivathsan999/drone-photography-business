// Animations with GSAP
document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    // Fade Up Elements
    gsap.utils.toArray('.fade-up').forEach(element => {
        gsap.to(element, {
            scrollTrigger: {
                trigger: element,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out"
        });
    });

    // Navbar Entry
    gsap.to('.nav-item', {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.2
    });

    // Hero Image Parallax (Subtle)
    const heroImg = document.querySelector('.hero-image');
    if (heroImg) {
        gsap.to(heroImg, {
            scrollTrigger: {
                trigger: 'body',
                start: "top top",
                end: "bottom top",
                scrub: 1
            },
            y: 100,
            ease: "none"
        });
    }
});
