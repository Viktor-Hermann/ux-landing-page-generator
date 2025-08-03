---
name: ${FEATURE_NAME}
ui: ${UI_STATUS:open}
cubit: ${CUBIT_STATUS:open}
domain: ${DOMAIN_STATUS:open}
data: ${DATA_STATUS:open}
security: ${SECURITY_STATUS:open}
test: ${TEST_STATUS:open}
integration: ${INTEGRATION_STATUS:open}
status: ${OVERALL_STATUS:open}
created: ${CREATED_DATE}
updated: ${UPDATED_DATE}
completion: ${COMPLETION_PERCENTAGE:0}
current_agent: ${CURRENT_AGENT:none}
current_phase: ${CURRENT_PHASE:initialization}
---

# ${FEATURE_NAME} - Flutter Feature Development

## 📊 Current Status
- **Overall Progress**: ${COMPLETION_PERCENTAGE:0}% Complete
- **Current Phase**: ${CURRENT_PHASE:initialization}
- **Active Agent**: ${CURRENT_AGENT:none}
- **Last Updated**: ${UPDATED_DATE}

## 🎯 Feature Description
${FEATURE_DESCRIPTION:Describe your feature here. This will be analyzed by the PO Agent to create detailed tasks and planning.}

## 👤 User Story
${USER_STORY:As a [user type], I want [functionality] so that [benefit].}

## 📋 Requirements
${REQUIREMENTS_LIST:
- [ ] Functional requirement 1
- [ ] Functional requirement 2  
- [ ] Functional requirement 3
- [ ] Non-functional requirement 1
- [ ] Non-functional requirement 2
}

## ✅ Acceptance Criteria
${ACCEPTANCE_CRITERIA:
- [ ] Given [context], when [action], then [expected result]
- [ ] Given [context], when [action], then [expected result]
- [ ] Given [context], when [action], then [expected result]
}

## 🏗️ Technical Specifications
${TECHNICAL_NOTES:
- Add any technical considerations
- Architecture requirements
- Dependencies on other features
- Performance requirements
- Security considerations
}

## 🎨 UI/UX Requirements  
${UI_REQUIREMENTS:
- Screen designs and layouts
- User interaction patterns
- Responsive design requirements
- Accessibility requirements
- Animation and transition needs
}

## 📊 Data Requirements
${DATA_REQUIREMENTS:
- Data models and entities needed
- API endpoints required
- Local storage needs
- Caching strategies
- Offline functionality requirements
}

## 🔒 Security Requirements
${SECURITY_REQUIREMENTS:
- Authentication needs
- Authorization requirements
- Data encryption needs
- COPPA compliance requirements
- Privacy considerations
}

## 🧪 Testing Requirements
${TESTING_REQUIREMENTS:
- Unit test scenarios
- Widget test requirements
- Integration test flows
- Performance test criteria
- Security test requirements
}

## 📈 Agent Progress Overview

### 📋 PO Agent (Phoenix) - Requirements Analysis
**Status**: ${PO_STATUS:pending} | **Progress**: ${PO_PROGRESS:0}%
**Tasks**: ${PO_TASK_COUNT:0}/5 | **Last Activity**: ${PO_LAST_ACTIVITY:Not started}

### 🎨 UI Agent (Aria) - Presentation Layer  
**Status**: ${UI_STATUS:pending} | **Progress**: ${UI_PROGRESS:0}%
**Tasks**: ${UI_TASK_COUNT:0}/5 | **Last Activity**: ${UI_LAST_ACTIVITY:Not started}

### 🔄 Cubit Agent (Sage) - State Management
**Status**: ${CUBIT_STATUS:pending} | **Progress**: ${CUBIT_PROGRESS:0}%
**Tasks**: ${CUBIT_TASK_COUNT:0}/5 | **Last Activity**: ${CUBIT_LAST_ACTIVITY:Not started}

