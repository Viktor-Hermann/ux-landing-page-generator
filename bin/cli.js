#!/usr/bin/env node

const { Command } = require('commander');
const inquirer = require('inquirer');
const chalk = require('chalk');
const fs = require('fs-extra');
const path = require('path');
const ora = require('ora');

const program = new Command();

// ASCII Art Logo
const logo = `
${chalk.cyan('╔══════════════════════════════════════════════════════════════╗')}
${chalk.cyan('║')}  ${chalk.bold.yellow('Appiq Flutter Workflow')} ${chalk.gray('v2.1.3')}                      ${chalk.cyan('║')}
${chalk.cyan('║')}  ${chalk.gray('Automated Agent-Based Feature Development System')}        ${chalk.cyan('║')}
${chalk.cyan('╚══════════════════════════════════════════════════════════════╝')}

${chalk.gray('🚀 Professional Flutter development with AI-powered agents')}
${chalk.gray('🎯 Context-resilient development with state preservation')}
${chalk.gray('🤖 8 specialized agents for complete workflow automation')}
`;

// IDE Configuration
const IDE_CONFIGS = {
  'Claude Desktop': {
    folder: '.claude/agents',
    description: 'Claude Desktop (Anthropic) - Advanced AI coding assistant',
    icon: '🤖'
  },
  'Cursor': {
    folder: '.cursor/rules',
    description: 'Cursor - AI-first code editor',
    icon: '⚡'
  },
  'Windsurf': {
    folder: '.windsurf/rules',
    description: 'Windsurf - Collaborative coding with AI',
    icon: '🏄'
  },
  'Trae': {
    folder: '.trae/rules',
    description: 'Trae - AI-enhanced development environment',
    icon: '🔧'
  }
};

// Available Agents
const AGENTS = [
  'feature-manager',
  'po-agent',
  'ui-agent',
  'cubit-agent', 
  'domain-agent',
  'data-agent',
  'security-agent',
  'test-agent',
  'integration-validator'
];

program
  .name('appiq-workflow')
  .description('Appiq Flutter Workflow - Professional agent-based development system')
  .version('2.1.3');

