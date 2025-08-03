# Responsive Design System for Landing Pages

## Breakpoint System

### Standard Breakpoints
```css
/* Mobile First Approach */
:root {
  --breakpoint-xs: 0px;      /* Extra small devices (portrait phones) */
  --breakpoint-sm: 640px;    /* Small devices (landscape phones) */
  --breakpoint-md: 768px;    /* Medium devices (tablets) */
  --breakpoint-lg: 1024px;   /* Large devices (laptops) */
  --breakpoint-xl: 1280px;   /* Extra large devices (desktops) */
  --breakpoint-2xl: 1536px;  /* 2X Extra large devices (large desktops) */
}

/* Tailwind CSS Compatible Breakpoints */
@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
@media (min-width: 1536px) { /* 2xl */ }
```

### Container System
```css
/* Responsive Container Classes */
.container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
}

@media (min-width: 640px) {
  .container {
    max-width: 640px;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 768px;
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
}

@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
  }
}

@media (min-width: 1536px) {
  .container {
    max-width: 1536px;
  }
}
```

## Responsive Typography System

### Fluid Typography
```css
/* Fluid Typography using clamp() */
:root {
  --text-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.8rem);
  --text-sm: clamp(0.875rem, 0.8rem + 0.375vw, 0.95rem);
  --text-base: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);
  --text-lg: clamp(1.125rem, 1rem + 0.625vw, 1.25rem);
  --text-xl: clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem);
  --text-2xl: clamp(1.5rem, 1.3rem + 1vw, 2rem);
  --text-3xl: clamp(1.875rem, 1.6rem + 1.375vw, 2.5rem);
  --text-4xl: clamp(2.25rem, 1.9rem + 1.75vw, 3.5rem);
  --text-5xl: clamp(3rem, 2.4rem + 3vw, 5rem);
  --text-6xl: clamp(3.75rem, 2.8rem + 4.75vw, 6rem);
  --text-7xl: clamp(4.5rem, 3.2rem + 6.5vw, 8rem);
}

/* Template-Specific Typography Scales */
.cadence-typography {
  --hero-title: clamp(3rem, 5vw + 1rem, 8rem);
  --section-title: clamp(2rem, 3vw + 1rem, 4rem);
  --card-title: clamp(1.25rem, 2vw + 0.5rem, 2rem);
  --body-text: clamp(1rem, 1vw + 0.5rem, 1.25rem);
}

.viper-typography {
  --hero-title: clamp(3.5rem, 6vw + 1rem, 9rem);
  --section-title: clamp(2.5rem, 4vw + 1rem, 5rem);
  --card-title: clamp(1.5rem, 2.5vw + 0.5rem, 2.5rem);
  --body-text: clamp(1rem, 1vw + 0.5rem, 1.125rem);
}

.sonic-typography {
  --hero-title: clamp(2.5rem, 4vw + 1rem, 6rem);
  --section-title: clamp(2rem, 3vw + 1rem, 3.5rem);
  --card-title: clamp(1.25rem, 2vw + 0.5rem, 1.75rem);
  --body-text: clamp(1rem, 0.5vw + 0.75rem, 1.125rem);
}
```

### Responsive Line Heights
```css
/* Responsive Line Heights */
:root {
  --leading-none: 1;
  --leading-tight-mobile: 1.1;
  --leading-tight-desktop: 1.25;
  --leading-normal-mobile: 1.4;
  --leading-normal-desktop: 1.5;
  --leading-relaxed-mobile: 1.6;
  --leading-relaxed-desktop: 1.75;
}

@media (max-width: 767px) {
  .responsive-leading-tight { line-height: var(--leading-tight-mobile); }
  .responsive-leading-normal { line-height: var(--leading-normal-mobile); }
  .responsive-leading-relaxed { line-height: var(--leading-relaxed-mobile); }
}

@media (min-width: 768px) {
  .responsive-leading-tight { line-height: var(--leading-tight-desktop); }
  .responsive-leading-normal { line-height: var(--leading-normal-desktop); }
  .responsive-leading-relaxed { line-height: var(--leading-relaxed-desktop); }
}
```

## Responsive Grid Systems

### CSS Grid Layout System
```css
/* Responsive Grid System */
.grid-responsive {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
}

@media (min-width: 640px) {
  .grid-responsive {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

@media (min-width: 1024px) {
  .grid-responsive {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
}

@media (min-width: 1280px) {
  .grid-responsive {
    gap: 2.5rem;
  }
}

/* Feature Cards Grid */
.feature-grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .feature-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .feature-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Benefits Grid (Alternating Layout) */
.benefits-grid {
  display: grid;
  gap: 3rem;
}

@media (min-width: 768px) {
  .benefits-grid {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
  
  .benefits-grid .benefit-item:nth-child(even) {
    grid-column: 2 / 3;
    grid-row: calc(var(--item-index) * 2 - 1) / calc(var(--item-index) * 2);
  }
  
  .benefits-grid .benefit-item:nth-child(even) + .benefit-image {
    grid-column: 1 / 2;
    grid-row: calc(var(--item-index) * 2 - 1) / calc(var(--item-index) * 2);
  }
}
```

