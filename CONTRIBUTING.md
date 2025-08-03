# Contributing to AppIQ Flutter Workflow

Thank you for your interest in contributing to AppIQ Flutter Workflow! We welcome contributions from the community and are excited to collaborate with you.

## 💖 Support the Project

Before contributing code, consider supporting the project:

[![Donate with PayPal](https://img.shields.io/badge/Donate-PayPal-blue.svg?style=for-the-badge&logo=paypal)](https://paypal.me/vhermann)

Your support helps maintain and improve this open-source project!

## 🚀 Getting Started

### Prerequisites

- Node.js 14.0.0 or higher
- npm or yarn package manager
- Git for version control
- Flutter SDK (for testing workflow integration)

### Setting Up Development Environment

1. **Fork the Repository**
   ```bash
   # Fork on GitHub, then clone your fork
   git clone https://github.com/YOUR-USERNAME/flutter-workflow.git
   cd flutter-workflow
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Test the CLI**
   ```bash
   # Make CLI executable
   chmod +x bin/cli.js
   
   # Test help command
   node bin/cli.js --help
   
   # Test create feature
   node bin/cli.js create-feature test-feature
   ```

## 📋 How to Contribute

### 🐛 Bug Reports

If you find a bug, please create an issue with:

- **Clear description** of the problem
- **Steps to reproduce** the issue
- **Expected vs actual behavior**
- **Environment details** (OS, Node version, Flutter version)
- **Screenshots or logs** if applicable

### ✨ Feature Requests

For new features:

- **Check existing issues** to avoid duplicates
- **Describe the use case** and benefits
- **Provide examples** of how it would work
- **Consider implementation complexity**

### 🔧 Code Contributions

#### Types of Contributions We Welcome

1. **Agent Improvements**
   - Enhanced agent capabilities
   - Better error handling
   - Performance optimizations
   - New MCP integrations

2. **CLI Enhancements**
   - New commands and options
   - Better user experience
   - Cross-platform compatibility
   - Installation improvements

3. **Documentation**
   - Code documentation
   - Usage examples
   - Tutorial content
   - Translation improvements

4. **Testing**
   - Unit tests for CLI functionality
   - Integration tests for agent workflows
   - Performance testing
   - Cross-platform testing

5. **Templates and Examples**
   - New feature templates
   - Example Flutter projects
   - Best practice guides
   - Architecture examples

#### Development Workflow

1. **Create a Branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

2. **Make Your Changes**
   - Follow existing code style and patterns
   - Add appropriate tests
   - Update documentation as needed
   - Test your changes thoroughly

3. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "feat: add new agent capability for X
   
   - Detailed description of changes
   - Why this change is needed
   - Any breaking changes noted
   
   🚀 Generated with AppIQ Flutter Workflow
   
   Co-Authored-By: Your Name <your.email@example.com>"
   ```

4. **Push and Create PR**
   ```bash
   git push origin feature/your-feature-name
   ```
   
   Then create a Pull Request on GitHub with:
   - Clear title and description
   - Reference to related issues
   - Screenshots for UI changes
   - Testing instructions

## 📝 Code Style Guidelines

### JavaScript/Node.js Code

- **Use ES6+ features** where appropriate
- **Consistent indentation** (2 spaces)
- **Meaningful variable names** and comments
- **Error handling** for all async operations
- **JSDoc comments** for public functions

### Agent Documentation

- **YAML frontmatter** for agent metadata
- **Clear persona descriptions** and capabilities
- **Comprehensive command lists** with examples
- **Integration guidelines** with other agents
- **Quality standards** and validation rules

### Markdown Documentation

- **Clear headings** and structure
- **Code examples** with syntax highlighting
- **Badges and visual elements** for clarity
- **Consistent formatting** throughout

## 🧪 Testing Guidelines

### Manual Testing

Before submitting a PR:

1. **Test CLI functionality**
   ```bash
   # Test all CLI commands
   node bin/cli.js --help
   node bin/cli.js install
   node bin/cli.js status
   node bin/cli.js create-feature test
   ```

2. **Test agent installation**
   - Test on different operating systems
   - Verify agent files are created correctly
   - Test IDE integration compatibility

3. **Test error handling**
   - Invalid commands and parameters
   - Missing dependencies
   - File system permissions

### Integration Testing

- **Flutter project integration**
- **Agent workflow execution**
- **Feature documentation generation**
- **Cross-platform compatibility**

## 🏗️ Architecture Guidelines

### Agent Design Principles

1. **Single Responsibility** - Each agent has a clear, focused purpose
2. **Clean Interfaces** - Well-defined inputs and outputs
3. **Error Resilience** - Graceful handling of failures
4. **Documentation First** - Self-documenting capabilities
5. **Quality Gates** - Built-in validation and testing

### CLI Design Principles

1. **User-Friendly** - Intuitive commands and helpful messages
2. **Cross-Platform** - Works on Windows, macOS, and Linux
3. **Extensible** - Easy to add new commands and features
4. **Robust** - Handles edge cases and errors gracefully

## 🔄 Release Process

### Version Management

We follow [Semantic Versioning](https://semver.org/):

- **PATCH** (1.0.1) - Bug fixes and small improvements
- **MINOR** (1.1.0) - New features, backwards compatible
- **MAJOR** (2.0.0) - Breaking changes

### Release Checklist

- [ ] All tests passing
- [ ] Documentation updated
- [ ] CHANGELOG.md updated
- [ ] Version bumped in package.json
- [ ] Tagged release in Git
- [ ] Published to NPM
- [ ] GitHub release created

## 📞 Getting Help

### Communication Channels

- **GitHub Issues** - Bug reports and feature requests
- **GitHub Discussions** - Community conversations
- **Pull Request Reviews** - Code collaboration

### Response Times

- **Bug reports** - Within 48 hours
- **Feature requests** - Within 1 week
- **Pull requests** - Within 1 week for initial review

## 🎖️ Recognition

### Contributors

All contributors are recognized in:
- GitHub contributors list
- CHANGELOG.md for significant contributions
- Special thanks in release notes

### Becoming a Maintainer

Active contributors may be invited to become maintainers based on:
- **Quality contributions** over time
- **Community engagement** and helpfulness
- **Understanding of project goals** and architecture
- **Commitment to project values**

## 📜 Code of Conduct

### Our Standards

- **Be respectful** and inclusive
- **Focus on constructive feedback**
- **Help others learn and grow**
- **Maintain professionalism**

### Unacceptable Behavior

- Harassment or discrimination
- Spam or off-topic content
- Destructive criticism
- Violation of privacy

## 💝 Thank You

Thank you for contributing to AppIQ Flutter Workflow! Your contributions help make Flutter development better for everyone.

### Support the Project

If you find this project valuable, consider supporting its development:

[![Donate with PayPal](https://img.shields.io/badge/Donate-PayPal-blue.svg?style=for-the-badge&logo=paypal)](https://paypal.me/vhermann)

---

**Built with ❤️ by [AppIQ Solutions](https://appiq-solutions.com)**

*Questions? Contact us through GitHub issues or discussions.*