program
  .command('install')
  .description('Install Appiq Flutter Workflow agents to your development environment')
  .action(async () => {
    console.log(logo);
    
    try {
      // Check if we're in a Flutter project
      const currentDir = process.cwd();
      const pubspecExists = await fs.pathExists(path.join(currentDir, 'pubspec.yaml'));
      
      if (!pubspecExists) {
        console.log(chalk.yellow('⚠️  Warning: pubspec.yaml not found. Make sure you\'re in a Flutter project directory.'));
        const proceed = await inquirer.prompt([{
          type: 'confirm',
          name: 'continue',
          message: 'Continue installation anyway?',
          default: false
        }]);
        
        if (!proceed.continue) {
          console.log(chalk.gray('Installation cancelled.'));
          return;
        }
      }

      // IDE Selection
      console.log(chalk.bold.cyan('\\n🎯 Select your development environment:'));
      
      const ideChoices = Object.entries(IDE_CONFIGS).map(([name, config]) => ({
        name: `${config.icon} ${name} - ${config.description}`,
        value: name,
        short: name
      }));

      const { selectedIDEs } = await inquirer.prompt([{
        type: 'checkbox',
        name: 'selectedIDEs',
        message: 'Which IDE(s) would you like to install agents for?',
        choices: ideChoices,
        validate: (input) => {
          if (input.length === 0) {
            return 'Please select at least one IDE.';
          }
          return true;
        }
      }]);

      // Installation process
      const spinner = ora('Installing AppIQ Flutter Workflow agents...').start();
      
      for (const ide of selectedIDEs) {
        const config = IDE_CONFIGS[ide];
        const targetDir = path.join(currentDir, config.folder);
        
        spinner.text = `Installing agents for ${ide}...`;
        
        // Create target directory
        await fs.ensureDir(targetDir);
        
        // Copy agents - use different source for Claude Desktop
        let sourceDir;
        if (ide === 'Claude Desktop') {
          sourceDir = path.join(__dirname, '../agents/claude');
        } else {
          sourceDir = path.join(__dirname, '../agents');
        }
        
        for (const agent of AGENTS) {
          const sourceFile = path.join(sourceDir, `${agent}.md`);
          const targetFile = path.join(targetDir, `${agent}.md`);
          
          if (await fs.pathExists(sourceFile)) {
            await fs.copy(sourceFile, targetFile);
          }
        }
        
        // Create docs structure
        const docsDir = path.join(currentDir, 'docs');
        const featuresDir = path.join(docsDir, 'features');
        await fs.ensureDir(featuresDir);
        
        // Copy additional requirement templates
        const templatesDir = path.join(__dirname, '../templates');
        const targetTemplatesDir = path.join(currentDir, 'docs', 'additional_requirements');
        await fs.ensureDir(targetTemplatesDir);
        
        const additionalTemplates = [
          'additional_ui_req.md',
          'additional_cubit_req.md', 
          'additional_domain_req.md',
          'additional_data_req.md'
        ];
        
        for (const template of additionalTemplates) {
          const sourceTemplate = path.join(templatesDir, template);
          const targetTemplate = path.join(targetTemplatesDir, template);
          
          if (await fs.pathExists(sourceTemplate)) {
            await fs.copy(sourceTemplate, targetTemplate);
          }
        }

        // Copy feature template to docs/features/
        const sourceTemplateDir = path.join(__dirname, '..', 'templates');
        const featureTemplatePath = path.join(sourceTemplateDir, 'feature-template.md');
        
        if (await fs.pathExists(featureTemplatePath)) {
          await fs.copy(
            featureTemplatePath, 
            path.join(featuresDir, 'feature-template.md')
          );
        }

        // Create feature organization subdirectories
        const featureSubDirs = ['active', 'completed', 'archived'];
        for (const subDir of featureSubDirs) {
          await fs.ensureDir(path.join(featuresDir, subDir));
        }

        // Copy additional feature templates
        const featureTemplates = [
          'feature_state_template.json',
          'feature_tasks_template.md',
          'feature_history_template.md'
        ];
        
        for (const template of featureTemplates) {
          const sourceTemplate = path.join(templatesDir, template);
          const targetTemplate = path.join(currentDir, 'docs', 'templates', template);
          
          if (await fs.pathExists(sourceTemplate)) {
            await fs.ensureDir(path.join(currentDir, 'docs', 'templates'));
            await fs.copy(sourceTemplate, targetTemplate);
          }
        }
      }
      
      spinner.succeed(chalk.bold.green('✅ Appiq Flutter Workflow installed successfully!'));
      
      // Success message
      console.log(chalk.bold.cyan('\\n🎉 Installation Complete!'));
      console.log(chalk.gray('\\nWhat was installed:'));
      
      selectedIDEs.forEach(ide => {
        const config = IDE_CONFIGS[ide];
        console.log(chalk.gray(`  ${config.icon} ${ide}: ${config.folder}/`));
      });
      
      console.log(chalk.gray('\\n📁 Created directories:'));
      console.log(chalk.gray('  📄 docs/features/ - Feature documentation and status tracking'));
      console.log(chalk.gray('    📁 active/, completed/, archived/ - Feature organization'));
      console.log(chalk.gray('  📋 docs/additional_requirements/ - Advanced requirement templates'));
      console.log(chalk.gray('  📁 docs/templates/ - Feature management templates'));
      console.log(chalk.gray('  📄 docs/features/feature-template.md - Template for new features'));
      
      console.log(chalk.bold.yellow('\\n🚀 Next Steps:'));
      console.log(chalk.gray('1. Use "appiq-workflow create-feature <name>" to create organized features'));
      console.log(chalk.gray('2. Use @agent-name for direct agent access (NEW!)'));
      console.log(chalk.gray('3. Start full workflow with @feature-manager'));
      console.log(chalk.gray('4. Features auto-organize in subdirectories with state tracking'));
      
      console.log(chalk.bold.cyan('\\n🤖 Available Agents:'));
      console.log(chalk.gray('  🎯 Feature Manager - Master workflow controller'));
      console.log(chalk.gray('  📋 PO Agent - Product Owner and task planning'));
      console.log(chalk.gray('  🎨 UI Agent - Flutter UI/UX specialist'));
      console.log(chalk.gray('  🧠 Cubit Agent - State management expert'));
      console.log(chalk.gray('  ⚙️  Domain Agent - Clean Architecture domain layer'));
      console.log(chalk.gray('  🗄️  Data Agent - Backend integration specialist'));
      console.log(chalk.gray('  🔐 Security Agent - Security and compliance expert'));
      console.log(chalk.gray('  🧪 Test Agent - Testing pyramid implementation'));
      console.log(chalk.gray('  ✅ Integration Validator - Provider setup and integration specialist'));
      
    } catch (error) {
      console.error(chalk.red('❌ Installation failed:'), error.message);
      process.exit(1);
    }
  });

