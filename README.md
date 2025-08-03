# 🎨 UX Landing Page Generator

> **AI-powered landing page generator with modular components, professional templates, automated content generation, and conversion optimization using React, Tailwind CSS, and Framer Motion.**

Complete system with 6 professional template styles, intelligent content generation, responsive design, and advanced animations.

[![Version](https://img.shields.io/npm/v/@appiq-solutions/ux-landing-page-generator.svg)](https://www.npmjs.com/package/@appiq-solutions/ux-landing-page-generator)
[![License](https://img.shields.io/npm/l/@appiq-solutions/ux-landing-page-generator.svg)](LICENSE)
[![GitHub Actions](https://github.com/appiq-solutions/ux-landing-page-generator/workflows/CI/badge.svg)](https://github.com/appiq-solutions/ux-landing-page-generator/actions)

## ✨ Features

- **🎯 Professional Templates**: 6 proven template styles (Cadence, Viper, Portfolite, Sonic, Refit, Landio)
- **🤖 AI Content Generation**: Automated headlines, features, testimonials, and copy optimization
- **🧩 Modular Components**: Reusable React components for hero sections, features, pricing, testimonials
- **📱 Responsive Design**: Mobile-first approach with touch-optimized interactions
- **🎬 Advanced Animations**: Framer Motion integration with scroll-reveal, hover effects, and parallax
- **🎨 Design Token System**: Comprehensive theming with CSS custom properties
- **📊 Conversion Optimization**: A/B testing variants and personalization engine
- **⚡ Performance Optimized**: Fast loading with optimized animations and lazy loading

## 🚀 Quick Start

### Installation

```bash
# Via npm
npm install -g @appiq-solutions/ux-landing-page-generator

# Via GitHub Packages
npm install -g @appiq-solutions/ux-landing-page-generator --registry=https://npm.pkg.github.com
```

### Usage

```bash
# Generate a new landing page
ux-landing-generator create

# Use with Claude/AI assistant
ux-landing-generator create --ai-mode

# Generate with specific template
ux-landing-generator create --template=cadence --industry=saas
```

## 📋 Template Styles

### 🌟 Cadence Style
- **Best for**: SaaS, Tech, AI, Fintech
- **Design**: Dark theme with neon accents, glassmorphism effects
- **Personality**: Professional, innovative, cutting-edge

### ⚡ Viper Style  
- **Best for**: Agency, Creative, Marketing, Sports
- **Design**: Bold typography, high contrast, vibrant colors
- **Personality**: Bold, energetic, confident, disruptive

### 🎨 Portfolite Style
- **Best for**: Portfolio, Creative, Design, Photography
- **Design**: Artistic layouts, grid masonry, image galleries
- **Personality**: Creative, artistic, sophisticated, elegant

### 🏢 Sonic Style
- **Best for**: Corporate, Consulting, Professional Services
- **Design**: Clean and professional, balanced typography
- **Personality**: Professional, trustworthy, clean, reliable

### 💪 Refit Style
- **Best for**: Fitness, Health, Wellness, Sports
- **Design**: Energetic colors, action-oriented design
- **Personality**: Energetic, motivating, healthy, active

### 🚀 Landio Style
- **Best for**: SaaS, B2B, Software, Platforms
- **Design**: Conversion-optimized, feature-rich layouts
- **Personality**: Business-focused, conversion-driven

## 🛠 Component Library

### Hero Components
```jsx
// Cadence Hero with neon effects
<CadenceHero 
  headline="Revolutionary AI Solutions"
  subheadline="Transform your business with cutting-edge AI"
  ctaPrimary="Start Your Journey"
  ctaSecondary="Watch Demo"
/>

// Viper Hero with bold design
<ViperHero 
  headline="DOMINATE YOUR MARKET"
  subheadline="Unleash your potential with our proven system"
  ctaPrimary="GET STARTED NOW"
  ctaSecondary="SEE RESULTS"
/>
```

### Feature Cards
```jsx
<ResponsiveFeatureCards 
  template="cadence"
  features={[
    {
      title: "Smart Automation",
      description: "AI-powered workflow automation",
      icon: "🤖"
    },
    // ... more features
  ]}
/>
```

### Animated Sections
```jsx
<AnimatedSection
  template="cadence"
  animation="scrollReveal"
  stagger={0.1}
>
  <FeatureGrid features={features} />
</AnimatedSection>
```

## 🎨 Design System

### Color Tokens
```css
/* Cadence Theme */
:root[data-theme="cadence"] {
  --primary-bg: #000000;
  --accent-color: #3064FF;
  --text-primary: #ffffff;
  --hero-gradient: linear-gradient(135deg, #3064FF 0%, #8b5cf6 100%);
}

/* Viper Theme */
:root[data-theme="viper"] {
  --primary-bg: #ffffff;
  --accent-color: #ff462e;
  --text-primary: #000000;
  --hero-gradient: linear-gradient(135deg, #ff462e 0%, #f59e0b 100%);
}
```

### Typography Scale
```css
/* Fluid Typography */
--text-hero: clamp(3rem, 8vw, 6rem);
--text-h2: clamp(2rem, 5vw, 3.5rem);
--text-h3: clamp(1.5rem, 4vw, 2.25rem);
```

## 🤖 AI Content Generation

The generator includes intelligent content creation based on:

- **Industry Analysis**: Tailored messaging for SaaS, Agency, Fitness, etc.
- **Audience Targeting**: B2B vs B2C optimized copy
- **Conversion Psychology**: Proven copywriting patterns
- **Template Adaptation**: Style-specific tone and voice

### Example Generated Content

```javascript
// Input
const config = {
  industry: "SaaS",
  product: "FlowManager",
  targetAudience: "small businesses"
};

// Generated Output
{
  headline: "Transform Your Workflow Efficiency by 300%",
  subheadline: "The complete workflow management solution trusted by 10,000+ businesses",
  features: [
    {
      title: "Smart Automation",
      description: "Reduce manual work by 80% with intelligent automation",
      icon: "⚡"
    }
  ]
}
```

## 📱 Responsive Design

All components are built with mobile-first responsive design:

- **Breakpoints**: xs, sm, md, lg, xl, 2xl
- **Touch Optimized**: 44px minimum touch targets
- **Performance**: GPU-accelerated animations
- **Accessibility**: WCAG 2.1 AA compliant

## 🎬 Animation System

Built on Framer Motion with template-specific animations:

```jsx
// Scroll-triggered animations
const { ref, controls } = useScrollAnimation();

<motion.div
  ref={ref}
  animate={controls}
  variants={animationVariants.cadence.scrollReveal}
>
  Content here
</motion.div>
```

## 📊 Performance

- **Core Web Vitals**: Optimized for LCP, FID, CLS
- **Bundle Size**: Code splitting and lazy loading
- **Image Optimization**: WebP with fallbacks
- **Critical CSS**: Inline critical styles

## 🔧 Configuration

Landing pages are configured via JSON:

```json
{
  "template": { "id": "cadence" },
  "company": {
    "name": "TechFlow",
    "industry": "SaaS"
  },
  "product": {
    "name": "FlowManager",
    "category": "Workflow Management"
  },
  "sections": [
    {
      "id": "hero",
      "type": "hero",
      "variant": "centered"
    }
  ]
}
```

## 🚀 Deployment

Generate deployable React applications:

```bash
# Generate and build
ux-landing-generator create --build

# Deploy to Vercel
ux-landing-generator deploy --platform=vercel

# Deploy to Netlify  
ux-landing-generator deploy --platform=netlify
```

## 📖 Documentation

- [Template Guide](docs/templates.md)
- [Component API](docs/components.md)
- [Animation System](docs/animations.md)
- [Configuration Reference](docs/configuration.md)
- [Deployment Guide](docs/deployment.md)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Template designs inspired by Framer community templates
- Built with modern web technologies and best practices
- Optimized for conversion and user experience

## 💬 Support

- 📧 Email: info@appiq-solutions.com
- 🐛 Issues: [GitHub Issues](https://github.com/appiq-solutions/ux-landing-page-generator/issues)
- 💡 Feature Requests: [GitHub Discussions](https://github.com/appiq-solutions/ux-landing-page-generator/discussions)

---

**Made with ❤️ by [Appiq Solutions](https://appiq-solutions.com)**