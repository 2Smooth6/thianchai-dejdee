# Portfolio Customization Guide

## Quick Start

This guide helps you personalize the portfolio website for production use.

---

## 1. Personal Information Update

### Home Page (index.html)
Update the hero section with your information:

```html
<!-- Line ~32-42 -->
<h1 class="hero-title">YOUR NAME</h1>
<div class="role-badge">
    <span class="badge-glow"></span>
    Your Role (e.g., Data Analyst Intern)
</div>
<p class="hero-description">
    Your professional tagline...
</p>
```

### Contact Page (index.html)
Update contact information:

```html
<!-- Lines ~610-635 -->
<a href="mailto:your.email@company.com">your.email@company.com</a>
<a href="tel:+1234567890">Your Phone</a>
<p>Your City, Country</p>
```

### Resume (resume.html)
Update all personal details:
- Name and title
- GPA and graduation year
- University name
- Email and phone

---

## 2. Content Customization

### About Section
Replace placeholder content:
- Professional summary
- Key strengths (currently 4 items)
- Academic achievements
- Timeline milestones

### Skills & Tools
Update skill proficiency:
```css
/* styles.css - Update skill-progress width */
<div class="skill-progress" style="width: 85%"></div>
/* Change 85% based on your expertise */
```

### Projects
Edit the 6 project cards:
1. Project title and description
2. Problem statement
3. Tools used (comma-separated)
4. Key insights (3 bullet points)
5. Update the emoji icon in chart-preview

Example:
```html
<h3 class="project-title">YOUR PROJECT TITLE</h3>
<p class="project-description">Description of what you did...</p>
<span class="meta-value">Tool 1, Tool 2, Tool 3</span>
```

---

## 3. Social Media & Links

### Navigation Links
```html
<a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
<a href="https://github.com/yourprofile">GitHub</a>
<a href="https://twitter.com/yourprofile">Twitter</a>
```

### Email Links
```html
<!-- Update all mailto links -->
<a href="mailto:your.email@company.com">your.email@company.com</a>
```

---

## 4. Color Customization

### Dark Mode (Default)
Edit `:root` in `styles.css`:

```css
:root {
    --bg-primary: #0B0B0F;          /* Main background */
    --bg-surface: #141419;          /* Card background */
    --color-accent: #00D4FF;        /* Primary accent (cyan) */
    --color-accent-secondary: #8B5CF6; /* Secondary (purple) */
    --text-primary: #FFFFFF;        /* Main text */
    --text-secondary: #B8BCC8;      /* Secondary text */
}
```

### Light Mode
The light mode is built-in. Colors auto-switch when `data-theme="light"`.

### Custom Color Examples
```css
/* For a green theme accent */
--color-accent: #10B981;
--color-accent-secondary: #06B6D4;

/* For a red theme accent */
--color-accent: #EF4444;
--color-accent-secondary: #F97316;

/* For a blue theme accent */
--color-accent: #3B82F6;
--color-accent-secondary: #2563EB;
```

---

## 5. Adding More Projects

1. **Duplicate a project card** in the Projects section:
```html
<div class="project-card">
    <div class="project-thumbnail">
        <div class="chart-preview chart-preview-1"></div>
    </div>
    <div class="project-content">
        <!-- Content here -->
    </div>
</div>
```

2. **Update chart preview icon**:
```css
.chart-preview-7::after { content: '📱'; /* Your emoji */ }
```

3. **Customize content**:
   - Title
   - Description
   - Problem statement
   - Tools
   - Key insights
   - Call-to-action buttons

---

## 6. Adding More Skills

In the Skills section:

```html
<div class="skill-card">
    <div class="skill-header">
        <i class="fas fa-icon-name"></i>
        <h3>Skill Name</h3>
    </div>
    <p>Skill description</p>
    <div class="skill-bar">
        <div class="skill-progress" style="width: 85%"></div>
    </div>
</div>
```

**Available Font Awesome icons:**
- `fa-chart-line` - Line charts
- `fa-chart-bar` - Bar charts
- `fa-database` - Database
- `fa-python` - Python
- `fa-code` - Code

