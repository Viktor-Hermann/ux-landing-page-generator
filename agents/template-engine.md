# Landing Page Template Engine

## Template Configuration System

### Template Registry
```javascript
// templateRegistry.js
export const TEMPLATE_REGISTRY = {
  cadence: {
    name: "Cadence",
    description: "Dark SaaS theme with neon accents and modern minimalism",
    industry: ["SaaS", "Tech", "AI", "Fintech"],
    colorScheme: "dark",
    personality: "professional, innovative, cutting-edge",
    features: ["dark-theme", "neon-accents", "glassmorphism", "particles"]
  },
  viper: {
    name: "Viper",
    description: "Bold and energetic with high contrast and vibrant colors",
    industry: ["Agency", "Creative", "Marketing", "Sports"],
    colorScheme: "high-contrast",
    personality: "bold, energetic, confident, disruptive",
    features: ["bold-typography", "asymmetrical", "vibrant-colors", "dynamic"]
  },
  portfolite: {
    name: "Portfolite",
    description: "Creative portfolio focus with artistic layouts and showcases",
    industry: ["Portfolio", "Creative", "Design", "Photography"],
    colorScheme: "artistic",
    personality: "creative, artistic, sophisticated, elegant",
    features: ["grid-masonry", "image-galleries", "artistic-layouts", "showcase"]
  },
  sonic: {
    name: "Sonic",
    description: "Clean and professional with balanced typography",
    industry: ["Corporate", "Consulting", "Professional Services", "Education"],
    colorScheme: "light",
    personality: "professional, trustworthy, clean, reliable",
    features: ["clean-design", "balanced-typography", "professional", "minimal"]
  },
  refit: {
    name: "Refit",
    description: "Fitness and health industry optimized with energetic colors",
    industry: ["Fitness", "Health", "Wellness", "Sports"],
    colorScheme: "energetic",
    personality: "energetic, motivating, healthy, active",
    features: ["fitness-focused", "energetic-colors", "action-oriented", "motivational"]
  },
  landio: {
    name: "Landio",
    description: "SaaS-focused conversion-optimized with feature-rich layouts",
    industry: ["SaaS", "B2B", "Software", "Platforms"],
    colorScheme: "conversion",
    personality: "conversion-focused, feature-rich, business-oriented",
    features: ["conversion-optimized", "feature-rich", "saas-focused", "business"]
  }
};
```

