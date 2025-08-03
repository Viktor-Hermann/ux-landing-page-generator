# Landing Page Animation System

## Framer Motion Animation Library

### Core Animation Variants
```javascript
// Animation Variants Configuration
export const animationVariants = {
  // Hero Animations
  heroTitle: {
    cadence: {
      hidden: { opacity: 0, y: 50, scale: 0.9 },
      visible: { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: { duration: 0.8, ease: "easeOut" }
      }
    },
    viper: {
      hidden: { opacity: 0, scale: 0.8, rotateX: -15 },
      visible: {
        opacity: 1,
        scale: 1,
        rotateX: 0,
        transition: { duration: 0.6, ease: "backOut" }
      }
    },
    sonic: {
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
      }
    }
  },

  // Feature Card Animations
  featureCard: {
    cadence: {
      hidden: { opacity: 0, y: 40, scale: 0.95 },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" }
      },
      hover: {
        y: -10,
        scale: 1.02,
        boxShadow: "0 20px 40px rgba(48, 100, 255, 0.4)",
        transition: { duration: 0.3 }
      }
    },
    viper: {
      hidden: { opacity: 0, x: -30, rotateY: -10 },
      visible: {
        opacity: 1,
        x: 0,
        rotateY: 0,
        transition: { duration: 0.6, ease: "easeOut" }
      },
      hover: {
        scale: 1.05,
        backgroundColor: "#ff462e",
        transition: { duration: 0.3 }
      }
    },
    sonic: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" }
      },
      hover: {
        y: -5,
        boxShadow: "0 10px 25px rgba(99, 102, 241, 0.15)",
        transition: { duration: 0.2 }
      }
    }
  },

  // Button Animations
  ctaButton: {
    cadence: {
      initial: { scale: 1 },
      hover: { 
        scale: 1.05,
        boxShadow: "0 0 20px rgba(48, 100, 255, 0.6)",
        transition: { duration: 0.2 }
      },
      tap: { scale: 0.95 }
    },
    viper: {
      initial: { scale: 1, rotateZ: 0 },
      hover: { 
        scale: 1.1,
        rotateZ: 1,
        transition: { duration: 0.2, ease: "easeOut" }
      },
      tap: { scale: 0.9, rotateZ: -1 }
    },
    sonic: {
      initial: { scale: 1 },
      hover: { 
        scale: 1.02,
        transition: { duration: 0.2 }
      },
      tap: { scale: 0.98 }
    }
  },

  // Scroll Reveal Animations
  scrollReveal: {
    cadence: {
      hidden: { opacity: 0, y: 60, filter: "blur(4px)" },
      visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.8, ease: "easeOut" }
      }
    },
    viper: {
      hidden: { opacity: 0, x: -60, scale: 0.9 },
      visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: { duration: 0.7, ease: "backOut" }
      }
    },
    sonic: {
      hidden: { opacity: 0, y: 40 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
      }
    }
  }
};
```

### Scroll-Triggered Animation Hook
```javascript
// useScrollAnimation.js
import { useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";

export const useScrollAnimation = (threshold = 0.1, triggerOnce = true) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold, once: triggerOnce });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else if (!triggerOnce) {
      controls.start("hidden");
    }
  }, [isInView, controls, triggerOnce]);

  return { ref, controls, isInView };
};
```

### Stagger Animation Component
```javascript
// StaggerContainer.jsx
import { motion } from "framer-motion";

export const StaggerContainer = ({ 
  children, 
  staggerDelay = 0.1, 
  template = "cadence",
  className = "" 
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  );
};
```

### Parallax Background Component
```javascript
// ParallaxBackground.jsx
import { motion, useScroll, useTransform } from "framer-motion";

export const ParallaxBackground = ({ template = "cadence", children }) => {
  const { scrollYProgress } = useScroll();
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const particleY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  
  const templateStyles = {
    cadence: {
      background: "linear-gradient(135deg, #000000 0%, #1a1a2e 50%, #16213e 100%)",
      particles: true,
      overlay: "radial-gradient(circle at 50% 50%, rgba(48, 100, 255, 0.1) 0%, transparent 70%)"
    },
    viper: {
      background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #e2e8f0 100%)",
      particles: false,
      overlay: "linear-gradient(45deg, rgba(255, 70, 46, 0.05) 0%, transparent 50%)"
    },
    sonic: {
      background: "linear-gradient(135deg, #f8fafc 0%, #e0e7ff 50%, #c7d2fe 100%)",
      particles: false,
      overlay: "radial-gradient(circle at 30% 70%, rgba(99, 102, 241, 0.1) 0%, transparent 60%)"
    }
  };

  const style = templateStyles[template];

  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          background: style.background,
          y: backgroundY
        }}
      />
      
      {style.overlay && (
        <motion.div
          className="absolute inset-0 z-10"
          style={{
            background: style.overlay,
            y: useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
          }}
        />
      )}
      
      {style.particles && (
        <motion.div 
          className="absolute inset-0 z-20"
          style={{ y: particleY }}
        >
          <ParticleField />
        </motion.div>
      )}
      
      <div className="relative z-30">
        {children}
      </div>
    </div>
  );
};
```

