# Web Deployment Guide

## Übersicht

Dieses Dokument beschreibt den umfassenden Web-Deployment-Workflow für moderne Web-Projekte mit React, Tailwind CSS, und barrierefreien Standards.

## Workflow-Architektur

### 1. **Qualitätssicherung Pipeline**
- **Type Checking**: TypeScript-Validierung
- **Linting**: ESLint und Prettier Code-Qualität
- **Unit Testing**: Jest/Vitest Test-Suite
- **Build Verification**: Erfolgreiche Kompilierung

### 2. **Accessibility & Compliance Pipeline**
- **WCAG 2.1/2.2 Validation**: Automatische Accessibility-Tests
- **Lighthouse Accessibility**: Performance und Accessibility Scores
- **axe-core Testing**: Detaillierte Accessibility-Validierung
- **Compliance Reporting**: GDPR/DSGVO Compliance-Checks

### 3. **Performance & SEO Pipeline**
- **Core Web Vitals**: LCP, FID, CLS Messungen
- **Bundle Analysis**: JavaScript/CSS Optimierung
- **Image Optimization**: Automatische Bildkomprimierung
- **SEO Validation**: Meta-Tags und Struktur-Validierung

### 4. **Security Pipeline**
- **Dependency Scanning**: npm audit und OWASP Checks
- **Vulnerability Assessment**: Sicherheitslücken-Erkennung
- **Code Security**: Statische Code-Analyse
- **Third-party Libraries**: Sicherheitsvalidierung

## Deployment-Umgebungen

### **Staging Environment**
- **Trigger**: Push auf `develop` Branch
- **URL**: `https://project-staging.vercel.app`
- **Zweck**: Feature-Testing und QA-Validierung
- **Automatische Tests**: Vollständige Test-Suite

### **Production Environment**
- **Trigger**: Push auf `main` Branch
- **URL**: `https://project.vercel.app`
- **Zweck**: Live-Website für Endnutzer
- **Quality Gates**: Alle Tests müssen bestehen

## Projekt-Setup für Web-Deployment

### 1. **Repository-Konfiguration**

```bash
# Repository initialisieren
git init
git remote add origin https://github.com/username/project-name.git

# Branch-Struktur einrichten
git checkout -b develop
git checkout -b feature/homepage-design
```

### 2. **Package.json Konfiguration**

```json
{
  "name": "modern-web-project",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "type-check": "tsc --noEmit",
    "lint": "eslint src --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "lint:fix": "eslint src --ext ts,tsx --fix",
    "test:unit": "vitest",
    "test:accessibility": "jest --config=jest.accessibility.config.js",
    "lighthouse:accessibility": "lhci autorun --config=lighthouserc.accessibility.json",
    "lighthouse:performance": "lhci autorun --config=lighthouserc.performance.json",
    "wcag-check": "pa11y-ci --sitemap http://localhost:4173/sitemap.xml",
    "analyze:bundle": "npx vite-bundle-analyzer",
    "optimize:images:check": "imagemin-cli --check src/assets/images/**/*"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "@tailwindcss/forms": "^0.5.6",
    "@tailwindcss/typography": "^0.5.10",
    "framer-motion": "^10.16.4",
    "@radix-ui/react-dialog": "^1.0.5",
    "lucide-react": "^0.288.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.37",
    "@types/react-dom": "^18.2.15",
    "@typescript-eslint/eslint-plugin": "^6.10.0",
    "@typescript-eslint/parser": "^6.10.0",
    "@vitejs/plugin-react": "^4.1.0",
    "autoprefixer": "^10.4.16",
    "eslint": "^8.53.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.4",
    "eslint-plugin-jsx-a11y": "^6.8.0",
    "postcss": "^8.4.31",
    "tailwindcss": "^3.3.5",
    "typescript": "^5.2.2",
    "vite": "^4.5.0",
    "vitest": "^0.34.6",
    "@testing-library/react": "^13.4.0",
    "@testing-library/jest-dom": "^6.1.4",
    "@axe-core/react": "^4.8.2",
    "jest": "^29.7.0",
    "jest-environment-jsdom": "^29.7.0",
    "@lhci/cli": "^0.12.0",
    "pa11y-ci": "^3.0.1",
    "imagemin-cli": "^7.0.0"
  }
}
```

### 3. **Vercel-Konfiguration (vercel.json)**

```json
{
  "framework": "vite",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install",
  "devCommand": "npm run dev",
  "env": {
    "NODE_VERSION": "18"
  },
  "build": {
    "env": {
      "NODE_ENV": "production"
    }
  },
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        },
        {
          "key": "Permissions-Policy",
          "value": "camera=(), microphone=(), geolocation=()"
        }
      ]
    }
  ],
  "rewrites": [
    {
      "source": "/((?!api/.*).*)",
      "destination": "/index.html"
    }
  ]
}
```

### 4. **Lighthouse-Konfiguration (lighthouserc.json)**