program
  .command('status')
  .description('Check installation status and available features')
  .action(async () => {
    console.log(logo);
    
    const currentDir = process.cwd();
    const spinner = ora('Checking installation status...').start();
    
    try {
      // Check for Flutter project
      const pubspecExists = await fs.pathExists(path.join(currentDir, 'pubspec.yaml'));
      
      // Check for IDE installations
      const installedIDEs = [];
      for (const [name, config] of Object.entries(IDE_CONFIGS)) {
        const ideDir = path.join(currentDir, config.folder);
        if (await fs.pathExists(ideDir)) {
          const agentCount = (await fs.readdir(ideDir))
            .filter(file => file.endsWith('.md')).length;
          installedIDEs.push({ name, config, agentCount });
        }
      }
      
      // Check for features
      const featuresDir = path.join(currentDir, 'docs', 'features');
      const features = [];
      if (await fs.pathExists(featuresDir)) {
        const featureFiles = (await fs.readdir(featuresDir))
          .filter(file => file.endsWith('.md'));
        features.push(...featureFiles);
      }
      
      spinner.succeed('Status check complete!');
      
      console.log(chalk.bold.cyan('\\n📊 Installation Status:'));
      console.log(chalk.gray(`Flutter Project: ${pubspecExists ? '✅ Detected' : '❌ Not found'}`));
      
      if (installedIDEs.length > 0) {
        console.log(chalk.bold.green('\\n🤖 Installed IDEs:'));
        installedIDEs.forEach(({ name, config, agentCount }) => {
          console.log(chalk.gray(`  ${config.icon} ${name}: ${agentCount} agents in ${config.folder}/`));
        });
      } else {
        console.log(chalk.yellow('\\n⚠️  No IDEs configured. Run "npx appiq-workflow install" first.'));
      }
      
      if (features.length > 0) {
        console.log(chalk.bold.cyan('\\n📋 Available Features:'));
        features.forEach(feature => {
          console.log(chalk.gray(`  📄 ${feature}`));
        });
      } else {
        console.log(chalk.gray('\\n📄 No features found in docs/features/'));
      }
      
    } catch (error) {
      spinner.fail('Status check failed');
      console.error(chalk.red('Error:'), error.message);
    }
  });