### Particle System for Cadence Theme
```javascript
// ParticleField.jsx
import { motion } from "framer-motion";
import { useMemo } from "react";

export const ParticleField = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-blue-400 rounded-full opacity-20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [-20, -100],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};
```

### Text Animation Effects
```javascript
// AnimatedText.jsx
import { motion } from "framer-motion";

export const AnimatedText = ({ 
  text, 
  template = "cadence", 
  variant = "title",
  className = "" 
}) => {
  const words = text.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const wordVariants = {
    cadence: {
      hidden: { opacity: 0, y: 50, rotateX: -90 },
      visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: {
          duration: 0.6,
          ease: "easeOut",
        },
      },
    },
    viper: {
      hidden: { opacity: 0, scale: 0, rotateZ: -10 },
      visible: {
        opacity: 1,
        scale: 1,
        rotateZ: 0,
        transition: {
          duration: 0.5,
          ease: "backOut",
        },
      },
    },
    sonic: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.4,
          ease: "easeOut",
        },
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-2"
          variants={wordVariants[template]}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};
```

### Loading Animation Component
```javascript
// LoadingAnimation.jsx
import { motion } from "framer-motion";

export const LoadingAnimation = ({ template = "cadence" }) => {
  const loaderVariants = {
    cadence: {
      background: "linear-gradient(90deg, #3064FF 0%, #8b5cf6 100%)",
      animation: "pulse-glow"
    },
    viper: {
      background: "#ff462e",
      animation: "bounce-scale"
    },
    sonic: {
      background: "#6366f1",
      animation: "fade-slide"
    }
  };

  const pulseVariants = {
    hidden: { scale: 0.8, opacity: 0.5 },
    visible: {
      scale: 1.2,
      opacity: 1,
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <motion.div
        className="w-16 h-16 rounded-full"
        style={{ background: loaderVariants[template].background }}
        variants={pulseVariants}
        initial="hidden"
        animate="visible"
      />
    </div>
  );
};
```

### Page Transition Component
```javascript
// PageTransition.jsx
import { motion } from "framer-motion";

export const PageTransition = ({ children, template = "cadence" }) => {
  const transitionVariants = {
    cadence: {
      initial: { opacity: 0, scale: 0.95, filter: "blur(10px)" },
      animate: { 
        opacity: 1, 
        scale: 1, 
        filter: "blur(0px)",
        transition: { duration: 0.6, ease: "easeOut" }
      },
      exit: { 
        opacity: 0, 
        scale: 1.05, 
        filter: "blur(10px)",
        transition: { duration: 0.4 }
      }
    },
    viper: {
      initial: { opacity: 0, x: -100, rotateY: -10 },
      animate: { 
        opacity: 1, 
        x: 0, 
        rotateY: 0,
        transition: { duration: 0.7, ease: "backOut" }
      },
      exit: { 
        opacity: 0, 
        x: 100, 
        rotateY: 10,
        transition: { duration: 0.5 }
      }
    },
    sonic: {
      initial: { opacity: 0, y: 20 },
      animate: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
      },
      exit: { 
        opacity: 0, 
        y: -20,
        transition: { duration: 0.3 }
      }
    }
  };

  return (
    <motion.div
      variants={transitionVariants[template]}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};
```

## Usage Examples

### Hero Section with Full Animation
```javascript
import { AnimatedText, ParallaxBackground } from './animations';

const HeroSection = ({ template = "cadence" }) => {
  const { ref, controls } = useScrollAnimation();

  return (
    <ParallaxBackground template={template}>
      <motion.section 
        ref={ref}
        className="min-h-screen flex items-center justify-center text-center px-6"
        initial="hidden"
        animate={controls}
      >
        <div className="max-w-4xl">
          <AnimatedText
            text="Revolutionary AI Solutions"
            template={template}
            variant="hero"
            className="text-6xl font-bold mb-6"
          />
          <motion.p
            className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto"
            variants={animationVariants.scrollReveal[template]}
          >
            Transform your business with cutting-edge artificial intelligence
          </motion.p>
          <motion.button
            className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold"
            variants={animationVariants.ctaButton[template].initial}
            whileHover={animationVariants.ctaButton[template].hover}
            whileTap={animationVariants.ctaButton[template].tap}
          >
            Get Started Today
          </motion.button>
        </div>
      </motion.section>
    </ParallaxBackground>
  );
};
```