### Template Component Generator
```javascript
// templateGenerator.js
export class TemplateGenerator {
  constructor(templateId, config = {}) {
    this.template = TEMPLATE_REGISTRY[templateId];
    this.config = {
      industry: config.industry || "SaaS",
      companyName: config.companyName || "Your Company",
      productName: config.productName || "Your Product",
      targetAudience: config.targetAudience || "businesses",
      valueProposition: config.valueProposition || "Transform your workflow",
      features: config.features || [],
      testimonials: config.testimonials || [],
      pricing: config.pricing || [],
      ...config
    };
  }

  generateLandingPage() {
    return {
      template: this.template.name,
      sections: this.generateSections(),
      styling: this.generateStyling(),
      content: this.generateContent(),
      animations: this.generateAnimations(),
      components: this.generateComponents()
    };
  }

  generateSections() {
    const sectionMap = {
      cadence: ["hero", "features", "benefits", "testimonials", "pricing", "cta", "footer"],
      viper: ["hero", "features", "process", "portfolio", "testimonials", "pricing", "footer"],
      portfolite: ["hero", "portfolio", "about", "services", "testimonials", "contact", "footer"],
      sonic: ["hero", "features", "about", "services", "testimonials", "faq", "footer"],
      refit: ["hero", "programs", "trainers", "testimonials", "pricing", "contact", "footer"],
      landio: ["hero", "features", "benefits", "case-studies", "pricing", "faq", "footer"]
    };

    return sectionMap[this.template.name.toLowerCase()] || sectionMap.cadence;
  }

  generateStyling() {
    const styleMap = {
      cadence: {
        primaryColor: "#3064FF",
        backgroundColor: "#000000",
        textColor: "#ffffff",
        accentColor: "#8b5cf6",
        fontFamily: "Inter, DM Sans",
        borderRadius: "12px",
        shadows: "heavy",
        gradients: "blue-purple"
      },
      viper: {
        primaryColor: "#ff462e",
        backgroundColor: "#ffffff",
        textColor: "#000000",
        accentColor: "#f59e0b",
        fontFamily: "Inter, Montserrat",
        borderRadius: "16px",
        shadows: "bold",
        gradients: "red-orange"
      },
      portfolite: {
        primaryColor: "#6366f1",
        backgroundColor: "#f8fafc",
        textColor: "#1e293b",
        accentColor: "#ec4899",
        fontFamily: "Inter, Playfair Display",
        borderRadius: "8px",
        shadows: "artistic",
        gradients: "purple-pink"
      },
      sonic: {
        primaryColor: "#6366f1",
        backgroundColor: "#f8fafc",
        textColor: "#1e293b",
        accentColor: "#10b981",
        fontFamily: "Inter",
        borderRadius: "8px",
        shadows: "minimal",
        gradients: "blue-green"
      },
      refit: {
        primaryColor: "#059669",
        backgroundColor: "#ffffff",
        textColor: "#1f2937",
        accentColor: "#f59e0b",
        fontFamily: "Inter, Open Sans",
        borderRadius: "12px",
        shadows: "energetic",
        gradients: "green-orange"
      },
      landio: {
        primaryColor: "#3b82f6",
        backgroundColor: "#ffffff",
        textColor: "#1f2937",
        accentColor: "#8b5cf6",
        fontFamily: "Inter",
        borderRadius: "8px",
        shadows: "professional",
        gradients: "blue-purple"
      }
    };

    return styleMap[this.template.name.toLowerCase()];
  }

  generateContent() {
    return {
      hero: this.generateHeroContent(),
      features: this.generateFeaturesContent(),
      benefits: this.generateBenefitsContent(),
      testimonials: this.generateTestimonialsContent(),
      pricing: this.generatePricingContent(),
      faq: this.generateFAQContent()
    };
  }

  generateHeroContent() {
    const heroTemplates = {
      cadence: {
        headline: `The Future of ${this.config.industry} is Here`,
        subheadline: `${this.config.valueProposition} with our revolutionary ${this.config.productName}`,
        cta: "Start Your Journey",
        secondaryCta: "Watch Demo"
      },
      viper: {
        headline: `DOMINATE ${this.config.industry.toUpperCase()} WITH ${this.config.productName.toUpperCase()}`,
        subheadline: `Unleash your potential and ${this.config.valueProposition.toLowerCase()}`,
        cta: "GET STARTED NOW",
        secondaryCta: "SEE FEATURES"
      },
      portfolite: {
        headline: `Creative ${this.config.industry} Solutions`,
        subheadline: `Crafting exceptional experiences that ${this.config.valueProposition.toLowerCase()}`,
        cta: "View Portfolio",
        secondaryCta: "Contact Me"
      },
      sonic: {
        headline: `Professional ${this.config.productName} for ${this.config.targetAudience}`,
        subheadline: `The smart way to ${this.config.valueProposition.toLowerCase()}`,
        cta: "Try It Free",
        secondaryCta: "Learn More"
      },
      refit: {
        headline: `Transform Your ${this.config.industry} Journey`,
        subheadline: `${this.config.valueProposition} with our proven programs and expert guidance`,
        cta: "Start Training",
        secondaryCta: "View Programs"
      },
      landio: {
        headline: `${this.config.productName} - ${this.config.valueProposition}`,
        subheadline: `The complete ${this.config.industry.toLowerCase()} solution for ${this.config.targetAudience}`,
        cta: "Get Started Free",
        secondaryCta: "See Features"
      }
    };

    return heroTemplates[this.template.name.toLowerCase()];
  }

  generateFeaturesContent() {
    const baseFeatures = this.config.features.length > 0 ? this.config.features : [
      { title: "Advanced Analytics", description: "Get deep insights into your performance" },
      { title: "Seamless Integration", description: "Connect with your existing tools" },
      { title: "24/7 Support", description: "Round-the-clock expert assistance" }
    ];

    const templateModifiers = {
      cadence: (feature) => ({
        ...feature,
        icon: "🚀",
        style: "neon-glow"
      }),
      viper: (feature) => ({
        ...feature,
        title: feature.title.toUpperCase(),
        icon: "⚡",
        style: "bold-impact"
      }),
      portfolite: (feature) => ({
        ...feature,
        icon: "✨",
        style: "artistic-elegant"
      }),
      sonic: (feature) => ({
        ...feature,
        icon: "📊",
        style: "clean-professional"
      }),
      refit: (feature) => ({
        ...feature,
        icon: "💪",
        style: "energetic-motivational"
      }),
      landio: (feature) => ({
        ...feature,
        icon: "🔧",
        style: "business-focused"
      })
    };

    const modifier = templateModifiers[this.template.name.toLowerCase()];
    return baseFeatures.map(modifier);
  }

  generateComponents() {
    const componentMap = {
      cadence: {
        hero: "CadenceHero",
        features: "GlassmorphismCards",
        navigation: "NeonNavigation",
        footer: "DarkFooter"
      },
      viper: {
        hero: "BoldHero",
        features: "ContrastCards",
        navigation: "BoldNavigation",
        footer: "ImpactFooter"
      },
      portfolite: {
        hero: "ArtisticHero",
        features: "PortfolioGrid",
        navigation: "CreativeNavigation",
        footer: "ArtisticFooter"
      },
      sonic: {
        hero: "CleanHero",
        features: "ProfessionalCards",
        navigation: "MinimalNavigation",
        footer: "CleanFooter"
      },
      refit: {
        hero: "FitnessHero",
        features: "EnergeticCards",
        navigation: "FitnessNavigation",
        footer: "MotivationalFooter"
      },
      landio: {
        hero: "SaaSHero",
        features: "BusinessCards",
        navigation: "SaaSNavigation",
        footer: "BusinessFooter"
      }
    };

    return componentMap[this.template.name.toLowerCase()];
  }

  generateAnimations() {
    const animationMap = {
      cadence: {
        hero: "neon-glow-in",
        features: "glass-reveal",
        scroll: "particle-parallax"
      },
      viper: {
        hero: "explosive-entry",
        features: "bold-bounce",
        scroll: "dynamic-shift"
      },
      portfolite: {
        hero: "artistic-fade",
        features: "creative-stagger",
        scroll: "smooth-reveal"
      },
      sonic: {
        hero: "clean-slide",
        features: "professional-fade",
        scroll: "minimal-reveal"
      },
      refit: {
        hero: "energetic-bounce",
        features: "motivational-lift",
        scroll: "active-parallax"
      },
      landio: {
        hero: "business-slide",
        features: "saas-reveal",
        scroll: "conversion-focus"
      }
    };

    return animationMap[this.template.name.toLowerCase()];
  }
}
```

