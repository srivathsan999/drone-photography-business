console.log("Main JS Loaded");

// Mobile Menu Close on Click (Bootstrap fix if needed, or custom)
// Since we use Bootstrap's standard collapser, we might add auto-close logic here.

document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
            // Using Bootstrap 5 API would be ideal, but simple class remove works for logic
            // new bootstrap.Collapse(navbarCollapse).hide();
            // Let's rely on data-bs-toggle if possible, or simple JS:
            const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
            if (bsCollapse) bsCollapse.hide();
        }
    });
});
