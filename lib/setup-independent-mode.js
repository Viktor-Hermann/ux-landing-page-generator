#!/usr/bin/env node

/**
 * AppIQ Flutter Workflow - Independent Mode Setup
 * Automatically adds Independent Mode capabilities to all agents
 */

const fs = require('fs').promises;
const path = require('path');

class IndependentModeSetup {
  constructor() {
    this.agentConfigs = {
      'ui-agent': {
        name: 'Maya',
        specialty: 'Flutter UI/UX Design Specialist',
        skills: 'platform-adaptive design, Material Design 3, responsive layouts, and creating beautiful native-feeling interfaces',
        domain: 'ui',
        deliverable: 'component',
        specificFeatures: 'platform-adaptive elements, responsive design, animations and interactions',
        qualityChecks: 'responsiveness across screen sizes, accessibility compliance, performance metrics',
        complianceRequirements: 'WCAG 2.1 AA standards, Material Design 3 compliance',
        deliverables: [
          'Responsive layouts for all screen sizes',
          'Platform-adaptive components (iOS/Android)',
          'Accessibility compliance (WCAG 2.1 AA)',
          'Performance optimized animations'
        ],
        escalationTriggers: [
          'Changes require backend/API modifications',
          'State management changes are needed',
          'Security implications are identified',
          'Business logic modifications required'
        ],
        relatedAgents: ['cubit-agent', 'domain-agent', 'data-agent', 'security-agent', 'test-agent'],
        collaborationScenarios: {
          'cubit-agent': 'If state management updates needed',
          'domain-agent': 'If business logic impacts UI',
          'data-agent': 'If new data requirements identified',
          'security-agent': 'If security-sensitive UI elements',
          'test-agent': 'For comprehensive UI testing'
        }
      },
      'cubit-agent': {
        name: 'Sage',
        specialty: 'State Management Expert',
        skills: 'Cubit pattern implementation, state architecture, event handling, and performance optimization',
        domain: 'state',
        deliverable: 'cubit',
        specificFeatures: 'state management, event handling, business logic integration, error handling',
        qualityChecks: 'state isolation, performance optimization, memory leak prevention',
        complianceRequirements: 'Clean Architecture compliance, flutter_bloc patterns',
        deliverables: [
          'Complete Cubit implementations for feature states',
          'State management architecture',
          'Performance optimized state updates',
          'Comprehensive error handling'
        ],
        escalationTriggers: [
          'Domain layer changes required',
          'New business rules needed',
          'API integration changes required',
          'Complex state coordination needed'
        ],
        relatedAgents: ['ui-agent', 'domain-agent', 'data-agent', 'test-agent'],
        collaborationScenarios: {
          'ui-agent': 'For UI state integration and event handling',
          'domain-agent': 'For business logic and use case integration',
          'data-agent': 'For data layer state management',
          'test-agent': 'For state management testing'
        }
      },
      'domain-agent': {
        name: 'Atlas',
        specialty: 'Business Logic Architect',
        skills: 'Clean Architecture, business entities, use cases, and domain-driven design',
        domain: 'domain',
        deliverable: 'entity',
        specificFeatures: 'business entities, use cases, repository interfaces, domain services',
        qualityChecks: 'Clean Architecture compliance, business rule validation, domain isolation',
        complianceRequirements: 'Framework independence, single responsibility principle',
        deliverables: [
          'Complete domain entities with business rules',
          'Use case implementations for feature scenarios',
          'Repository interfaces and contracts',
          'Domain service implementations'
        ],
        escalationTriggers: [
          'Data layer architecture changes needed',
          'External service integrations required',
          'Security requirements impact business logic',
          'Complex business workflows needed'
        ],
        relatedAgents: ['cubit-agent', 'data-agent', 'security-agent', 'test-agent'],
        collaborationScenarios: {
          'cubit-agent': 'For state management and business logic integration',
          'data-agent': 'For repository implementation and data contracts',
          'security-agent': 'For business rule security validation',
          'test-agent': 'For business logic testing'
        }
      },
      'data-agent': {
        name: 'Nova',
        specialty: 'Data Layer Specialist',
        skills: 'Repository pattern, API integration, caching strategies, and offline functionality',
        domain: 'data',
        deliverable: 'repository',
        specificFeatures: 'API integration, local storage, caching, data serialization, offline support',
        qualityChecks: 'repository pattern compliance, API error handling, caching effectiveness',
        complianceRequirements: 'Data security measures, offline-first architecture',
        deliverables: [
          'Complete repository implementations',
          'API integration with error handling',
          'Local storage and caching implementation',
          'Offline functionality validation'
        ],
        escalationTriggers: [
          'New API endpoints required',
          'Backend architecture changes needed',
          'Security requirements for data handling',
          'Complex data synchronization needed'
        ],
        relatedAgents: ['domain-agent', 'security-agent', 'test-agent'],
        collaborationScenarios: {
          'domain-agent': 'For repository interface implementation',
          'security-agent': 'For data encryption and security measures',
          'test-agent': 'For data layer testing and validation'
        }
      },
      'security-agent': {
        name: 'Guardian',
        specialty: 'Security & Compliance Expert',
        skills: 'COPPA compliance, encryption, authentication, and security auditing',
        domain: 'security',
        deliverable: 'security-implementation',
        specificFeatures: 'authentication systems, encryption, COPPA compliance, security auditing',
        qualityChecks: 'vulnerability assessment, compliance validation, encryption verification',
        complianceRequirements: 'COPPA compliance, data protection regulations, security standards',
        deliverables: [
          'Complete security implementation',
          'COPPA compliance documentation',
          'Security audit reports',
          'Vulnerability assessment results'
        ],
        escalationTriggers: [
          'Legal compliance requirements identified',
          'Backend security changes needed',
          'Complex authentication flows required',
          'Regulatory compliance issues found'
        ],
        relatedAgents: ['data-agent', 'domain-agent', 'test-agent'],
        collaborationScenarios: {
          'data-agent': 'For data encryption and secure storage',
          'domain-agent': 'For business rule security validation',
          'test-agent': 'For security testing and vulnerability assessment'
        }
      },
      'test-agent': {
        name: 'Trinity',
        specialty: 'Quality Assurance Specialist',
        skills: 'testing pyramid implementation, coverage analysis, performance testing, and quality validation',
        domain: 'test',
        deliverable: 'test-suite',
        specificFeatures: 'unit tests, widget tests, integration tests, performance testing, quality metrics',
        qualityChecks: 'test coverage validation, performance benchmarking, quality gate compliance',
        complianceRequirements: 'Testing pyramid (70/20/10), 90%+ coverage, performance standards',
        deliverables: [
          'Complete test suite with 90%+ coverage',
          'Performance benchmark validation',
          'Quality assurance documentation',
          'CI/CD integration setup'
        ],
        escalationTriggers: [
          'Complex integration testing required',
          'Performance bottlenecks identified',
          'Quality standards not achievable independently',
          'Full system testing needed'
        ],
        relatedAgents: ['ui-agent', 'cubit-agent', 'domain-agent', 'data-agent', 'security-agent'],
        collaborationScenarios: {
          'ui-agent': 'For widget and UI testing',
          'cubit-agent': 'For state management testing',
          'domain-agent': 'For business logic testing',
          'data-agent': 'For data layer testing',
          'security-agent': 'For security testing'
        }
      }
    };
  }

