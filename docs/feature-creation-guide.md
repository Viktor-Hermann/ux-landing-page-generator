# 📋 Feature Creation Guide

## 🎯 How to Create New Features

### **Method 1: Using Template (Recommended)**

1. **Copy the template:**
   ```bash
   mkdir docs/features/my-new-feature
   cp docs/features/feature-template.md docs/features/my-new-feature/my-new-feature.md
   ```

2. **Edit your feature:**
   ```markdown
   ---
   name: my-new-feature
   ui: open
   cubit: open
   domain: open
   data: open
   security: open
   test: open
   integration: open
   status: open
   created: 2025-08-03
   updated: 2025-08-03
   completion: 0%
   current_agent: none
   current_phase: initialization
   ---

   # My New Feature - Flutter Feature Development

   ## 🎯 Feature Description
   Describe what this feature does and why it's needed...

   ## 👤 User Story
   As a user, I want to... so that I can...

   ## 📋 Requirements
   - [ ] Requirement 1
   - [ ] Requirement 2
   ```

3. **Start development:**
   ```bash
   # Option A: Independent Agent
   @ui-agent "Work on my-new-feature"
   
   # Option B: Full Workflow
   @feature-manager "Start development for my-new-feature"
   ```

### **Method 2: Agent-Assisted Creation**

```bash
# Let agent help you create the feature
@feature-manager "Create a new user authentication feature"
```

The FeatureMaster will:
1. Create the feature file from template
2. Guide you through requirements
3. Auto-generate all tracking files
4. Start the workflow

## 🤖 What Gets Auto-Generated

When you start feature development, the system automatically creates:

### **📊 Task Management:**
- `docs/features/{feature-name}/{feature-name}_tasks.md` - Detailed task breakdown
- `docs/features/{feature-name}/{feature-name}_history.md` - Complete development history

### **💾 State Management:**
- `docs/features/{feature-name}/{feature-name}_state.json` - Crash-safe state tracking
- Automatic backups every 5 minutes
- Recovery checkpoints at major milestones

### **📈 Progress Tracking:**
- Real-time agent status updates
- Quality gate progress
- Parallel execution coordination
- Performance metrics

## 🔍 Feature Detection Rules

The system automatically excludes these files from feature detection:

### **❌ Ignored Files:**
- `feature-template.md` - Template file (not a real feature)
- `*_state.json` - State management files
- `*_history.md` - History files
- `*_tasks.md` - Task files
- `active/`, `completed/`, `archived/` - Organization directories

### **✅ Detected Features:**
- `docs/features/user-authentication/user-authentication.md` ✅
- `docs/features/shopping-cart/shopping-cart.md` ✅ 
- `docs/features/payment-processing/payment-processing.md` ✅
- Any feature directory with main `.md` file

## 📋 Feature File Structure

### **Required Sections:**
```markdown
---
name: feature-name        # Must match filename
status: open             # open, in-progress, completed
created: YYYY-MM-DD      # Creation date
---

# Feature Name

## 🎯 Feature Description
## 👤 User Story  
## 📋 Requirements
## ✅ Acceptance Criteria
## 🏗️ Technical Specifications
```

### **Auto-Updated Sections:**
```markdown
## 📈 Agent Progress Overview
# Automatically updated by agents

## 🚦 Quality Gates Status  
# Automatically updated by system

## 🎯 Definition of Done
# Progress automatically tracked
```

## 🔄 Development Workflows

### **🎯 Independent Agent Workflow:**
```bash
# Direct agent usage
@ui-agent "Improve the login screen in user-authentication feature"

# Agent will:
1. Find user-authentication.md automatically
2. Offer to update that feature
3. Track all work in independent session
4. Update feature progress
5. Maintain complete history
```

### **🏗️ Full Workflow Process:**
```bash
# Complete feature development
@feature-manager "Start user-authentication feature"

# FeatureMaster coordinates:
1. PO Agent → Requirements analysis
2. UI Agent || Domain Agent → Parallel implementation  
3. Cubit Agent → State management integration
4. Data Agent → Data layer implementation
5. Security Agent || Test Agent → Parallel validation
6. Integration Validator → Final system integration
```

## 🛡️ Quality Assurance

### **✅ Automatic Validations:**
- Feature file completeness check
- Requirements clarity validation
- Technical feasibility assessment
- Clean Architecture compliance
- Performance requirements verification

### **📊 Progress Tracking:**
- Real-time completion percentages
- Agent status monitoring
- Quality gate progress
- Blocker identification and resolution

## 🚨 Common Issues & Solutions

### **❌ "Feature not found"**
```bash
# Check if file exists
ls docs/features/

# Ensure proper naming
# ✅ user-authentication.md  
# ❌ User Authentication.md (spaces not allowed)
# ❌ userAuthentication.md (camelCase not recommended)
```

### **❌ "Template being detected as feature"**
This is fixed - `feature-template.md` is automatically ignored by the system.

### **❌ "Missing progress tracking"**
All tracking files are auto-generated when you start development. No manual creation needed.

## 📚 Best Practices

### **🎯 Feature Naming:**
- Use kebab-case: `user-authentication`, `shopping-cart`
- Be descriptive but concise
- Match folder structure if applicable

### **📝 Documentation:**
- Fill out all required sections
- Use clear, actionable requirements
- Include acceptance criteria
- Define technical constraints

### **🔄 Development:**
- Start with Independent Agents for small changes
- Use Full Workflow for complete features
- Let the system handle tracking and coordination
- Trust the automatic quality gates

---

**🤖 Auto-generated tracking means you focus on development, not documentation!** 🚀