program
  .command('create-feature <name>')
  .description('Create a new feature template')
  .action(async (name) => {
    console.log(chalk.bold.cyan(`\\n🎯 Creating feature: ${name}`));
    
    const currentDir = process.cwd();
    const featuresDir = path.join(currentDir, 'docs', 'features');
    
    try {
      await fs.ensureDir(featuresDir);
      
      const fileName = name.toLowerCase().replace(/[^a-z0-9]/gi, '-');
      const featureDir = path.join(featuresDir, fileName);
      
      // Create feature subdirectory
      await fs.ensureDir(featureDir);
      
      const featureContent = `---
name: ${name}
ui: open
cubit: open
domain: open
data: open
security: open
test: open
integration: open
status: open
created: ${new Date().toISOString().split('T')[0]}
updated: ${new Date().toISOString().split('T')[0]}
completion: 0
current_agent: none
current_phase: initialization
---

# ${name} - Flutter Feature Development

## 🎯 Feature Description
Describe your ${name} feature here.

## 👤 User Story
As a [user type], I want [functionality] so that [benefit].

## 📋 Requirements
- [ ] Requirement 1
- [ ] Requirement 2
- [ ] Requirement 3

## ✅ Acceptance Criteria
- [ ] Criteria 1
- [ ] Criteria 2
- [ ] Criteria 3

## 🏗️ Technical Specifications
- Add any technical considerations
- Dependencies
- Performance requirements
- Security considerations

## 🎨 UI/UX Requirements
- UI/UX requirements
- Screen designs
- User flow

## 📊 Data Requirements
- Data models
- API requirements
- Storage needs

## 🔒 Security Requirements
- Security considerations
- Privacy requirements
- Compliance needs

## 🧪 Testing Requirements
- Test cases
- Performance criteria
- Quality requirements

## 📈 Agent Progress Overview
*Auto-updated by agents*

## 🚦 Quality Gates Status
*Auto-updated by system*

## 🎯 Definition of Done
*Progress automatically tracked*

## Additional Requirements (Optional)
Use these templates after basic implementation for advanced features:
- docs/additional_requirements/additional_ui_req.md - Role-based access control
- docs/additional_requirements/additional_cubit_req.md - Advanced state management
- docs/additional_requirements/additional_domain_req.md - Complex business logic
- docs/additional_requirements/additional_data_req.md - Supabase MCP integration

---

**🤖 Managed by FeatureMaster** | **📄 Auto-updated by Appiq Workflow System**  
**📞 Commands**: Use \`*help\` with FeatureMaster for available commands  
**💾 State File**: \`docs/features/${fileName}/${fileName}_state.json\`  
**📋 Tasks**: \`docs/features/${fileName}/${fileName}_tasks.md\`  
**📈 History**: \`docs/features/${fileName}/${fileName}_history.md\`
`;
      
      const filePath = path.join(featureDir, `${fileName}.md`);
      
      if (await fs.pathExists(filePath)) {
        console.log(chalk.yellow(`⚠️  Feature "${fileName}" already exists.`));
        return;
      }
      
      await fs.writeFile(filePath, featureContent);
      
      console.log(chalk.green(`✅ Feature created: docs/features/${fileName}/${fileName}.md`));
      console.log(chalk.gray('\\nFeature structure:'));
      console.log(chalk.gray(`  📁 docs/features/${fileName}/`));
      console.log(chalk.gray(`  📄   ${fileName}.md - Main feature documentation`));
      console.log(chalk.gray(`  💾   ${fileName}_state.json - Auto-generated state file`));
      console.log(chalk.gray(`  📋   ${fileName}_tasks.md - Auto-generated task breakdown`));
      console.log(chalk.gray(`  📈   ${fileName}_history.md - Auto-generated development history`));
      console.log(chalk.gray('\\nNext steps:'));
      console.log(chalk.gray('1. Edit the feature file with your requirements'));
      console.log(chalk.gray('2. Start with @feature-manager or individual agents'));
      console.log(chalk.gray('3. All tracking files will be auto-generated'));
      
    } catch (error) {
      console.error(chalk.red('❌ Failed to create feature:'), error.message);
    }
  });

// Help command override
program.on('--help', () => {
  console.log(logo);
  console.log(chalk.bold.cyan('Examples:'));
  console.log(chalk.gray('  $ npx appiq-workflow install     # Install agents to your IDE'));
  console.log(chalk.gray('  $ npx appiq-workflow status      # Check installation status'));
  console.log(chalk.gray('  $ npx appiq-workflow create-feature auth # Create auth feature'));
  console.log('');
});

// Parse command line arguments
program.parse();