```json
{
  "ci": {
    "collect": {
      "url": ["http://localhost:4173"],
      "startServerCommand": "npm run preview",
      "startServerReadyPattern": "Local:.*:4173"
    },
    "assert": {
      "assertions": {
        "categories:performance": ["warn", {"minScore": 0.9}],
        "categories:accessibility": ["error", {"minScore": 0.95}],
        "categories:best-practices": ["warn", {"minScore": 0.9}],
        "categories:seo": ["warn", {"minScore": 0.9}]
      }
    },
    "upload": {
      "target": "temporary-public-storage"
    }
  }
}
```

## Technologie-Stack Setup

### **React + Vite Projekt erstellen**

```bash
# Projekt erstellen
npm create vite@latest project-name -- --template react-ts
cd project-name

# Dependencies installieren
npm install

# Tailwind CSS setup
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# shadcn/ui setup
npx shadcn-ui@latest init
npx shadcn-ui@latest add button dialog form

# Framer Motion für Animationen
npm install framer-motion

# Accessibility Tools
npm install -D @axe-core/react @testing-library/jest-dom
npm install -D eslint-plugin-jsx-a11y

# Testing Setup
npm install -D vitest @testing-library/react
```

### **Tailwind CSS Konfiguration**

```javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["DM Sans", "Inter", "system-ui", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
}
```

## Deployment-Schritte

### **1. Lokale Entwicklung**

```bash
# Development server starten
npm run dev

# Tests ausführen
npm run test:unit
npm run test:accessibility

# Build testen
npm run build
npm run preview
```

### **2. Quality Gates vor Deployment**

```bash
# Code-Qualität prüfen
npm run type-check
npm run lint

# Performance testen
npm run lighthouse:performance

# Accessibility validieren
npm run lighthouse:accessibility
npm run wcag-check

# Bundle analysieren
npm run analyze:bundle
```

### **3. GitHub Secrets einrichten**

Erforderliche Secrets in GitHub Repository Settings:

```bash
VERCEL_TOKEN=your_vercel_token
VERCEL_ORG_ID=your_org_id
VERCEL_PROJECT_ID=your_project_id
PRODUCTION_URL=https://your-domain.com
```

### **4. Deployment durchführen**

```bash
# Feature entwickeln
git checkout -b feature/new-homepage
# ... Entwicklung ...
git add .
git commit -m "feat: new homepage design with accessibility improvements"
git push origin feature/new-homepage

# Pull Request erstellen -> Automatisches Staging Deployment

# Nach Review mergen -> Automatisches Production Deployment
git checkout main
git merge feature/new-homepage
git push origin main
```

## Monitoring und Wartung

### **Post-Deployment Checks**
- **Health Check**: Automatische API-Verfügbarkeitsprüfung
- **Lighthouse Audit**: Performance- und Accessibility-Monitoring
- **Error Tracking**: Fehlerüberwachung in Production
- **Analytics**: User-Experience Monitoring

### **Continuous Monitoring**
- **Weekly Accessibility Audits**: Automatische WCAG-Compliance-Checks
- **Performance Monitoring**: Core Web Vitals Tracking
- **Security Updates**: Automatische Dependency-Updates
- **SEO Monitoring**: Suchmaschinenoptimierung-Tracking

## Troubleshooting

### **Häufige Probleme**

1. **Build Failures**
   ```bash
   # TypeScript Errors beheben
   npm run type-check
   
   # Linting Errors beheben
   npm run lint:fix
   ```

2. **Accessibility Failures**
   ```bash
   # Detaillierte Accessibility-Tests
   npm run test:accessibility -- --verbose
   
   # Lighthouse Accessibility Report
   npm run lighthouse:accessibility
   ```

3. **Performance Issues**
   ```bash
   # Bundle Size analysieren
   npm run analyze:bundle
   
   # Image Optimization prüfen
   npm run optimize:images:check
   ```

### **Deployment-Rollback**

```bash
# Letztes funktionierende Release wiederherstellen
git checkout main
git revert HEAD
git push origin main
```

## Best Practices

### **Code-Qualität**
- Alle TypeScript Errors beheben vor Deployment
- ESLint und Prettier Regeln befolgen
- Accessibility Lint Rules aktivieren
- Unit Tests für kritische Komponenten

### **Performance**
- Lazy Loading für nicht-kritische Komponenten
- Bildoptimierung mit modernen Formaten (WebP, AVIF)
- Bundle Splitting für bessere Cache-Strategien
- Core Web Vitals unter 2.5s (LCP), 100ms (FID), 0.1 (CLS)

### **Accessibility**
- WCAG 2.1 AA Standards einhalten
- Keyboard Navigation testen
- Screen Reader Testing durchführen
- Color Contrast 4.5:1 minimum

### **Security**
- Dependencies regelmäßig aktualisieren
- Security Headers implementieren
- Input Validation und Sanitization
- HTTPS/SSL Zertifikate verwenden

Dieser Workflow gewährleistet professionelle, barrierefreie und performante Web-Deployments nach modernsten Standards.