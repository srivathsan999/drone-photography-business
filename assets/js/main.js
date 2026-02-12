console.log("Main JS Loaded");

// Mobile Menu Close on Click (Bootstrap fix if needed, or custom)
// Since we use Bootstrap's standard collapser, we might add auto-close logic here.

document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        // Do not close mobile menu if clicking a dropdown toggle
        if (link.classList.contains('dropdown-toggle')) {
            return;
        }

        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
            const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
            if (bsCollapse) bsCollapse.hide();
        }
    });
});