  async setupIndependentMode() {
    console.log('🚀 Setting up Independent Mode for all agents...\n');

    try {
      // Ensure directories exist
      await this.ensureDirectories();

      // Ensure feature template exists
      await this.ensureFeatureTemplate();

      // Process each agent
      for (const [agentId, config] of Object.entries(this.agentConfigs)) {
        console.log(`🎯 Updating ${agentId}...`);
        await this.updateAgent(agentId, config);
      }

      // Create coordination docs
      await this.createCoordinationDocs();

      console.log('\n✅ Independent Mode setup completed successfully!');
      console.log('\n📋 Summary:');
      console.log(`- Updated ${Object.keys(this.agentConfigs).length} agents with Independent Mode`);
      console.log('- Created Independent Agent Tracker system');
      console.log('- Added coordination documentation');
      console.log('- Set up lightweight tracking and history');

      console.log('\n🎯 Usage:');
      console.log('- Call any agent directly: "@ui-agent help me improve the login screen"');
      console.log('- Agent will offer: standalone work, feature updates, or full workflow');
      console.log('- Full tracking and history maintained automatically');
      console.log('- Seamless escalation to full workflow when needed');

    } catch (error) {
      console.error('❌ Setup failed:', error.message);
      throw error;
    }
  }

  async updateAgent(agentId, config) {
    const agentPath = path.join('agents', 'claude', `${agentId}.md`);
    
    try {
      // Read existing agent
      let agentContent = await fs.readFile(agentPath, 'utf8');
      
      // Check if already has Independent Mode
      if (agentContent.includes('## Independent Agent Commands')) {
        console.log(`  ⚠️  ${agentId} already has Independent Mode - skipping`);
        return;
      }

      // Generate independent mode content
      const independentModeContent = this.generateIndependentModeContent(config);

      // Find insertion point (after Context-Aware Operation Mode)
      const insertionPoint = agentContent.indexOf('## Your Mission') || 
                           agentContent.indexOf('## Mandatory Codebase Analysis Phase') ||
                           agentContent.indexOf('## Available Commands') ||
                           agentContent.length;

      if (insertionPoint > 0) {
        agentContent = agentContent.slice(0, insertionPoint) + 
                      independentModeContent + '\n\n' + 
                      agentContent.slice(insertionPoint);
      } else {
        agentContent += '\n\n' + independentModeContent;
      }

      // Update context-aware mode if exists
      agentContent = this.updateContextAwareMode(agentContent, config);

      // Write updated agent
      await fs.writeFile(agentPath, agentContent);
      console.log(`  ✅ Updated ${agentId} with Independent Mode capabilities`);

    } catch (error) {
      console.error(`  ❌ Failed to update ${agentId}:`, error.message);
    }
  }