### Flexbox Layout System
```css
/* Responsive Flexbox Utilities */
.flex-responsive {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

@media (min-width: 768px) {
  .flex-responsive {
    flex-direction: row;
    gap: 2rem;
  }
}

.flex-responsive-reverse {
  display: flex;
  flex-direction: column-reverse;
  gap: 1rem;
}

@media (min-width: 768px) {
  .flex-responsive-reverse {
    flex-direction: row;
    gap: 2rem;
  }
}

/* Hero Layout */
.hero-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 2rem;
  padding: 2rem 1rem;
}

@media (min-width: 768px) {
  .hero-layout {
    padding: 4rem 2rem;
    gap: 3rem;
  }
}

@media (min-width: 1024px) {
  .hero-layout {
    padding: 6rem 2rem;
    gap: 4rem;
  }
}
```

## Responsive Spacing System

### Fluid Spacing
```css
/* Fluid Spacing System */
:root {
  --space-xs: clamp(0.5rem, 1vw, 0.75rem);
  --space-sm: clamp(1rem, 2vw, 1.5rem);
  --space-md: clamp(1.5rem, 3vw, 2.5rem);
  --space-lg: clamp(2rem, 4vw, 4rem);
  --space-xl: clamp(3rem, 6vw, 6rem);
  --space-2xl: clamp(4rem, 8vw, 8rem);
  --space-3xl: clamp(6rem, 12vw, 12rem);
  
  /* Section Spacing */
  --section-padding-y: clamp(4rem, 8vw, 8rem);
  --section-padding-x: clamp(1rem, 4vw, 2rem);
  
  /* Component Spacing */
  --card-padding: clamp(1.5rem, 3vw, 2.5rem);
  --button-padding-x: clamp(1.5rem, 3vw, 2rem);
  --button-padding-y: clamp(0.75rem, 1.5vw, 1rem);
}

/* Responsive Section Spacing */
.section-spacing {
  padding-top: var(--section-padding-y);
  padding-bottom: var(--section-padding-y);
  padding-left: var(--section-padding-x);
  padding-right: var(--section-padding-x);
}
```

## Component Responsive Behavior

