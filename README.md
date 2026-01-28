# SkyLens - Drone Photography Business Website Template

## Overview
SkyLens is a premium, high-contrast, responsive HTML5 template designed for Drone Photography and Videography businesses. It features a modern design system with glassmorphism elements, smooth GSAP animations, and a fully functional light/dark mode.

## Features
-   **13 Complete Pages**: Home, Home Variant, Services, Portfolio, Blog, Pricing, Contact, Auth, etc.
-   **Light/Dark Mode**: Persistent theme toggle using LocalStorage.
-   **Responsive Design**: Built on Bootstrap 5 Grid.
-   **Animations**: GSAP-powered scroll animations and hover effects.
-   **Glassmorphism**: Premium glass card effects in Hero and Pricing sections.
-   **Semantic HTML5**: SEO-friendly structure.

## File Structure
```
/drone-photography-business/
├── index.html          # Main Home
├── home-2.html         # Home Variant
├── services.html       # Services List
├── service-details.html# Single Service Details
├── portfolio.html      # Portfolio Grid
├── pricing.html        # Pricing Plans
├── about.html          # About Us
├── blog.html           # Blog List
├── blog-details.html   # Single Blog Post
├── contact.html        # Contact Form
├── login.html          # Login Page
├── signup.html         # Signup Page
├── 404.html            # Error Page
├── assets/
│   ├── css/            # Stylesheets
│   ├── js/             # JavaScript files
│   ├── images/         # Image Assets (Unsplash)
│   └── fonts/          # Fonts (if local)
└── README.md
```

## Setup Instructions
1.  **Images**: If images are missing, run the provided `download_assets.ps1` script (Windows) or ensure you have placed images in `assets/images/` structure.
    -   `assets/images/hero/`
    -   `assets/images/services/`
    -   `assets/images/portfolio/`
2.  **Open**: Simply open `index.html` in any modern web browser.
3.  **Deploy**: Upload the entire folder to any static host (Netlify, Vercel, GitHub Pages).

## Credits
-   **Bootstrap 5**: Layout & Grid
-   **GSAP**: Animations
-   **Unsplash**: Placeholder Images
-   **Bootstrap Icons**: Iconography
-   **Google Fonts**: Inter & Poppins

## Customization
-   Edit `assets/css/style.css` for core colors (`--color-primary`, `--color-accent`).
-   Edit `assets/js/main.js` for custom behaviors.

---
**SkyLens Team**