### Template Selection AI
```javascript
// templateSelector.js
export class TemplateSelector {
  static analyzeRequirements(requirements) {
    const {
      industry,
      targetAudience,
      businessType,
      personalityTraits,
      conversionGoals,
      brandStyle
    } = requirements;

    const scores = {};
    
    // Score each template based on requirements
    Object.keys(TEMPLATE_REGISTRY).forEach(templateId => {
      const template = TEMPLATE_REGISTRY[templateId];
      let score = 0;

      // Industry match
      if (template.industry.some(i => 
        industry.toLowerCase().includes(i.toLowerCase()) ||
        i.toLowerCase().includes(industry.toLowerCase())
      )) {
        score += 30;
      }

      // Personality traits match
      const personalityMatches = personalityTraits.filter(trait =>
        template.personality.includes(trait.toLowerCase())
      );
      score += personalityMatches.length * 10;

      // Business type compatibility
      if (businessType === 'B2B' && ['cadence', 'sonic', 'landio'].includes(templateId)) {
        score += 20;
      }
      if (businessType === 'B2C' && ['viper', 'refit', 'portfolite'].includes(templateId)) {
        score += 20;
      }

      // Brand style compatibility
      if (brandStyle === 'modern' && ['cadence', 'sonic'].includes(templateId)) score += 15;
      if (brandStyle === 'bold' && ['viper', 'refit'].includes(templateId)) score += 15;
      if (brandStyle === 'creative' && ['portfolite', 'viper'].includes(templateId)) score += 15;
      if (brandStyle === 'professional' && ['sonic', 'landio'].includes(templateId)) score += 15;

      scores[templateId] = score;
    });

    // Sort by score and return top 3 recommendations
    const recommendations = Object.entries(scores)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 3)
      .map(([templateId, score]) => ({
        templateId,
        template: TEMPLATE_REGISTRY[templateId],
        score,
        confidence: Math.min(score / 50, 1) // Normalize to 0-1
      }));

    return recommendations;
  }

  static generateRecommendationReport(requirements, recommendations) {
    return {
      analysis: {
        requirements,
        topRecommendation: recommendations[0],
        alternatives: recommendations.slice(1)
      },
      rationale: recommendations.map(rec => ({
        template: rec.template.name,
        reasons: this.generateReasons(requirements, rec.templateId),
        bestFor: rec.template.industry,
        personality: rec.template.personality
      }))
    };
  }

  static generateReasons(requirements, templateId) {
    const template = TEMPLATE_REGISTRY[templateId];
    const reasons = [];

    if (template.industry.includes(requirements.industry)) {
      reasons.push(`Specifically designed for ${requirements.industry} industry`);
    }

    if (template.personality.split(', ').some(trait => 
      requirements.personalityTraits.includes(trait)
    )) {
      reasons.push(`Matches your brand personality traits`);
    }

    // Add template-specific reasons
    const specificReasons = {
      cadence: ["Perfect for tech companies", "Dark theme reduces eye strain", "Neon accents create modern appeal"],
      viper: ["Bold design stands out", "High contrast improves readability", "Energetic style motivates action"],
      portfolite: ["Showcases creative work beautifully", "Artistic layouts enhance visual appeal", "Perfect for creative professionals"],
      sonic: ["Clean design builds trust", "Professional appearance", "Excellent for corporate communications"],
      refit: ["Motivational design for fitness", "Energetic colors inspire action", "Health-focused messaging"],
      landio: ["Optimized for SaaS conversions", "Feature-rich layout", "Business-focused design"]
    };

    reasons.push(...(specificReasons[templateId] || []));

    return reasons;
  }
}
```

