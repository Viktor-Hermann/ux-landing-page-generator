# Landing Page Template System

## Design Token Configuration

### Cadence Style (Dark SaaS)
```css
:root[data-theme="cadence"] {
  /* Colors */
  --primary-bg: #000000;
  --secondary-bg: #0a0a0a;
  --accent-color: #3064FF;
  --accent-secondary: #6366f1;
  --text-primary: #ffffff;
  --text-secondary: #a1a1aa;
  --text-muted: #71717a;
  
  /* Gradients */
  --hero-gradient: linear-gradient(135deg, #3064FF 0%, #8b5cf6 100%);
  --card-gradient: linear-gradient(145deg, #1a1a1a 0%, #0a0a0a 100%);
  --accent-gradient: linear-gradient(90deg, #3064FF 0%, #06b6d4 100%);
  
  /* Shadows */
  --shadow-primary: 0 10px 25px rgba(48, 100, 255, 0.3);
  --shadow-card: 0 4px 6px rgba(0, 0, 0, 0.5);
  --shadow-hover: 0 20px 40px rgba(48, 100, 255, 0.4);
  
  /* Typography */
  --font-primary: 'Inter', 'DM Sans', system-ui, sans-serif;
  --font-heading: 'DM Sans', 'Inter', system-ui, sans-serif;
  --text-hero: clamp(3rem, 8vw, 6rem);
  --text-h2: clamp(2rem, 5vw, 3.5rem);
  --text-h3: clamp(1.5rem, 4vw, 2.25rem);
}
```

### Viper Style (Bold & Energetic)
```css
:root[data-theme="viper"] {
  /* Colors */
  --primary-bg: #ffffff;
  --secondary-bg: #f8fafc;
  --accent-color: #ff462e;
  --accent-secondary: #f59e0b;
  --text-primary: #000000;
  --text-secondary: #374151;
  --text-muted: #6b7280;
  
  /* Gradients */
  --hero-gradient: linear-gradient(135deg, #ff462e 0%, #f59e0b 100%);
  --card-gradient: linear-gradient(145deg, #000000 0%, #1f1f1f 100%);
  --accent-gradient: linear-gradient(90deg, #ff462e 0%, #ef4444 100%);
  
  /* Shadows */
  --shadow-primary: 0 10px 25px rgba(255, 70, 46, 0.3);
  --shadow-card: 0 8px 16px rgba(0, 0, 0, 0.1);
  --shadow-hover: 0 20px 40px rgba(255, 70, 46, 0.4);
  
  /* Typography */
  --font-primary: 'Inter', system-ui, sans-serif;
  --font-heading: 'Montserrat', 'Inter', system-ui, sans-serif;
  --font-weight-bold: 900;
  --text-hero: clamp(3.5rem, 9vw, 7rem);
  --text-h2: clamp(2.5rem, 6vw, 4rem);
  --text-h3: clamp(1.75rem, 5vw, 2.5rem);
}
```

### Sonic Style (Clean Professional)
```css
:root[data-theme="sonic"] {
  /* Colors */
  --primary-bg: #f8fafc;
  --secondary-bg: #ffffff;
  --accent-color: #6366f1;
  --accent-secondary: #10b981;
  --text-primary: #1e293b;
  --text-secondary: #475569;
  --text-muted: #64748b;
  
  /* Gradients */
  --hero-gradient: linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%);
  --card-gradient: linear-gradient(145deg, #ffffff 0%, #f1f5f9 100%);
  --accent-gradient: linear-gradient(90deg, #6366f1 0%, #8b5cf6 100%);
  
  /* Shadows */
  --shadow-primary: 0 4px 6px rgba(99, 102, 241, 0.1);
  --shadow-card: 0 1px 3px rgba(0, 0, 0, 0.1);
  --shadow-hover: 0 10px 25px rgba(99, 102, 241, 0.15);
  
  /* Typography */
  --font-primary: 'Inter', system-ui, sans-serif;
  --font-heading: 'Inter', system-ui, sans-serif;
  --text-hero: clamp(2.5rem, 6vw, 4rem);
  --text-h2: clamp(2rem, 5vw, 3rem);
  --text-h3: clamp(1.5rem, 4vw, 2rem);
}
```