### Navigation Component
```jsx
// ResponsiveNavigation.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const ResponsiveNavigation = ({ template = 'cadence', items = [] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navStyles = {
    cadence: {
      desktop: "bg-black/90 backdrop-blur-sm border-b border-blue-500/20",
      mobile: "bg-black/95 backdrop-blur-md",
      link: "text-white hover:text-blue-400 transition-colors"
    },
    viper: {
      desktop: "bg-white shadow-lg",
      mobile: "bg-white shadow-xl",
      link: "text-black hover:text-red-500 font-bold transition-colors"
    },
    sonic: {
      desktop: "bg-white/90 backdrop-blur-sm border-b border-gray-200",
      mobile: "bg-white/95 backdrop-blur-md",
      link: "text-gray-700 hover:text-indigo-600 transition-colors"
    }
  };

  const style = navStyles[template];

  return (
    <nav className={`sticky top-0 z-50 ${style.desktop}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src="/logo.svg" alt="Logo" className="h-8 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {items.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={style.link}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={`block h-0.5 bg-current transform transition-transform ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`block h-0.5 bg-current transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-current transform transition-transform ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`md:hidden ${style.mobile}`}
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {items.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className={`block px-3 py-2 ${style.link}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <button className="w-full mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
```

### Responsive Hero Section
```jsx
// ResponsiveHero.jsx
import { motion } from 'framer-motion';

export const ResponsiveHero = ({ 
  template = 'cadence', 
  headline, 
  subheadline, 
  ctaPrimary, 
  ctaSecondary,
  backgroundImage 
}) => {
  const heroStyles = {
    cadence: {
      container: "min-h-screen bg-black text-white relative overflow-hidden",
      content: "container mx-auto px-4 py-16 md:py-24 lg:py-32 text-center",
      headline: "text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent",
      subheadline: "text-lg md:text-xl lg:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto",
      buttonContainer: "flex flex-col sm:flex-row gap-4 justify-center items-center"
    },
    viper: {
      container: "min-h-screen bg-white text-black relative overflow-hidden",
      content: "container mx-auto px-4 py-16 md:py-24 lg:py-32 text-center",
      headline: "text-5xl md:text-7xl lg:text-8xl font-black mb-6 uppercase",
      subheadline: "text-xl md:text-2xl lg:text-3xl mb-8 font-bold max-w-4xl mx-auto",
      buttonContainer: "flex flex-col sm:flex-row gap-6 justify-center items-center"
    },
    sonic: {
      container: "min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 text-gray-900 relative overflow-hidden",
      content: "container mx-auto px-4 py-16 md:py-24 lg:py-32 text-center",
      headline: "text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900",
      subheadline: "text-lg md:text-xl lg:text-2xl mb-8 text-gray-600 max-w-3xl mx-auto",
      buttonContainer: "flex flex-col sm:flex-row gap-4 justify-center items-center"
    }
  };

  const style = heroStyles[template];

  return (
    <section className={style.container}>
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20" />
      
      <div className={`${style.content} relative z-10`}>
        <motion.h1 
          className={style.headline}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {headline}
        </motion.h1>
        
        <motion.p 
          className={style.subheadline}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {subheadline}
        </motion.p>
        
        <motion.div 
          className={style.buttonContainer}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 md:px-10 md:py-4 rounded-lg font-semibold transition-all transform hover:scale-105">
            {ctaPrimary}
          </button>
          {ctaSecondary && (
            <button className="w-full sm:w-auto border-2 border-current px-8 py-3 md:px-10 md:py-4 rounded-lg font-semibold transition-all hover:bg-current hover:text-white">
              {ctaSecondary}
            </button>
          )}
        </motion.div>
      </div>
    </section>
  );
};
```

### Responsive Feature Cards
```jsx
// ResponsiveFeatureCards.jsx
import { motion } from 'framer-motion';

export const ResponsiveFeatureCards = ({ 
  template = 'cadence', 
  features = [], 
  headline 
}) => {
  const cardStyles = {
    cadence: {
      container: "py-16 md:py-24 bg-gray-900",
      content: "container mx-auto px-4",
      headline: "text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-12 md:mb-16",
      grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8",
      card: "bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 md:p-8 hover:bg-gray-800/70 transition-all duration-300 transform hover:scale-105",
      icon: "text-4xl md:text-5xl mb-4 text-blue-400",
      title: "text-xl md:text-2xl font-bold text-white mb-4",
      description: "text-gray-300 leading-relaxed"
    },
    viper: {
      container: "py-16 md:py-24 bg-white",
      content: "container mx-auto px-4",
      headline: "text-4xl md:text-5xl lg:text-6xl font-black text-center mb-12 md:mb-16 uppercase",
      grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8",
      card: "bg-black text-white rounded-2xl p-6 md:p-8 hover:bg-red-500 transition-all duration-300 transform hover:scale-105 hover:-rotate-1",
      icon: "text-4xl md:text-5xl mb-4",
      title: "text-xl md:text-2xl font-bold mb-4 uppercase",
      description: "text-gray-300 leading-relaxed"
    },
    sonic: {
      container: "py-16 md:py-24 bg-gray-50",
      content: "container mx-auto px-4",
      headline: "text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-12 md:mb-16",
      grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8",
      card: "bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105",
      icon: "text-4xl md:text-5xl mb-4 text-indigo-600",
      title: "text-xl md:text-2xl font-bold text-gray-900 mb-4",
      description: "text-gray-600 leading-relaxed"
    }
  };

  const style = cardStyles[template];

  return (
    <section className={style.container}>
      <div className={style.content}>
        <motion.h2 
          className={style.headline}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {headline}
        </motion.h2>
        
        <div className={style.grid}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={style.card}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className={style.icon}>{feature.icon}</div>
              <h3 className={style.title}>{feature.title}</h3>
              <p className={style.description}>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
```

## Mobile-Specific Optimizations

### Touch-Friendly Interactions
```css
/* Touch Target Sizes */
.touch-target {
  min-height: 44px;
  min-width: 44px;
  padding: 12px;
}

/* Mobile Button Styles */
@media (max-width: 767px) {
  .mobile-button {
    font-size: 1.125rem;
    padding: 1rem 2rem;
    border-radius: 12px;
    width: 100%;
    margin-bottom: 1rem;
  }
  
  .mobile-button:last-child {
    margin-bottom: 0;
  }
}

/* Mobile Form Styles */
@media (max-width: 767px) {
  .mobile-form input,
  .mobile-form textarea,
  .mobile-form select {
    font-size: 16px; /* Prevents zoom on iOS */
    padding: 1rem;
    border-radius: 8px;
  }
}
```

### Performance Optimizations
```css
/* Reduce Motion for Performance */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* GPU Acceleration for Smooth Animations */
.gpu-accelerated {
  transform: translateZ(0);
  will-change: transform;
  backface-visibility: hidden;
}
```

This responsive design system ensures that landing pages work perfectly across all device sizes while maintaining the aesthetic and functional integrity of each template style.