[Browse more icons](https://fontawesome.com/icons)

---

## 7. Font Awesome Icons

The portfolio uses Font Awesome 6.4.0. Common icons:

```html
<!-- Data Visualization -->
<i class="fas fa-chart-line"></i>
<i class="fas fa-chart-bar"></i>
<i class="fas fa-chart-pie"></i>

<!-- Technology -->
<i class="fas fa-database"></i>
<i class="fas fa-code"></i>
<i class="fas fa-python"></i>

<!-- Social -->
<i class="fab fa-linkedin"></i>
<i class="fab fa-github"></i>
<i class="fab fa-twitter"></i>

<!-- UI -->
<i class="fas fa-arrow-right"></i>
<i class="fas fa-check"></i>
<i class="fas fa-star"></i>
```

---

## 8. Typography Customization

### Change Font
```css
/* styles.css - Line 8 */
body {
    font-family: 'Your Font Name', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
```

Recommended fonts:
- `'Inter'` - Modern and clean
- `'Poppins'` - Friendly and contemporary
- `'JetBrains Mono'` - Technical and precise
- `'Outfit'` - Bold and geometric

### Change Heading Sizes
```css
h1 { font-size: 4rem; }      /* Main title */
h2 { font-size: 2.5rem; }    /* Section titles */
h3 { font-size: 1.5rem; }    /* Subsection titles */
```

---

## 9. Spacing & Layout

### Container Width
```css
.container {
    max-width: 1200px;  /* Adjust as needed */
    padding: 0 2rem;
}
```

### Section Padding
```css
.page {
    padding: 100px 0;  /* Vertical spacing */
}
```

### Gap Between Elements
```css
.projects-grid {
    gap: 2rem;  /* Adjust spacing */
}
```

---

## 10. Adding Case Studies

Create a new HTML file similar to `case-study.html`:

1. Copy `case-study.html`
2. Update:
   - Page title
   - Project name
   - Sections and content
   - Metrics and results
3. Link from project cards:
   ```html
   <a href="your-case-study.html" class="btn btn-sm btn-secondary">
       View Case Study
   </a>
   ```

---

## 11. SEO Optimization

### Meta Tags
```html
<meta name="description" content="Your portfolio description">
<meta name="keywords" content="data analyst, portfolio, analytics">
<meta name="author" content="Your Name">
```

### Open Graph (Social Sharing)
```html
<meta property="og:title" content="Your Name - Portfolio">
<meta property="og:description" content="...">
<meta property="og:image" content="your-image.jpg">
```

### Structured Data (JSON-LD)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Your Name",
  "jobTitle": "Data Analyst",
  "url": "https://yourportfolio.com"
}
</script>
```

---

## 12. Form Customization

The contact form is currently frontend-only. To make it functional:

### Option 1: Email Service (Recommended)
Use services like:
- **Formspree** - Free form backend
- **Netlify Forms** - If hosted on Netlify
- **EmailJS** - Send emails directly from JS
- **Basin** - Simple form submission

### Option 2: Backend Service
```javascript
// script.js - Replace form submission
fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(formData)
})
```

---

## 13. Animations & Effects

### Adjust Animation Duration
```css
--transition-fast: 0.2s ease;      /* Quick transitions */
--transition-smooth: 0.4s cubic-bezier(...); /* Smooth transitions */
```

### Disable Animations (Accessibility)
```css
@media (prefers-reduced-motion: reduce) {
    * {
        animation: none !important;
        transition: none !important;
    }
}
```

---

## 14. Mobile Optimization

### Test Responsive Design
```bash
# Chrome DevTools: Ctrl+Shift+M (or Cmd+Shift+M on Mac)
```

### Mobile Breakpoints
```css
@media (max-width: 768px)   { /* Tablet */ }
@media (max-width: 480px)   { /* Mobile */ }
```

### Touch-Friendly Elements
- Buttons: 44px minimum height
- Links: 44px minimum tap target
- Spacing: At least 16px between interactive elements

---

## 15. Deployment Checklist

Before deploying:

- [ ] Update all personal information
- [ ] Add professional photo/placeholder
- [ ] Update project descriptions with real projects
- [ ] Set up working email/contact form
- [ ] Update social media links
- [ ] Test on mobile devices
- [ ] Check all links work correctly
- [ ] Optimize images and assets
- [ ] Add favicon
- [ ] Update meta tags for SEO
- [ ] Test theme toggle (dark/light)
- [ ] Verify form submission
- [ ] Test on different browsers
- [ ] Add analytics tracking
- [ ] Set up 404 page
- [ ] Enable HTTPS

---

## 16. Analytics Setup

Add Google Analytics:

```html
<!-- Add before closing </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_ID');
</script>
```

---

## 17. Performance Tips

1. **Minimize CSS**: Remove unused styles
2. **Optimize Images**: Use modern formats (WebP)
3. **Code Splitting**: Load code only when needed
4. **Lazy Loading**: Load images below the fold lazily
5. **Caching**: Set proper cache headers
6. **Minification**: Minify CSS and JS for production

---

## Common Issues & Solutions

### Issue: Colors not updating
- **Solution**: Clear browser cache (Ctrl+Shift+Del)

### Issue: Navbar always hidden
- **Solution**: Adjust scroll threshold in `script.js`

### Issue: Form not working
- **Solution**: Integrate with form service (Formspree, etc.)

### Issue: Poor mobile experience
- **Solution**: Test with DevTools mobile emulation

### Issue: Slow loading
- **Solution**: Optimize images, minify code, enable caching

---

## Resources

- **Font Awesome**: https://fontawesome.com/icons
- **Color Palette**: https://coolors.co/
- **Google Fonts**: https://fonts.google.com/
- **Formspree**: https://formspree.io/
- **Netlify**: https://netlify.com/
- **Vercel**: https://vercel.com/

---

## Support

For issues or questions:
1. Check the inline HTML comments
2. Review the main README.md
3. Test in browser DevTools console
4. Verify all file paths are correct

---

**Portfolio Version**: 1.0  
**Last Updated**: June 2026  
**Status**: Production Ready