### Template Implementation Example
```javascript
// Example usage of the template system
const requirements = {
  industry: "SaaS",
  targetAudience: "small businesses",
  businessType: "B2B",
  personalityTraits: ["professional", "innovative", "trustworthy"],
  conversionGoals: ["trial-signup", "demo-requests"],
  brandStyle: "modern"
};

// Get template recommendations
const recommendations = TemplateSelector.analyzeRequirements(requirements);
const report = TemplateSelector.generateRecommendationReport(requirements, recommendations);

// Generate landing page with top recommendation
const generator = new TemplateGenerator(
  recommendations[0].templateId,
  {
    companyName: "TechFlow",
    productName: "FlowManager",
    industry: "SaaS",
    valueProposition: "Streamline your workflow",
    targetAudience: "small businesses"
  }
);

const landingPage = generator.generateLandingPage();

console.log("Recommended template:", recommendations[0].template.name);
console.log("Landing page structure:", landingPage);
```

## Template Customization Engine

### Dynamic Style Generator
```javascript
// styleCustomizer.js
export class StyleCustomizer {
  static generateCustomCSS(template, customizations = {}) {
    const baseStyles = this.getBaseStyles(template);
    const customStyles = this.applyCustomizations(baseStyles, customizations);
    
    return this.compileCSSVariables(customStyles);
  }

  static getBaseStyles(template) {
    // Return base CSS variables for the template
    return TEMPLATE_STYLES[template];
  }

  static applyCustomizations(baseStyles, customizations) {
    return {
      ...baseStyles,
      ...customizations
    };
  }

  static compileCSSVariables(styles) {
    return Object.entries(styles)
      .map(([key, value]) => `--${key}: ${value};`)
      .join('\n');
  }
}
```

This template engine provides a complete system for generating landing pages based on the 6 reference styles, with AI-powered template selection, content generation, and customization capabilities.