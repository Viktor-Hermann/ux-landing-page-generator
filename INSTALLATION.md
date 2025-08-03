# 📦 Installation Guide - UX Landing Page Generator

## 🚀 Quick Installation

### Method 1: GitHub Release (Recommended)

```bash
# Download the latest release
curl -L https://github.com/Viktor-Hermann/ux-landing-page-generator/archive/v1.0.0.tar.gz | tar -xz

# Navigate to the directory
cd ux-landing-page-generator-1.0.0

# Install dependencies
npm install

# Make CLI executable
chmod +x bin/cli.js

# Link globally (optional)
npm link
```

### Method 2: Git Clone

```bash
# Clone the repository
git clone https://github.com/Viktor-Hermann/ux-landing-page-generator.git

# Navigate to the directory
cd ux-landing-page-generator

# Install dependencies
npm install

# Make CLI executable
chmod +x bin/cli.js

# Link globally (optional)
npm link
```

### Method 3: NPM Package (Future)

```bash
# Will be available once published to npm
npm install -g @appiq-solutions/ux-landing-page-generator
```

## ⚙️ Prerequisites

- **Node.js**: Version 14.0.0 or higher
- **npm**: Version 6.0.0 or higher
- **Git**: For cloning and version control

### Check Prerequisites

```bash
# Check Node.js version
node --version

# Check npm version
npm --version

# Check Git version
git --version
```

## 🔧 Setup

### 1. Verify Installation

```bash
# If installed globally
ux-landing-generator --version

# If running locally
node bin/cli.js --version
```

### 2. Test CLI Functionality

```bash
# Show help
ux-landing-generator --help

# List available templates
ux-landing-generator list-templates

# Generate a test landing page
ux-landing-generator create test-page --template=cadence
```

## 🎨 Usage Examples

### Basic Usage

```bash
# Create landing page with interactive prompts
ux-landing-generator create

# Create with specific template
ux-landing-generator create my-landing --template=cadence

# Create for specific industry
ux-landing-generator create saas-landing --template=landio --industry=saas
```

### Advanced Usage

```bash
# AI-powered content generation
ux-landing-generator create --ai-mode --industry=fitness --template=refit

# Custom configuration
ux-landing-generator create --config=./my-config.json

# Generate multiple variants for A/B testing
ux-landing-generator create --variants=3 --template=viper
```

## 📁 Project Structure After Installation

```
ux-landing-page-generator/
├── bin/
│   └── cli.js                    # Main CLI entry point
├── agents/
│   ├── fix-designer-agent.md           # UX Landing Page Agent
│   ├── landing-page-templates.md       # Template configurations
│   ├── landing-page-animations.md      # Animation system
│   ├── template-engine.md              # Template selection engine
│   ├── landing-page-config.md          # Configuration system
│   ├── responsive-design-system.md     # Responsive framework
│   └── content-generation-system.md    # AI content generation
├── docs/
│   └── web-deployment-guide.md         # Deployment documentation
├── package.json                        # Project configuration
├── README.md                           # Main documentation
└── INSTALLATION.md                     # This file
```

## 🎯 Template Overview

After installation, you have access to 6 professional templates:

### 🌟 Cadence Style
- **Command**: `--template=cadence`
- **Best for**: SaaS, Tech, AI, Fintech
- **Features**: Dark theme, neon accents, glassmorphism

### ⚡ Viper Style
- **Command**: `--template=viper`
- **Best for**: Agency, Creative, Marketing, Sports
- **Features**: Bold typography, high contrast, vibrant colors

### 🎨 Portfolite Style
- **Command**: `--template=portfolite`
- **Best for**: Portfolio, Creative, Design, Photography
- **Features**: Artistic layouts, grid masonry, image galleries

### 🏢 Sonic Style
- **Command**: `--template=sonic`
- **Best for**: Corporate, Consulting, Professional Services
- **Features**: Clean design, balanced typography, professional