## Component Configuration Templates

### Hero Section Variants
```json
{
  "heroVariants": {
    "cadence": {
      "layout": "centered",
      "background": "gradient-dark",
      "titleStyle": "gradient-text",
      "ctaStyle": "neon-button",
      "animation": "slide-up-stagger"
    },
    "viper": {
      "layout": "asymmetrical",
      "background": "white",
      "titleStyle": "bold-contrast",
      "ctaStyle": "bold-button",
      "animation": "zoom-in"
    },
    "sonic": {
      "layout": "clean-center",
      "background": "gradient-light",
      "titleStyle": "professional",
      "ctaStyle": "professional-button",
      "animation": "fade-in-up"
    }
  }
}
```

### Feature Card Configurations
```json
{
  "featureCards": {
    "cadence": {
      "style": "glass-morphism",
      "iconStyle": "neon-glow",
      "hoverEffect": "glow-lift",
      "layout": "grid-3"
    },
    "viper": {
      "style": "bold-contrast",
      "iconStyle": "large-emoji",
      "hoverEffect": "color-shift",
      "layout": "grid-3"
    },
    "sonic": {
      "style": "clean-cards",
      "iconStyle": "professional-icons",
      "hoverEffect": "subtle-lift",
      "layout": "grid-responsive"
    }
  }
}
```

## Content Generation Templates

### Headlines by Industry
```json
{
  "headlines": {
    "saas": {
      "cadence": "Revolutionary {product} That {benefit}",
      "viper": "DOMINATE {industry} WITH {product}",
      "sonic": "The Smart Way to {action} for {industry}"
    },
    "agency": {
      "cadence": "Next-Gen {service} for {target}",
      "viper": "UNLEASH YOUR {benefit} POTENTIAL",
      "sonic": "Professional {service} Solutions"
    },
    "portfolio": {
      "cadence": "Crafting Digital Experiences",
      "viper": "BOLD CREATIVE SOLUTIONS",
      "sonic": "Creative Professional Portfolio"
    }
  }
}
```

### CTA Button Text
```json
{
  "ctaButtons": {
    "primary": {
      "cadence": "Start Your Journey",
      "viper": "GET STARTED NOW",
      "sonic": "Try It Free"
    },
    "secondary": {
      "cadence": "Learn More",
      "viper": "SEE FEATURES",
      "sonic": "View Demo"
    }
  }
}
```

## Animation Patterns

### Cadence Animations
```json
{
  "animations": {
    "hero": {
      "title": "slideInUp, stagger: 0.2s",
      "subtitle": "fadeInUp, delay: 0.4s",
      "cta": "scaleIn, delay: 0.6s"
    },
    "features": {
      "cards": "fadeInUp, stagger: 0.1s, trigger: scroll",
      "icons": "glowPulse, continuous"
    },
    "background": {
      "particles": "float, speed: slow",
      "gradient": "shift, duration: 10s"
    }
  }
}
```

### Viper Animations
```json
{
  "animations": {
    "hero": {
      "title": "zoomIn, duration: 0.8s",
      "subtitle": "slideInRight, delay: 0.3s",
      "cta": "bounceIn, delay: 0.6s"
    },
    "features": {
      "cards": "slideInUp, stagger: 0.15s, trigger: scroll",
      "hover": "liftAndGlow, duration: 0.3s"
    },
    "interactions": {
      "buttons": "scalePress, feedback: haptic",
      "cards": "colorShift, trigger: hover"
    }
  }
}
```

## Responsive Breakpoints
```css
/* Mobile First Approach */
@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
@media (min-width: 1536px) { /* 2xl */ }
```

## SEO and Performance Configuration
```json
{
  "seo": {
    "metaTags": {
      "title": "{product} - {benefit}",
      "description": "{product} helps {target} {action} with {features}. {cta}",
      "keywords": "{industry}, {product-type}, {benefits}"
    },
    "schema": {
      "type": "WebPage",
      "organization": true,
      "breadcrumbs": true
    }
  },
  "performance": {
    "images": "webp, lazy-loading, responsive",
    "fonts": "preload, subset",
    "css": "critical-inline, async-non-critical",
    "js": "code-splitting, async-loading"
  }
}
```