# 🔒 Private Installation Guide - Appiq Flutter Workflow v2.1.2

## 🎯 Overview

The Appiq Flutter Workflow is now available as a **private package** for controlled distribution and enhanced security.

## 📦 Installation Methods

### **Method 1: GitHub Packages (Recommended)**

#### 1. **Configure GitHub Packages Access**

Create or update your `~/.npmrc` file:

```bash
echo "@viktor-hermann:registry=https://npm.pkg.github.com" >> ~/.npmrc
echo "//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN" >> ~/.npmrc
```

**To get your GitHub token:**
1. Go to [GitHub Settings > Personal Access Tokens](https://github.com/settings/tokens)
2. Generate a new token with `read:packages` scope
3. Replace `YOUR_GITHUB_TOKEN` with your actual token

#### 2. **Install the Package**

```bash
# Global installation
npm install -g @viktor-hermann/appiq-flutter-workflow

# Or local installation
npm install @viktor-hermann/appiq-flutter-workflow
```

### **Method 2: Direct Git Installation**

```bash
# Install directly from GitHub repository
npm install -g https://github.com/Viktor-Hermann/appiq-flutter-workflow.git

# Or clone and link locally
git clone https://github.com/Viktor-Hermann/appiq-flutter-workflow.git
cd appiq-flutter-workflow
npm install
npm link
```

### **Method 3: Download and Install Locally**

1. **Download the release:**
   - Go to [Releases](https://github.com/Viktor-Hermann/appiq-flutter-workflow/releases)
   - Download `v2.1.2` source code

2. **Install locally:**
   ```bash
   cd path/to/downloaded/appiq-flutter-workflow
   npm install
   npm link
   ```

## 🚀 Usage After Installation

### **Verify Installation**

```bash
# Check if installed correctly
appiq-workflow --version
# Should output: 2.1.2

# Check available commands
appiq-workflow --help
```

### **Initialize in Your Flutter Project**

```bash
cd your-flutter-project
appiq-workflow install
```

### **Start Development**

#### **Independent Agent Mode (NEW!):**
```bash
# Direct agent usage for specific tasks
@ui-agent "Make the login screen more modern"
@cubit-agent "Add loading states to user profile"
@domain-agent "Add validation rules for registration"
```

#### **Full Workflow Mode:**
```bash
# Complete feature development
@feature-manager "Start development for user-authentication"
```

## 🧠 Context-Resilient Development

### **Key Benefits:**
- ✅ Use `/clear` anytime without losing progress
- ✅ Automatic state preservation every 5 minutes
- ✅ Perfect recovery from IDE crashes
- ✅ Context-independent operation

### **Quick Context Recovery:**
```bash
# After using /clear
@ui-agent "Continue work on user-authentication feature"

# Agent responds with full context:
# "🎨 Hi! I see you're working on user-authentication. 
# Status: 65% complete, UI-Phase active.
# Last activity: Login screen responsive design
# Next step: Dark mode implementation
# Shall I continue from there?"
```

## 🔧 Configuration

### **Environment Variables (Optional)**

```bash
export APPIQ_WORKFLOW_MODE=production
export APPIQ_TEST_COVERAGE_MIN=90
export APPIQ_COPPA_COMPLIANCE=true
export APPIQ_SECURITY_SCAN=true
```

### **IDE Support**

The package automatically configures agents for:
- 🤖 Claude Desktop
- ⚡ Cursor
- 🏄 Windsurf
- 🔧 Trae

## 🛠️ Troubleshooting

### **Common Issues:**

#### **❌ "Package not found"**
```bash
# Ensure GitHub Packages is configured
cat ~/.npmrc | grep npm.pkg.github.com

# Re-configure if needed
echo "@viktor-hermann:registry=https://npm.pkg.github.com" >> ~/.npmrc
```

#### **❌ "Authentication failed"**
```bash
# Check GitHub token permissions
# Token needs 'read:packages' scope

# Update token in .npmrc
echo "//npm.pkg.github.com/:_authToken=NEW_TOKEN" >> ~/.npmrc
```

#### **❌ "Command not found"**
```bash
# For local installation, use npx
npx @viktor-hermann/appiq-flutter-workflow install

# For global issues, reinstall
npm uninstall -g @viktor-hermann/appiq-flutter-workflow
npm install -g @viktor-hermann/appiq-flutter-workflow
```

## 📊 What You Get

### **🤖 9 Specialized Agents:**
- 🎯 Feature Manager - Master workflow controller
- 📋 PO Agent - Product Owner and task planning
- 🎨 UI Agent - Flutter UI/UX specialist
- 🧠 Cubit Agent - State management expert
- ⚙️ Domain Agent - Clean Architecture domain layer
- 🗄️ Data Agent - Backend integration specialist
- 🔐 Security Agent - Security and compliance expert
- 🧪 Test Agent - Testing pyramid implementation
- ✅ Integration Validator - Provider setup specialist

### **🚀 Advanced Features:**
- ✅ Context-resilient development
- ✅ Independent agent mode
- ✅ Intelligent parallel execution
- ✅ Automatic state preservation
- ✅ Quality gates and validation
- ✅ Complete crash recovery
- ✅ Enterprise-grade reliability

## 🔒 Security & Privacy

### **Private Package Benefits:**
- ✅ Controlled access and distribution
- ✅ Enhanced security for development workflows
- ✅ Quality assurance through limited release
- ✅ Professional support and maintenance
- ✅ Early access to new features

## 📞 Support

For issues or questions:
- 📧 Email: info@appiq-solutions.com
- 🐛 Issues: [GitHub Issues](https://github.com/Viktor-Hermann/appiq-flutter-workflow/issues)
- 💬 Private repository access for contributors

## 🚀 Quick Start Example

```bash
# 1. Install
npm install -g @viktor-hermann/appiq-flutter-workflow

# 2. Navigate to Flutter project
cd my-flutter-app

# 3. Initialize
appiq-workflow install

# 4. Create feature
appiq-workflow create-feature user-auth

# 5. Start development
@feature-manager "Start user-auth feature development"

# 6. Use context management freely
# Work normally, use /clear when needed, continue seamlessly
```

## 💫 Enterprise Benefits

- **30% faster development** with parallel execution
- **100% crash recovery** - never lose work again
- **Context-independent operation** - no context anxiety
- **Professional audit trail** - complete development history
- **Quality assurance** - automated validation gates

---

**🎯 Ready to revolutionize your Flutter development workflow!**

[![Private Release](https://img.shields.io/badge/Release-Private-red.svg?style=for-the-badge)](https://github.com/Viktor-Hermann/appiq-flutter-workflow/releases)
[![Built with ❤️](https://img.shields.io/badge/Built%20with-❤️-red.svg?style=for-the-badge)](https://appiq-solutions.com)