### 💪 Refit Style
- **Command**: `--template=refit`
- **Best for**: Fitness, Health, Wellness, Sports
- **Features**: Energetic colors, action-oriented, motivational

### 🚀 Landio Style
- **Command**: `--template=landio`
- **Best for**: SaaS, B2B, Software, Platforms
- **Features**: Conversion-optimized, feature-rich layouts

## 🤖 AI Content Generation

The system includes intelligent content generation:

```bash
# Generate content for SaaS company
ux-landing-generator create --ai-mode \
  --industry=saas \
  --product="FlowManager" \
  --audience="small businesses"

# Generate content for fitness brand
ux-landing-generator create --ai-mode \
  --industry=fitness \
  --product="FitTracker Pro" \
  --audience="fitness enthusiasts"
```

## 🎬 Animation System

Each template includes advanced animations:

- **Scroll-reveal animations**: Elements animate as you scroll
- **Hover effects**: Interactive button and card animations
- **Parallax backgrounds**: Depth and movement effects
- **Loading animations**: Smooth page transitions
- **Micro-interactions**: Button presses and form interactions

## 📱 Responsive Design

All generated landing pages are:

- **Mobile-first**: Optimized for mobile devices
- **Touch-friendly**: 44px minimum touch targets
- **Cross-browser**: Works on Chrome, Firefox, Safari, Edge
- **Accessible**: WCAG 2.1 AA compliant
- **Performance**: Core Web Vitals optimized

## 🚀 Deployment Options

After generating your landing page:

### Vercel Deployment
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
cd your-landing-page
vercel
```

### Netlify Deployment
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
cd your-landing-page
netlify deploy
```

### Manual Deployment
```bash
# Build the project
npm run build

# Upload the dist/ folder to your hosting provider
```

## 🐛 Troubleshooting

### Common Issues

**Issue**: Command not found
```bash
# Solution: Ensure the binary is executable
chmod +x bin/cli.js

# Or run directly
node bin/cli.js --help
```

**Issue**: Permission denied
```bash
# Solution: Run with appropriate permissions
sudo npm link
```

**Issue**: Node version incompatible
```bash
# Solution: Update Node.js
# Visit https://nodejs.org and install version 14.0.0 or higher
```

### Getting Help

1. Check the [README](README.md) for comprehensive documentation
2. Visit the [GitHub Issues](https://github.com/Viktor-Hermann/ux-landing-page-generator/issues) page
3. Review the [agent documentation](agents/) for detailed guides

## 📊 Performance Optimization

Generated landing pages include:

- **Code splitting**: Lazy loading of components
- **Image optimization**: WebP format with fallbacks
- **CSS optimization**: Critical CSS inlining
- **Bundle analysis**: Webpack bundle analyzer
- **Lighthouse scoring**: 90+ performance scores

## 🔒 Security Features

- **Dependency scanning**: Regular security updates
- **Content Security Policy**: XSS protection
- **HTTPS enforcement**: Secure connections only
- **Input validation**: Form security measures

## 🌍 Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | 88+ | ✅ Full |
| Firefox | 85+ | ✅ Full |
| Safari | 14+ | ✅ Full |
| Edge | 88+ | ✅ Full |
| Mobile Safari | 14+ | ✅ Full |
| Chrome Mobile | 88+ | ✅ Full |

## 📈 Analytics Integration

Ready-to-integrate with:

- Google Analytics 4
- Facebook Pixel
- Mixpanel
- Hotjar
- Intercom
- HubSpot

## 🎉 You're Ready!

Your UX Landing Page Generator is now installed and ready to create stunning, conversion-optimized landing pages.

**Next Steps:**
1. Generate your first landing page
2. Customize the content for your brand
3. Deploy to your hosting platform
4. Monitor performance and conversions

---

**Need help?** Check out our [documentation](README.md) or [create an issue](https://github.com/Viktor-Hermann/ux-landing-page-generator/issues).

**Made with ❤️ by Appiq Solutions**