// Animations with GSAP
document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    // Speed up initial load by reducing duration and using better easing
    const defaultDuration = 0.6;
    const fastEase = "power2.out";

    // Batch Fade Up Elements (Triggers groups of elements together for smoother feel)
    ScrollTrigger.batch(".fade-up", {
        start: "top 90%", // Trigger slightly earlier
        onEnter: batch => gsap.to(batch, {
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: defaultDuration,
            ease: fastEase,
            overwrite: true
        }),
        onEnterBack: batch => gsap.to(batch, {
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: defaultDuration,
            ease: fastEase,
            overwrite: true
        })
    });

    // Navbar Entry (Snappier)
    gsap.to('.nav-item', {
        opacity: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.05, // Faster stagger
        ease: "power2.out",
        delay: 0.1
    });

    // Hero Image Parallax (Hardware accelerated)
    const heroImg = document.querySelector('.hero-image');
    if (heroImg) {
        gsap.to(heroImg, {
            scrollTrigger: {
                trigger: 'body',
                start: "top top",
                end: "bottom top",
                scrub: true
            },
            y: "15%", // Use percentage for better performance
            force3D: true,
            ease: "none"
        });
    }
});
