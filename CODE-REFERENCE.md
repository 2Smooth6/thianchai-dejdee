# Code Reference & Snippets

Quick reference for common customizations and code snippets.

---

## Table of Contents

1. [Personal Information](#personal-information)
2. [HTML Structure](#html-structure)
3. [CSS Customization](#css-customization)
4. [JavaScript](#javascript)
5. [Forms](#forms)
6. [SEO](#seo)
7. [Analytics](#analytics)

---

## Personal Information

### Update Name (Multiple Places)

**In index.html:**
```html
<!-- Hero Title (line ~32) -->
<h1 class="hero-title">YOUR NAME</h1>

<!-- About Section (line ~195) -->
<h2>YOUR NAME</h2>

<!-- Navbar Logo (line ~24) -->
<span class="logo-text">INITIALS</span>

<!-- Contact Info (line ~615) -->
<h2>Contact Information</h2>
```

**Find & Replace:** `THIANCHAI DEJDEE` → Your Name

### Update Role

```html
<!-- Hero (line ~33) -->
<div class="role-badge">
    <span class="badge-glow"></span>
    Your Role Here
</div>

<!-- About (line ~196) -->
<p class="profile-role">Your Role Here</p>
```

### Update Contact Information

```html
<!-- Email -->
contact@thianchai.com → your.email@company.com

<!-- Phone -->
+1 (234) 567-890 → Your Phone

<!-- Location -->
Bangkok, Thailand → Your City, Country
```

### Update GPA

```html
<div class="stat-number">3.89</div>
```

Change `3.89` to your GPA.

### Update Social Links

```html
<!-- Contact Page (line ~630) -->
<a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
<a href="https://github.com/yourprofile">GitHub</a>
<a href="https://twitter.com/yourprofile">Twitter</a>
```

---

## HTML Structure

### Add New Project Card

```html
<div class="project-card">
    <div class="project-thumbnail">
        <div class="chart-preview chart-preview-7"></div>
    </div>
    <div class="project-content">
        <h3 class="project-title">Project Title</h3>
        <p class="project-description">Project description...</p>
        <div class="project-meta">
            <div class="meta-item">
                <span class="meta-label">Problem:</span>
                <span class="meta-value">Your problem</span>
            </div>
            <div class="meta-item">
                <span class="meta-label">Tools:</span>
                <span class="meta-value">Tool 1, Tool 2</span>
            </div>
        </div>
        <div class="project-insights">
            <strong>Key Insights:</strong>
            <ul>
                <li>Insight 1</li>
                <li>Insight 2</li>
                <li>Insight 3</li>
            </ul>
        </div>
        <div class="project-actions">
            <a href="#" class="btn btn-sm btn-secondary">View Case Study</a>
            <a href="#" class="btn btn-sm btn-secondary">View Dashboard</a>
        </div>
    </div>
</div>
```

### Add New Skill Card

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

### Add New Tool Card

```html
<div class="tool-card">
    <div class="tool-icon">
        <i class="fas fa-icon-name"></i>
    </div>
    <h3>Tool Name</h3>
    <p>Tool description</p>
</div>
```

### Add Form Field

```html
<div class="form-group">
    <label for="fieldname">Field Label</label>
    <input type="text" id="fieldname" name="fieldname" required placeholder="Placeholder">
</div>
```

---

## CSS Customization

### Change Color Scheme

```css
:root {
    --bg-primary: #0B0B0F;              /* Main background */
    --bg-surface: #141419;              /* Card background */
    --color-accent: #00D4FF;            /* Primary accent */
    --color-accent-secondary: #8B5CF6;  /* Secondary accent */
    --text-primary: #FFFFFF;            /* Main text */
    --text-secondary: #B8BCC8;          /* Secondary text */
    --text-tertiary: #89909E;           /* Tertiary text */
}
```

### Custom Color Examples

**Green Theme:**
```css
--color-accent: #10B981;
--color-accent-secondary: #06B6D4;
```

**Red Theme:**
```css
--color-accent: #EF4444;
--color-accent-secondary: #F97316;
```

**Blue Theme:**
```css
--color-accent: #3B82F6;
--color-accent-secondary: #2563EB;
```

**Orange Theme:**
```css
--color-accent: #F97316;
--color-accent-secondary: #FB923C;
```

### Change Typography

**Font Family:**
```css
body {
    font-family: 'Your Font Name', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
```

**Heading Sizes:**
```css
h1 { font-size: 3.5rem; }
h2 { font-size: 2.5rem; }
h3 { font-size: 1.5rem; }
```

**Line Height:**
```css
body { line-height: 1.8; }  /* Increase for more spacing */
p { line-height: 1.6; }
```

### Modify Spacing

**Container Width:**
```css
.container {
    max-width: 1200px;  /* Change for narrower/wider layout */
}
```

**Section Padding:**
```css
.page {
    padding: 100px 0;  /* Vertical spacing between sections */
}
```

**Gap Between Items:**
```css
.projects-grid {
    gap: 2rem;  /* Space between project cards */
}
```

### Add Box Shadow

```css
.card {
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
}
```

### Add Border Radius

```css
.card {
    border-radius: 12px;  /* Rounded corners */
}
```

### Add Glow Effect

```css
.card:hover {
    box-shadow: 0 0 30px rgba(0, 212, 255, 0.3);
}
```

---

## JavaScript

### Update Theme Colors

```javascript
const customTheme = {
    accentColor: '#00D4FF',
    accentSecondary: '#8B5CF6'
};

document.documentElement.style.setProperty('--color-accent', customTheme.accentColor);
```

### Add Custom Animation

```javascript
function customAnimation() {
    const element = document.querySelector('.my-element');
    element.style.animation = 'fadeIn 0.5s ease-in-out';
}
```

### Log User Actions

```javascript
document.addEventListener('click', (e) => {
    console.log('Clicked:', e.target);
});
```

### Change Page Title

```javascript
document.title = 'Your New Title';
```

---

## Forms

### Using Formspree (Easiest)

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
    <input type="email" name="email" required>
    <textarea name="message" required></textarea>
    <button type="submit">Send</button>
</form>
```

Get form ID from https://formspree.io/

### Using Netlify Forms

```html
<form name="contact" method="POST" netlify>
    <input type="text" name="name" required>
    <input type="email" name="email" required>
    <textarea name="message" required></textarea>
    <button type="submit">Send</button>
</form>
```

### Using EmailJS

```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/index.min.js"></script>
<script>
    emailjs.init("YOUR_PUBLIC_KEY");
    
    document.getElementById('form').addEventListener('submit', (e) => {
        e.preventDefault();
        emailjs.sendForm('service_id', 'template_id', this)
            .then(() => alert('Sent!'))
            .catch(e => alert('Error'));
    });
</script>
```

### Form Validation

```javascript
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
```

---

## SEO

### Meta Tags

```html
<head>
    <meta name="description" content="Your portfolio description">
    <meta name="keywords" content="data analyst, portfolio, analytics">
    <meta name="author" content="Your Name">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
```

### Open Graph Tags

```html
<meta property="og:title" content="Your Name - Data Analyst">
<meta property="og:description" content="Portfolio of...">
<meta property="og:image" content="your-image.jpg">
<meta property="og:url" content="https://yoursite.com">
<meta property="og:type" content="website">
```

### Structured Data (JSON-LD)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Your Name",
  "url": "https://yoursite.com",
  "jobTitle": "Data Analyst Intern",
  "sameAs": [
    "https://linkedin.com/in/yourprofile",
    "https://github.com/yourprofile"
  ]
}
</script>
```

### Sitemap.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://yoursite.com/</loc>
        <lastmod>2026-06-02</lastmod>
    </url>
    <url>
        <loc>https://yoursite.com/resume.html</loc>
        <lastmod>2026-06-02</lastmod>
    </url>
</urlset>
```

### Robots.txt

```
User-agent: *
Allow: /
Disallow: /admin/

Sitemap: https://yoursite.com/sitemap.xml
```

---

## Analytics

### Google Analytics

```html
<!-- Add before </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Track Custom Events

```javascript
// Track button clicks
function trackEvent(category, action, label) {
    gtag('event', action, {
        'event_category': category,
        'event_label': label
    });
}
```

### Track Page Views

```javascript
// Automatically tracked, but can be manual:
gtag('pageview', {
    'page_title': document.title,
    'page_location': window.location.href
});
```

---

## Common Font Awesome Icons

### Data & Analytics
```html
<i class="fas fa-chart-line"></i>       <!-- Line chart -->
<i class="fas fa-chart-bar"></i>        <!-- Bar chart -->
<i class="fas fa-chart-pie"></i>        <!-- Pie chart -->
<i class="fas fa-database"></i>         <!-- Database -->
<i class="fas fa-table"></i>            <!-- Table -->
```

### Technology
```html
<i class="fas fa-code"></i>             <!-- Code -->
<i class="fas fa-python"></i>           <!-- Python -->
<i class="fas fa-server"></i>           <!-- Server -->
<i class="fab fa-github"></i>           <!-- GitHub -->
<i class="fab fa-python"></i>           <!-- Python -->
```

### Social
```html
<i class="fab fa-linkedin"></i>         <!-- LinkedIn -->
<i class="fab fa-github"></i>           <!-- GitHub -->
<i class="fab fa-twitter"></i>          <!-- Twitter -->
<i class="fab fa-facebook"></i>         <!-- Facebook -->
<i class="fab fa-instagram"></i>        <!-- Instagram -->
```

### UI
```html
<i class="fas fa-arrow-right"></i>      <!-- Right arrow -->
<i class="fas fa-check"></i>            <!-- Check -->
<i class="fas fa-star"></i>             <!-- Star -->
<i class="fas fa-user"></i>             <!-- User -->
<i class="fas fa-envelope"></i>         <!-- Envelope -->
```

[Browse all icons →](https://fontawesome.com/icons)

---

## Quick Search & Replace

### Find All Instances
| Find | Replace |
|------|---------|
| `THIANCHAI DEJDEE` | Your Name |
| `contact@thianchai.com` | Your Email |
| `+1 (234) 567-890` | Your Phone |
| `Bangkok, Thailand` | Your Location |
| `Data Analyst Intern` | Your Role |

---

## Testing Commands

### Local Server
```bash
# Python 3
python -m http.server 8000

# Node.js
npx http-server

# Then visit: http://localhost:8000
```

### Clear Cache
```
Chrome/Edge: Ctrl+Shift+Del
Firefox: Ctrl+Shift+Del
Mac: Cmd+Shift+Del
```

### Check Console
```
Press: F12
Navigate to: Console tab
Look for any red errors
```

---

## Deployment Commands

### Git Workflow
```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

### Deploy to Netlify
```bash
npm install -g netlify-cli
netlify deploy
```

---

## Accessibility Tips

### Alt Text
```html
<img src="image.jpg" alt="Description of image">
```

### ARIA Labels
```html
<button aria-label="Close menu">×</button>
```

### Keyboard Navigation
```html
<a href="#main-content" class="skip-link">Skip to main content</a>
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
    * {
        animation: none !important;
        transition: none !important;
    }
}
```

---

## Performance Tips

### Optimize Images
```html
<!-- Modern format with fallback -->
<picture>
    <source srcset="image.webp" type="image/webp">
    <img src="image.jpg" alt="Description">
</picture>
```

### Lazy Loading
```html
<img src="image.jpg" alt="Description" loading="lazy">
```

### Minimize CSS
Use online minifier or tool like csso.

### Minify JavaScript
Use online minifier or tool like terser.

---

## Browser DevTools Tips

### Check Responsiveness
- Press: F12
- Click: Phone icon (top left)
- Test different screen sizes

### Debug JavaScript
- Press: F12
- Go to: Console tab
- Check for errors

### Inspect Elements
- Press: F12
- Click: Inspector tool
- Hover over elements to inspect

### Test Performance
- Press: F12
- Go to: Lighthouse tab
- Click: Generate report

---

## Version Control

### Create Repository
```bash
git init
git add .
git commit -m "Initial portfolio"
git remote add origin https://github.com/username/portfolio.git
git push -u origin main
```

### Make Changes
```bash
git add .
git commit -m "Update projects"
git push
```

---

## This Reference

Save this file for quick lookup!

**Print friendly**: Yes ✅  
**Copy-paste ready**: Yes ✅  
**Examples included**: Yes ✅

---

Need more help? Check:
- [CUSTOMIZATION.md](CUSTOMIZATION.md) - Detailed guide
- [README.md](README.md) - Project overview
- [DEPLOYMENT.md](DEPLOYMENT.md) - Hosting guide

Good luck! 🚀