  generateIndependentModeContent(config) {
    return `## Independent Agent Commands

When working in **Independent Mode**, you have these specialized commands:

### **Feature Detection & Integration:**
- \`*find-related-feature {description}\` - Search existing features that might be related to the ${config.domain} task
- \`*update-feature-${config.domain} {featureName}\` - Update ${config.domain} for existing feature with progress tracking
- \`*create-standalone-${config.deliverable} {name}\` - Create ${config.deliverable} outside feature workflow
- \`*suggest-feature-creation {description}\` - Recommend creating new feature and coordinate with FeatureMaster

### **Lightweight Tracking:**
- \`*start-${config.domain}-session {taskDescription}\` - Initialize independent ${config.domain} session with tracking
- \`*log-${config.domain}-progress {activity}\` - Log current ${config.domain} work for history and collaboration
- \`*update-${config.domain}-status {status}\` - Update current status (analyzing/implementing/testing/completed)
- \`*create-${config.domain}-summary\` - Generate summary of ${config.domain} work done and next steps

### **Quality & Integration:**
- \`*validate-${config.domain}-quality\` - Run ${config.domain} quality checks (${config.qualityChecks})
- \`*check-${config.domain}-consistency\` - Validate against existing patterns and standards
- \`*prepare-handoff {toAgent?}\` - Prepare work for handoff to another agent if needed

### **Collaboration Commands:**
- \`*request-feedback\` - Request user feedback on current ${config.domain} implementation
- \`*coordinate-with-agents {agentList}\` - Coordinate with other agents if broader changes needed
- \`*escalate-to-workflow {reason}\` - Escalate to full feature workflow if complexity requires it

## Independent Mode Implementation Protocol

When operating in **Independent Mode**, follow this workflow:

### **Phase 1: Initialization & Detection**
1. **Welcome & Capability Overview**: 
   - Greet user and explain independent vs workflow modes
   - Show available options for ${config.domain} work

2. **Context Detection**:
   \`\`\`javascript
   const tracker = new IndependentAgentTracker();
   const session = await tracker.startIndependentSession(
     '${config.domain}-agent', 
     userTaskDescription, 
     relatedFeature
   );
   \`\`\`

3. **Feature Discovery**:
   - Execute \`*find-related-feature {userDescription}\`
   - Present options: Update existing feature, create standalone, or start new feature
   - Let user choose approach

### **Phase 2: Requirements & Planning**
1. **Detailed Requirements Gathering**:
   - Ask specific questions about ${config.domain} needs
   - Understand ${config.domain} constraints and preferences
   - Identify dependencies and integrations
   - Assess ${config.complianceRequirements}

2. **Codebase Analysis** (Mandatory):
   - Analyze existing ${config.domain} patterns and implementations
   - Check for reusable components and patterns
   - Validate consistency with existing architecture
   - Identify potential conflicts or dependencies

3. **Planning & Estimation**:
   \`\`\`javascript
   await tracker.logActivity(sessionId, 'requirements_gathered', {
     description: 'Completed ${config.domain} requirements analysis',
     requirements: detailedRequirements,
     estimatedDuration: estimatedTime
   });
   \`\`\`

### **Phase 3: Implementation**
1. **Progressive Implementation**:
   - Start with core ${config.deliverable} structure
   - Add ${config.specificFeatures}
   - Implement quality measures and validations
   - Add documentation and usage examples

2. **Continuous Tracking**:
   \`\`\`javascript
   // Update progress as you work
   await tracker.updateProgress(sessionId, progressPercent, 'implementing', currentActivity);
   await tracker.logActivity(sessionId, '${config.domain}_milestone', {
     description: 'Completed ${config.domain} implementation milestone',
     files: createdFiles,
     deliverables: completedDeliverables
   });
   \`\`\`

3. **Quality Validation**:
   - Execute \`*validate-${config.domain}-quality\` at regular intervals
   - Test ${config.qualityChecks}
   - Verify ${config.complianceRequirements}
   - Validate performance and integration

### **Phase 4: Integration & Completion**
1. **Integration Choice**:
   - If related to existing feature: Execute \`*update-feature-${config.domain} {featureName}\`
   - If standalone: Execute \`*create-standalone-${config.deliverable} {name}\`
   - If complex: Execute \`*escalate-to-workflow {reason}\`

2. **Documentation & Handoff**:
   \`\`\`javascript
   await tracker.logActivity(sessionId, 'documentation_created', {
     description: 'Created ${config.domain} documentation and usage examples',
     deliverables: deliverablesList
   });
   \`\`\`

3. **Session Completion**:
   \`\`\`javascript
   await tracker.completeSession(sessionId, \`
   Completed ${config.domain} implementation for: \${taskDescription}
   
   Deliverables:
   ${config.deliverables.map(d => `- ${d}`).join('\n   ')}
   
   Quality Validations:
   - ${config.qualityChecks}
   - ${config.complianceRequirements}
   
   Next steps: \${nextSteps}
   \`);
   \`\`\`

### **Continuous Quality Gates**
- **After Requirements**: Validate completeness and clarity
- **During Implementation**: Check ${config.domain} consistency and quality
- **Before Completion**: Run full ${config.domain} validation suite
- **Post-Implementation**: Verify integration and documentation

### **Escalation Triggers**
Automatically escalate to full workflow if:
${config.escalationTriggers.map(trigger => `- ${trigger}`).join('\n')}
- User requests full feature development
- Complexity exceeds independent scope

### **Collaboration Patterns**
${Object.entries(config.collaborationScenarios).map(([agent, scenario]) => 
  `- **With ${agent}**: ${scenario}`
).join('\n')}
- **With FeatureMaster**: For workflow coordination and escalation`;
  }