### 🏗️ Domain Agent (Atlas) - Business Logic
**Status**: ${DOMAIN_STATUS:pending} | **Progress**: ${DOMAIN_PROGRESS:0}%
**Tasks**: ${DOMAIN_TASK_COUNT:0}/5 | **Last Activity**: ${DOMAIN_LAST_ACTIVITY:Not started}

### 📊 Data Agent (Nova) - Data Layer
**Status**: ${DATA_STATUS:pending} | **Progress**: ${DATA_PROGRESS:0}%
**Tasks**: ${DATA_TASK_COUNT:0}/5 | **Last Activity**: ${DATA_LAST_ACTIVITY:Not started}

### 🔒 Security Agent (Guardian) - Security & Compliance
**Status**: ${SECURITY_STATUS:pending} | **Progress**: ${SECURITY_PROGRESS:0}%
**Tasks**: ${SECURITY_TASK_COUNT:0}/5 | **Last Activity**: ${SECURITY_LAST_ACTIVITY:Not started}

### 🧪 Test Agent (Trinity) - Quality Assurance
**Status**: ${TEST_STATUS:pending} | **Progress**: ${TEST_PROGRESS:0}%
**Tasks**: ${TEST_TASK_COUNT:0}/5 | **Last Activity**: ${TEST_LAST_ACTIVITY:Not started}

### ✅ Integration Validator - System Integration
**Status**: ${INTEGRATION_STATUS:pending} | **Progress**: ${INTEGRATION_PROGRESS:0}%
**Tasks**: ${INTEGRATION_TASK_COUNT:0}/5 | **Last Activity**: ${INTEGRATION_LAST_ACTIVITY:Not started}

## 🚦 Quality Gates Status

- [ ] **Requirements Gate**: ${QG_REQUIREMENTS:❌ Not Started}
- [ ] **UI Gate**: ${QG_UI:❌ Not Started}
- [ ] **State Gate**: ${QG_STATE:❌ Not Started}
- [ ] **Domain Gate**: ${QG_DOMAIN:❌ Not Started}
- [ ] **Data Gate**: ${QG_DATA:❌ Not Started}
- [ ] **Security Gate**: ${QG_SECURITY:❌ Not Started}
- [ ] **Testing Gate**: ${QG_TESTING:❌ Not Started}
- [ ] **Integration Gate**: ${QG_INTEGRATION:❌ Not Started}

## 🎯 Definition of Done
- [ ] All acceptance criteria met
- [ ] UI implementation complete and responsive (${UI_PROGRESS:0}%)
- [ ] State management implemented (${CUBIT_PROGRESS:0}%)
- [ ] Domain logic implemented (${DOMAIN_PROGRESS:0}%)
- [ ] Data layer implemented (${DATA_PROGRESS:0}%)
- [ ] Security measures implemented (${SECURITY_PROGRESS:0}%)
- [ ] Tests implemented and passing 90%+ coverage (${TEST_PROGRESS:0}%)
- [ ] Integration validation complete (${INTEGRATION_PROGRESS:0}%)
- [ ] Documentation updated
- [ ] Code reviewed and approved
- [ ] Performance requirements met
- [ ] COPPA compliance verified

## 🔄 Parallel Execution Opportunities
${PARALLEL_OPPORTUNITIES:None identified yet}

## 🚨 Current Blockers
${CURRENT_BLOCKERS:None}

## 📝 Notes & Assumptions
${ADDITIONAL_NOTES:Additional notes, assumptions, or constraints.}

---

**🤖 Managed by FeatureMaster** | **📄 Auto-updated by Appiq Workflow System**  
**📞 Commands**: Use `*help` with FeatureMaster for available commands  
**💾 State File**: `docs/features/${FEATURE_NAME}/${FEATURE_NAME}_state.json`  
**📋 Tasks**: `docs/features/${FEATURE_NAME}/${FEATURE_NAME}_tasks.md`  
**📈 History**: `docs/features/${FEATURE_NAME}/${FEATURE_NAME}_history.md`