  updateContextAwareMode(content, config) {
    // Update existing context-aware mode to include Independent Mode
    const oldPattern = /\*\*MANUAL ACTIVATION\*\* \(User calls you directly\):\s*\n1\. Introduce yourself:[^\n]*\n/;
    const newIntro = `**INDEPENDENT MODE** (User calls you directly for specific tasks):
1. Introduce yourself: "🎯 Hi! I'm ${config.name}, your ${config.specialty}. I can work independently or as part of the full workflow. I specialize in ${config.skills}. How can I help you with ${config.domain} today?"
2. **Detect existing features**: Check \`docs/features/\` for related features to update
3. **Offer options**: 
   - "🆕 Create new standalone ${config.deliverable}"
   - "🔄 Improve existing feature ${config.domain} (I'll find and update the right feature)"
   - "🏗️ Start new feature (I'll coordinate with FeatureMaster)"
4. **Initialize tracking**: Set up lightweight progress tracking and history logging
5. **Work collaboratively**: Get user requirements and implement with full documentation

**WORKFLOW ACTIVATION** (Called by FeatureMaster or other agents):
1. Start directly with ${config.domain} requirements from the workflow
`;

    if (oldPattern.test(content)) {
      content = content.replace(oldPattern, newIntro);
    }

    return content;
  }

  async ensureDirectories() {
    const dirs = [
      'docs/independent-sessions',
      'config',
      'lib'
    ];

    for (const dir of dirs) {
      try {
        await fs.mkdir(dir, { recursive: true });
      } catch (error) {
        if (error.code !== 'EEXIST') throw error;
      }
    }
  }

  async ensureFeatureTemplate() {
    // Ensure feature template exists in docs/features/
    const featuresDir = 'docs/features';
    const templatePath = path.join(featuresDir, 'feature-template.md');
    
    try {
      await fs.access(templatePath);
      console.log('  ✅ feature-template.md already exists');
    } catch {
      // Copy from templates directory
      const sourceTemplate = path.join('templates', 'feature-template.md');
      try {
        await fs.copyFile(sourceTemplate, templatePath);
        console.log('  ✅ Created feature-template.md in docs/features/');
      } catch (error) {
        console.warn('  ⚠️  Could not copy feature template:', error.message);
      }
    }
  }

  async createCoordinationDocs() {
    const coordDoc = `# Independent Agent Mode - Usage Guide

## Quick Start

### Direct Agent Usage
1. **Call any agent directly**: \`@ui-agent\`, \`@cubit-agent\`, \`@domain-agent\`, etc.
2. **Agent will offer options**:
   - 🆕 Create standalone components
   - 🔄 Improve existing features
   - 🏗️ Start new feature workflow

### Example Workflows

#### UI Improvements
\`\`\`
@ui-agent "Make the login screen more modern and add dark mode support"

Agent will:
1. Check existing features for login-related features
2. Offer to update existing feature or create standalone improvements
3. Track all work with full history
4. Coordinate with other agents if needed (e.g., theme changes affecting other screens)
\`\`\`

#### State Management Updates
\`\`\`
@cubit-agent "Add loading states and better error handling to the user profile feature"

Agent will:
1. Find the user profile feature
2. Analyze existing state management
3. Implement improvements with full tracking
4. Update feature documentation and history
\`\`\`

## Benefits

### 🚀 **Speed & Efficiency**
- Direct agent access for specific tasks
- No need to go through full workflow for simple improvements
- Lightweight tracking without workflow overhead

### 📊 **Full Visibility**
- All work tracked in independent sessions
- Complete history and progress monitoring
- Integration with existing feature documentation

### 🔄 **Seamless Escalation**
- Automatic escalation to full workflow when needed
- Agent coordination for complex changes
- Smooth handoffs between independent and workflow modes

### 🎯 **Flexible Approaches**
- **Standalone work**: Quick improvements and new components
- **Feature updates**: Enhance existing features with tracking
- **Workflow coordination**: Seamless integration with full development process

## Session Tracking

All independent agent work is tracked in:
- \`docs/independent-sessions/{sessionId}.json\` - Session details and progress
- \`docs/independent-sessions/activity-log.json\` - Central activity log
- Related feature state updates when working on existing features

## Quality Assurance

Independent agents maintain the same quality standards:
- Comprehensive codebase analysis before implementation
- Continuous quality validation during work
- Integration with existing patterns and architecture
- Documentation and testing requirements

## Agent Capabilities

Each agent can work independently while maintaining full coordination:

- **UI Agent (Maya)**: Platform-adaptive design, responsive layouts, accessibility
- **Cubit Agent (Sage)**: State management, performance optimization, error handling  
- **Domain Agent (Atlas)**: Business logic, Clean Architecture, domain services
- **Data Agent (Nova)**: Repository implementation, API integration, caching
- **Security Agent (Guardian)**: COPPA compliance, encryption, security auditing
- **Test Agent (Trinity)**: Testing pyramid, coverage analysis, quality validation

## Best Practices

1. **Start with agent directly** for focused tasks
2. **Let agent analyze** existing codebase and related features
3. **Choose appropriate approach** based on agent recommendations
4. **Monitor progress** through automatic tracking
5. **Escalate when needed** for complex cross-domain changes

---

**Built with ❤️ by AppIQ Solutions - Independent Mode v2.0.0**
`;

    await fs.writeFile('docs/independent-agent-mode-guide.md', coordDoc);
    console.log('  ✅ Created Independent Mode documentation');
  }
}

// Run setup if called directly
if (require.main === module) {
  const setup = new IndependentModeSetup();
  setup.setupIndependentMode().catch(console.error);
}

module.exports = { IndependentModeSetup };